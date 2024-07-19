import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PresenceModuleBase } from "./base/presence.module.base";
import { PresenceService } from "./presence.service";
import { PresenceController } from "./presence.controller";
import { PresenceResolver } from "./presence.resolver";

@Module({
  imports: [PresenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PresenceController],
  providers: [PresenceService, PresenceResolver],
  exports: [PresenceService],
})
export class PresenceModule {}
