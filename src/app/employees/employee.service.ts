import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

const EMPLOYEES: Employee[] = [
  { id: 1, name: 'bob' },
  { id: 2, name: 'sally' },
  { id: 3, name: 'doug' },
  { id: 4, name: 'mary' },
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = EMPLOYEES;

  constructor() {
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployee(employeeId: number): Employee {
    const leadIndex: number = this.getEmployeeIndex(employeeId);
    return this.employees[leadIndex];
  }

  private getEmployeeIndex(id: number): number {
    return this.employees.findIndex((employee: Employee) => employee.id === +id);
  }
}
