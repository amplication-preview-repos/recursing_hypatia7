import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransferServiceBase } from "./base/transfer.service.base";

@Injectable()
export class TransferService extends TransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
