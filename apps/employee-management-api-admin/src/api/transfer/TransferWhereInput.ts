import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferWhereInput = {
  id?: StringFilter;
  toCity?: StringNullableFilter;
  transferDate?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
