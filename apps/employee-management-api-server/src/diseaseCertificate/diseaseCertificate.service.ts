import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiseaseCertificateServiceBase } from "./base/diseaseCertificate.service.base";

@Injectable()
export class DiseaseCertificateService extends DiseaseCertificateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
