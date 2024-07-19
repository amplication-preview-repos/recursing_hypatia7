import { SortOrder } from "../../util/SortOrder";

export type HolidayOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  employeeId?: SortOrder;
};
