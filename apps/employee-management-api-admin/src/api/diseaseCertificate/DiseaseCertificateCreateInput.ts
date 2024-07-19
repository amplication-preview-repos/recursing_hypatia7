import { InputJsonValue } from "../../types";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DiseaseCertificateCreateInput = {
  expiryDate?: Date | null;
  file?: InputJsonValue;
  issueDate?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
