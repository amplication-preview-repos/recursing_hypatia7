import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PresenceServiceBase } from "./base/presence.service.base";

@Injectable()
export class PresenceService extends PresenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
