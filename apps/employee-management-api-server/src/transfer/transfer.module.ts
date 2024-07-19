import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransferModuleBase } from "./base/transfer.module.base";
import { TransferService } from "./transfer.service";
import { TransferController } from "./transfer.controller";
import { TransferResolver } from "./transfer.resolver";

@Module({
  imports: [TransferModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransferController],
  providers: [TransferService, TransferResolver],
  exports: [TransferService],
})
export class TransferModule {}
