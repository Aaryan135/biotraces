import { TaxReturn as TTaxReturn } from "../api/taxReturn/TaxReturn";

export const TAXRETURN_TITLE_FIELD = "id";

export const TaxReturnTitle = (record: TTaxReturn): string => {
  return record.id?.toString() || String(record.id);
};
