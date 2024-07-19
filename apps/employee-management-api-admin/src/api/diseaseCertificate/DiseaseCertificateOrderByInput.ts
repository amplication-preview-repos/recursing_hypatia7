import { SortOrder } from "../../util/SortOrder";

export type DiseaseCertificateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  expiryDate?: SortOrder;
  file?: SortOrder;
  issueDate?: SortOrder;
  employeeId?: SortOrder;
};
