import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxReturnService } from "./taxReturn.service";
import { TaxReturnControllerBase } from "./base/taxReturn.controller.base";

@swagger.ApiTags("taxReturns")
@common.Controller("taxReturns")
export class TaxReturnController extends TaxReturnControllerBase {
  constructor(
    protected readonly service: TaxReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
