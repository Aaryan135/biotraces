import { VaccinationWhereInput } from "./VaccinationWhereInput";
import { VaccinationOrderByInput } from "./VaccinationOrderByInput";

export type VaccinationFindManyArgs = {
  where?: VaccinationWhereInput;
  orderBy?: Array<VaccinationOrderByInput>;
  skip?: number;
  take?: number;
};
