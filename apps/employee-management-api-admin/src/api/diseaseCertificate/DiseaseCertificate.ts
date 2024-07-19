import { JsonValue } from "type-fest";
import { Employee } from "../employee/Employee";

export type DiseaseCertificate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiryDate: Date | null;
  file: JsonValue;
  issueDate: Date | null;
  employee?: Employee | null;
};
