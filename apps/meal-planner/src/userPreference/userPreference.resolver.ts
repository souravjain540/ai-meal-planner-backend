import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPreferenceResolverBase } from "./base/userPreference.resolver.base";
import { UserPreference } from "./base/UserPreference";
import { UserPreferenceService } from "./userPreference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPreference)
export class UserPreferenceResolver extends UserPreferenceResolverBase {
  constructor(
    protected readonly service: UserPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
