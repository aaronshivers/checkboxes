import { Employee } from '../employees/employee';

export interface Team {
  id: number;
  name: string;
  lead: Employee;
  members: Employee[];
}
