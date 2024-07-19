import { SortOrder } from "../../util/SortOrder";

export type TransferOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  toCity?: SortOrder;
  transferDate?: SortOrder;
  employeeId?: SortOrder;
};
