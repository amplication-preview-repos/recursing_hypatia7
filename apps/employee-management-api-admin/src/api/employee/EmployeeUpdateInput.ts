import { PresenceUpdateManyWithoutEmployeesInput } from "./PresenceUpdateManyWithoutEmployeesInput";
import { TransferUpdateManyWithoutEmployeesInput } from "./TransferUpdateManyWithoutEmployeesInput";
import { HolidayUpdateManyWithoutEmployeesInput } from "./HolidayUpdateManyWithoutEmployeesInput";
import { PermissionUpdateManyWithoutEmployeesInput } from "./PermissionUpdateManyWithoutEmployeesInput";
import { DiseaseCertificateUpdateManyWithoutEmployeesInput } from "./DiseaseCertificateUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  presences?: PresenceUpdateManyWithoutEmployeesInput;
  transfers?: TransferUpdateManyWithoutEmployeesInput;
  holidays?: HolidayUpdateManyWithoutEmployeesInput;
  permissions?: PermissionUpdateManyWithoutEmployeesInput;
  diseaseCertificates?: DiseaseCertificateUpdateManyWithoutEmployeesInput;
};
