import { SortOrder } from "../../util/SortOrder";

export type PresenceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTimeOfPresence?: SortOrder;
  status?: SortOrder;
  hours?: SortOrder;
  employeeId?: SortOrder;
};
