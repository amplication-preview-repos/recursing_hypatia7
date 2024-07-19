import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DiseaseCertificateWhereInput = {
  id?: StringFilter;
  expiryDate?: DateTimeNullableFilter;
  file?: JsonFilter;
  issueDate?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
