import { Presence } from "../presence/Presence";
import { Transfer } from "../transfer/Transfer";
import { Holiday } from "../holiday/Holiday";
import { Permission } from "../permission/Permission";
import { DiseaseCertificate } from "../diseaseCertificate/DiseaseCertificate";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  presences?: Array<Presence>;
  transfers?: Array<Transfer>;
  holidays?: Array<Holiday>;
  permissions?: Array<Permission>;
  diseaseCertificates?: Array<DiseaseCertificate>;
};
