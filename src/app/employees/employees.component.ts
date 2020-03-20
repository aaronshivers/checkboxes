import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: [ './employees.component.css' ]
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees: Employee[];
  employeeSubscription: Subscription;

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  getEmployees(): void {
    this.employeeSubscription = this.employeeService.getEmployees()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
}
