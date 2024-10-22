import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VaccinationModuleBase } from "./base/vaccination.module.base";
import { VaccinationService } from "./vaccination.service";
import { VaccinationController } from "./vaccination.controller";
import { VaccinationResolver } from "./vaccination.resolver";

@Module({
  imports: [VaccinationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VaccinationController],
  providers: [VaccinationService, VaccinationResolver],
  exports: [VaccinationService],
})
export class VaccinationModule {}
