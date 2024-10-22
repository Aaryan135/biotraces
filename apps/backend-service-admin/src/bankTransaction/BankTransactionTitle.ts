import { BankTransaction as TBankTransaction } from "../api/bankTransaction/BankTransaction";

export const BANKTRANSACTION_TITLE_FIELD = "id";

export const BankTransactionTitle = (record: TBankTransaction): string => {
  return record.id?.toString() || String(record.id);
};
