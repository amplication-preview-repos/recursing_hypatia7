import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type HolidayWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
