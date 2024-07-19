import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type HolidayCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
