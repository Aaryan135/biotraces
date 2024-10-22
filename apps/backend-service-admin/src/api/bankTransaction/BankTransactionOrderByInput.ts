import { SortOrder } from "../../util/SortOrder";

export type BankTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
