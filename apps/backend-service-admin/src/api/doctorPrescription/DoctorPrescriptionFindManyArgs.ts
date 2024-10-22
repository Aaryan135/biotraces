import { DoctorPrescriptionWhereInput } from "./DoctorPrescriptionWhereInput";
import { DoctorPrescriptionOrderByInput } from "./DoctorPrescriptionOrderByInput";

export type DoctorPrescriptionFindManyArgs = {
  where?: DoctorPrescriptionWhereInput;
  orderBy?: Array<DoctorPrescriptionOrderByInput>;
  skip?: number;
  take?: number;
};
