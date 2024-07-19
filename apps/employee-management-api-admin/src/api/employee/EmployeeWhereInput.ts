import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PresenceListRelationFilter } from "../presence/PresenceListRelationFilter";
import { TransferListRelationFilter } from "../transfer/TransferListRelationFilter";
import { HolidayListRelationFilter } from "../holiday/HolidayListRelationFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { DiseaseCertificateListRelationFilter } from "../diseaseCertificate/DiseaseCertificateListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  presences?: PresenceListRelationFilter;
  transfers?: TransferListRelationFilter;
  holidays?: HolidayListRelationFilter;
  permissions?: PermissionListRelationFilter;
  diseaseCertificates?: DiseaseCertificateListRelationFilter;
};
