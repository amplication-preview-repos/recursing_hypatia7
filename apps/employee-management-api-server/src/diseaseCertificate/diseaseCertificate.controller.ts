import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiseaseCertificateService } from "./diseaseCertificate.service";
import { DiseaseCertificateControllerBase } from "./base/diseaseCertificate.controller.base";

@swagger.ApiTags("diseaseCertificates")
@common.Controller("diseaseCertificates")
export class DiseaseCertificateController extends DiseaseCertificateControllerBase {
  constructor(
    protected readonly service: DiseaseCertificateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
