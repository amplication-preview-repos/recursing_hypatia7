import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type HolidayUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
