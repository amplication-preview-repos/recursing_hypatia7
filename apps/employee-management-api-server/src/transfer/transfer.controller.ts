import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransferService } from "./transfer.service";
import { TransferControllerBase } from "./base/transfer.controller.base";

@swagger.ApiTags("transfers")
@common.Controller("transfers")
export class TransferController extends TransferControllerBase {
  constructor(
    protected readonly service: TransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
