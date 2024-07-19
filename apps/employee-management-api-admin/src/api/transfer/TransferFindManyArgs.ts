import { TransferWhereInput } from "./TransferWhereInput";
import { TransferOrderByInput } from "./TransferOrderByInput";

export type TransferFindManyArgs = {
  where?: TransferWhereInput;
  orderBy?: Array<TransferOrderByInput>;
  skip?: number;
  take?: number;
};
