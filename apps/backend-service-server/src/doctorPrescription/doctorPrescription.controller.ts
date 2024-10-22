import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorPrescriptionService } from "./doctorPrescription.service";
import { DoctorPrescriptionControllerBase } from "./base/doctorPrescription.controller.base";

@swagger.ApiTags("doctorPrescriptions")
@common.Controller("doctorPrescriptions")
export class DoctorPrescriptionController extends DoctorPrescriptionControllerBase {
  constructor(
    protected readonly service: DoctorPrescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
