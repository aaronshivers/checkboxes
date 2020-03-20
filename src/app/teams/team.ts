import { Employee } from '../employees/employee';

export interface Team {
  id: number;
  name: string;
  members: Employee[];
}
