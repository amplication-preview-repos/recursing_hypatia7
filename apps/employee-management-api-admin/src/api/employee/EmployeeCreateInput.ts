import { PresenceCreateNestedManyWithoutEmployeesInput } from "./PresenceCreateNestedManyWithoutEmployeesInput";
import { TransferCreateNestedManyWithoutEmployeesInput } from "./TransferCreateNestedManyWithoutEmployeesInput";
import { HolidayCreateNestedManyWithoutEmployeesInput } from "./HolidayCreateNestedManyWithoutEmployeesInput";
import { PermissionCreateNestedManyWithoutEmployeesInput } from "./PermissionCreateNestedManyWithoutEmployeesInput";
import { DiseaseCertificateCreateNestedManyWithoutEmployeesInput } from "./DiseaseCertificateCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  presences?: PresenceCreateNestedManyWithoutEmployeesInput;
  transfers?: TransferCreateNestedManyWithoutEmployeesInput;
  holidays?: HolidayCreateNestedManyWithoutEmployeesInput;
  permissions?: PermissionCreateNestedManyWithoutEmployeesInput;
  diseaseCertificates?: DiseaseCertificateCreateNestedManyWithoutEmployeesInput;
};
