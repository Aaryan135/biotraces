/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DoctorPrescription } from "./DoctorPrescription";
import { DoctorPrescriptionCountArgs } from "./DoctorPrescriptionCountArgs";
import { DoctorPrescriptionFindManyArgs } from "./DoctorPrescriptionFindManyArgs";
import { DoctorPrescriptionFindUniqueArgs } from "./DoctorPrescriptionFindUniqueArgs";
import { DeleteDoctorPrescriptionArgs } from "./DeleteDoctorPrescriptionArgs";
import { DoctorPrescriptionService } from "../doctorPrescription.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorPrescription)
export class DoctorPrescriptionResolverBase {
  constructor(
    protected readonly service: DoctorPrescriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DoctorPrescription",
    action: "read",
    possession: "any",
  })
  async _doctorPrescriptionsMeta(
    @graphql.Args() args: DoctorPrescriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DoctorPrescription])
  @nestAccessControl.UseRoles({
    resource: "DoctorPrescription",
    action: "read",
    possession: "any",
  })
  async doctorPrescriptions(
    @graphql.Args() args: DoctorPrescriptionFindManyArgs
  ): Promise<DoctorPrescription[]> {
    return this.service.doctorPrescriptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DoctorPrescription, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DoctorPrescription",
    action: "read",
    possession: "own",
  })
  async doctorPrescription(
    @graphql.Args() args: DoctorPrescriptionFindUniqueArgs
  ): Promise<DoctorPrescription | null> {
    const result = await this.service.doctorPrescription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DoctorPrescription)
  @nestAccessControl.UseRoles({
    resource: "DoctorPrescription",
    action: "delete",
    possession: "any",
  })
  async deleteDoctorPrescription(
    @graphql.Args() args: DeleteDoctorPrescriptionArgs
  ): Promise<DoctorPrescription | null> {
    try {
      return await this.service.deleteDoctorPrescription(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
