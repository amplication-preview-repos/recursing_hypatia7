import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PresenceUpdateInput = {
  dateTimeOfPresence?: Date | null;
  status?: "Option1" | null;
  hours?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
};
