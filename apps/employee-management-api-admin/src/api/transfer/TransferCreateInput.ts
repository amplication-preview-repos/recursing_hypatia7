import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferCreateInput = {
  toCity?: string | null;
  transferDate?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
