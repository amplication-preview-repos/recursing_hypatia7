import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PresenceWhereInput = {
  id?: StringFilter;
  dateTimeOfPresence?: DateTimeNullableFilter;
  status?: "Option1";
  hours?: IntNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
