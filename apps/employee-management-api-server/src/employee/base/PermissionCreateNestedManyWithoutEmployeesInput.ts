/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PermissionWhereUniqueInput } from "../../permission/base/PermissionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PermissionCreateNestedManyWithoutEmployeesInput {
  @Field(() => [PermissionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PermissionWhereUniqueInput],
  })
  connect?: Array<PermissionWhereUniqueInput>;
}

export { PermissionCreateNestedManyWithoutEmployeesInput as PermissionCreateNestedManyWithoutEmployeesInput };
