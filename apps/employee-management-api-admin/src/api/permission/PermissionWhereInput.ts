import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PermissionWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  reason?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
