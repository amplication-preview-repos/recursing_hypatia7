import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HolidayModuleBase } from "./base/holiday.module.base";
import { HolidayService } from "./holiday.service";
import { HolidayController } from "./holiday.controller";
import { HolidayResolver } from "./holiday.resolver";

@Module({
  imports: [HolidayModuleBase, forwardRef(() => AuthModule)],
  controllers: [HolidayController],
  providers: [HolidayService, HolidayResolver],
  exports: [HolidayService],
})
export class HolidayModule {}
