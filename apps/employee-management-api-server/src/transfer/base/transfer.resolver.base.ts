/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Transfer } from "./Transfer";
import { TransferCountArgs } from "./TransferCountArgs";
import { TransferFindManyArgs } from "./TransferFindManyArgs";
import { TransferFindUniqueArgs } from "./TransferFindUniqueArgs";
import { CreateTransferArgs } from "./CreateTransferArgs";
import { UpdateTransferArgs } from "./UpdateTransferArgs";
import { DeleteTransferArgs } from "./DeleteTransferArgs";
import { Employee } from "../../employee/base/Employee";
import { TransferService } from "../transfer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Transfer)
export class TransferResolverBase {
  constructor(
    protected readonly service: TransferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "any",
  })
  async _transfersMeta(
    @graphql.Args() args: TransferCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Transfer])
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "any",
  })
  async transfers(
    @graphql.Args() args: TransferFindManyArgs
  ): Promise<Transfer[]> {
    return this.service.transfers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Transfer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "own",
  })
  async transfer(
    @graphql.Args() args: TransferFindUniqueArgs
  ): Promise<Transfer | null> {
    const result = await this.service.transfer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Transfer)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "create",
    possession: "any",
  })
  async createTransfer(
    @graphql.Args() args: CreateTransferArgs
  ): Promise<Transfer> {
    return await this.service.createTransfer({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Transfer)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "update",
    possession: "any",
  })
  async updateTransfer(
    @graphql.Args() args: UpdateTransferArgs
  ): Promise<Transfer | null> {
    try {
      return await this.service.updateTransfer({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Transfer)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "delete",
    possession: "any",
  })
  async deleteTransfer(
    @graphql.Args() args: DeleteTransferArgs
  ): Promise<Transfer | null> {
    try {
      return await this.service.deleteTransfer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployee(
    @graphql.Parent() parent: Transfer
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
