import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PresenceService } from "./presence.service";
import { PresenceControllerBase } from "./base/presence.controller.base";

@swagger.ApiTags("presences")
@common.Controller("presences")
export class PresenceController extends PresenceControllerBase {
  constructor(
    protected readonly service: PresenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
