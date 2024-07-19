import { DiseaseCertificate as TDiseaseCertificate } from "../api/diseaseCertificate/DiseaseCertificate";

export const DISEASECERTIFICATE_TITLE_FIELD = "id";

export const DiseaseCertificateTitle = (
  record: TDiseaseCertificate
): string => {
  return record.id?.toString() || String(record.id);
};
