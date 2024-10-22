import { Vaccination as TVaccination } from "../api/vaccination/Vaccination";

export const VACCINATION_TITLE_FIELD = "id";

export const VaccinationTitle = (record: TVaccination): string => {
  return record.id?.toString() || String(record.id);
};
