import { DoctorPrescription as TDoctorPrescription } from "../api/doctorPrescription/DoctorPrescription";

export const DOCTORPRESCRIPTION_TITLE_FIELD = "id";

export const DoctorPrescriptionTitle = (
  record: TDoctorPrescription
): string => {
  return record.id?.toString() || String(record.id);
};
