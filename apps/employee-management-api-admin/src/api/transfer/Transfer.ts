import { Employee } from "../employee/Employee";

export type Transfer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  toCity: string | null;
  transferDate: Date | null;
  employee?: Employee | null;
};
