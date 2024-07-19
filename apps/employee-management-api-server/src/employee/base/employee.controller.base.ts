/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployeeService } from "../employee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { PresenceFindManyArgs } from "../../presence/base/PresenceFindManyArgs";
import { Presence } from "../../presence/base/Presence";
import { PresenceWhereUniqueInput } from "../../presence/base/PresenceWhereUniqueInput";
import { TransferFindManyArgs } from "../../transfer/base/TransferFindManyArgs";
import { Transfer } from "../../transfer/base/Transfer";
import { TransferWhereUniqueInput } from "../../transfer/base/TransferWhereUniqueInput";
import { HolidayFindManyArgs } from "../../holiday/base/HolidayFindManyArgs";
import { Holiday } from "../../holiday/base/Holiday";
import { HolidayWhereUniqueInput } from "../../holiday/base/HolidayWhereUniqueInput";
import { PermissionFindManyArgs } from "../../permission/base/PermissionFindManyArgs";
import { Permission } from "../../permission/base/Permission";
import { PermissionWhereUniqueInput } from "../../permission/base/PermissionWhereUniqueInput";
import { DiseaseCertificateFindManyArgs } from "../../diseaseCertificate/base/DiseaseCertificateFindManyArgs";
import { DiseaseCertificate } from "../../diseaseCertificate/base/DiseaseCertificate";
import { DiseaseCertificateWhereUniqueInput } from "../../diseaseCertificate/base/DiseaseCertificateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/presences")
  @ApiNestedQuery(PresenceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Presence",
    action: "read",
    possession: "any",
  })
  async findPresences(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Presence[]> {
    const query = plainToClass(PresenceFindManyArgs, request.query);
    const results = await this.service.findPresences(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        dateTimeOfPresence: true,
        status: true,
        hours: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/presences")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectPresences(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PresenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      presences: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/presences")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updatePresences(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PresenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      presences: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/presences")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectPresences(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PresenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      presences: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transfers")
  @ApiNestedQuery(TransferFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "any",
  })
  async findTransfers(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Transfer[]> {
    const query = plainToClass(TransferFindManyArgs, request.query);
    const results = await this.service.findTransfers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        toCity: true,
        transferDate: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transfers")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transfers")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transfers")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectTransfers(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TransferWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transfers: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/holidays")
  @ApiNestedQuery(HolidayFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "read",
    possession: "any",
  })
  async findHolidays(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Holiday[]> {
    const query = plainToClass(HolidayFindManyArgs, request.query);
    const results = await this.service.findHolidays(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startDate: true,
        endDate: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/holidays")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectHolidays(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: HolidayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      holidays: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/holidays")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateHolidays(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: HolidayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      holidays: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/holidays")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectHolidays(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: HolidayWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      holidays: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/permissions")
  @ApiNestedQuery(PermissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Permission",
    action: "read",
    possession: "any",
  })
  async findPermissions(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Permission[]> {
    const query = plainToClass(PermissionFindManyArgs, request.query);
    const results = await this.service.findPermissions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startDate: true,
        endDate: true,
        reason: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/permissions")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectPermissions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/permissions")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updatePermissions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/permissions")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectPermissions(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/diseaseCertificates")
  @ApiNestedQuery(DiseaseCertificateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DiseaseCertificate",
    action: "read",
    possession: "any",
  })
  async findDiseaseCertificates(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<DiseaseCertificate[]> {
    const query = plainToClass(DiseaseCertificateFindManyArgs, request.query);
    const results = await this.service.findDiseaseCertificates(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        expiryDate: true,
        file: true,
        issueDate: true,

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/diseaseCertificates")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectDiseaseCertificates(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DiseaseCertificateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      diseaseCertificates: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/diseaseCertificates")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateDiseaseCertificates(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DiseaseCertificateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      diseaseCertificates: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/diseaseCertificates")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectDiseaseCertificates(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DiseaseCertificateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      diseaseCertificates: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
