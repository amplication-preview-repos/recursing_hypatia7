import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PermissionCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  reason?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
