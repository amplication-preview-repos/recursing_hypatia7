import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiseaseCertificateModuleBase } from "./base/diseaseCertificate.module.base";
import { DiseaseCertificateService } from "./diseaseCertificate.service";
import { DiseaseCertificateController } from "./diseaseCertificate.controller";
import { DiseaseCertificateResolver } from "./diseaseCertificate.resolver";

@Module({
  imports: [DiseaseCertificateModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiseaseCertificateController],
  providers: [DiseaseCertificateService, DiseaseCertificateResolver],
  exports: [DiseaseCertificateService],
})
export class DiseaseCertificateModule {}
