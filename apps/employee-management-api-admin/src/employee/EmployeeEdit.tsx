import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PresenceTitle } from "../presence/PresenceTitle";
import { TransferTitle } from "../transfer/TransferTitle";
import { HolidayTitle } from "../holiday/HolidayTitle";
import { PermissionTitle } from "../permission/PermissionTitle";
import { DiseaseCertificateTitle } from "../diseaseCertificate/DiseaseCertificateTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="presences"
          reference="Presence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PresenceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transfers"
          reference="Transfer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransferTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="holidays"
          reference="Holiday"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HolidayTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="permissions"
          reference="Permission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="diseaseCertificates"
          reference="DiseaseCertificate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiseaseCertificateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
