import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DoctorPrescriptionResolverBase } from "./base/doctorPrescription.resolver.base";
import { DoctorPrescription } from "./base/DoctorPrescription";
import { DoctorPrescriptionService } from "./doctorPrescription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorPrescription)
export class DoctorPrescriptionResolver extends DoctorPrescriptionResolverBase {
  constructor(
    protected readonly service: DoctorPrescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
