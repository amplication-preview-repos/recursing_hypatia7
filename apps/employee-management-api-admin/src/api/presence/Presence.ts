import { Employee } from "../employee/Employee";

export type Presence = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTimeOfPresence: Date | null;
  status?: "Option1" | null;
  hours: number | null;
  employee?: Employee | null;
};
