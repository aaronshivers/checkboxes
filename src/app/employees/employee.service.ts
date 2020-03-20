import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

const EMPLOYEES: Employee[] = [
  { id: 1, name: 'bob' },
  { id: 2, name: 'sally' },
  { id: 3, name: 'doug' },
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
}
