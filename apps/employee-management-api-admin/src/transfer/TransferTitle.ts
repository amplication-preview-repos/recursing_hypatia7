import { Transfer as TTransfer } from "../api/transfer/Transfer";

export const TRANSFER_TITLE_FIELD = "toCity";

export const TransferTitle = (record: TTransfer): string => {
  return record.toCity?.toString() || String(record.id);
};
