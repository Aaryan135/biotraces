import { TaxReturnWhereInput } from "./TaxReturnWhereInput";
import { TaxReturnOrderByInput } from "./TaxReturnOrderByInput";

export type TaxReturnFindManyArgs = {
  where?: TaxReturnWhereInput;
  orderBy?: Array<TaxReturnOrderByInput>;
  skip?: number;
  take?: number;
};
