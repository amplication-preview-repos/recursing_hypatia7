import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  reason?: SortOrder;
  employeeId?: SortOrder;
};
