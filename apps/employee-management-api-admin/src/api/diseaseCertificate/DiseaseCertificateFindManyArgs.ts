import { DiseaseCertificateWhereInput } from "./DiseaseCertificateWhereInput";
import { DiseaseCertificateOrderByInput } from "./DiseaseCertificateOrderByInput";

export type DiseaseCertificateFindManyArgs = {
  where?: DiseaseCertificateWhereInput;
  orderBy?: Array<DiseaseCertificateOrderByInput>;
  skip?: number;
  take?: number;
};
