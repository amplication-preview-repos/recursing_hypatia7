import { Employee } from "../employee/Employee";

export type Permission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  reason: string | null;
  employee?: Employee | null;
};
