import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VaccinationService } from "./vaccination.service";
import { VaccinationControllerBase } from "./base/vaccination.controller.base";

@swagger.ApiTags("vaccinations")
@common.Controller("vaccinations")
export class VaccinationController extends VaccinationControllerBase {
  constructor(
    protected readonly service: VaccinationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
