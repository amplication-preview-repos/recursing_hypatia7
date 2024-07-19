import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PermissionUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  reason?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
};
