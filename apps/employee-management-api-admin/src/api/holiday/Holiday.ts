import { Employee } from "../employee/Employee";

export type Holiday = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  employee?: Employee | null;
};
