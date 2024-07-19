import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferUpdateInput = {
  toCity?: string | null;
  transferDate?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
