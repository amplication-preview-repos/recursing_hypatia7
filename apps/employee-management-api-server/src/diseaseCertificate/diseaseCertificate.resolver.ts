import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiseaseCertificateResolverBase } from "./base/diseaseCertificate.resolver.base";
import { DiseaseCertificate } from "./base/DiseaseCertificate";
import { DiseaseCertificateService } from "./diseaseCertificate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiseaseCertificate)
export class DiseaseCertificateResolver extends DiseaseCertificateResolverBase {
  constructor(
    protected readonly service: DiseaseCertificateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
