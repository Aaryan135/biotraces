import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TaxReturnResolverBase } from "./base/taxReturn.resolver.base";
import { TaxReturn } from "./base/TaxReturn";
import { TaxReturnService } from "./taxReturn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TaxReturn)
export class TaxReturnResolver extends TaxReturnResolverBase {
  constructor(
    protected readonly service: TaxReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
