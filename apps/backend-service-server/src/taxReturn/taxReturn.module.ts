import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxReturnModuleBase } from "./base/taxReturn.module.base";
import { TaxReturnService } from "./taxReturn.service";
import { TaxReturnController } from "./taxReturn.controller";
import { TaxReturnResolver } from "./taxReturn.resolver";

@Module({
  imports: [TaxReturnModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxReturnController],
  providers: [TaxReturnService, TaxReturnResolver],
  exports: [TaxReturnService],
})
export class TaxReturnModule {}
