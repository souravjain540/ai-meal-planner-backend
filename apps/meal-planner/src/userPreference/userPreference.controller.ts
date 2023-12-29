import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPreferenceService } from "./userPreference.service";
import { UserPreferenceControllerBase } from "./base/userPreference.controller.base";

@swagger.ApiTags("userPreferences")
@common.Controller("userPreferences")
export class UserPreferenceController extends UserPreferenceControllerBase {
  constructor(
    protected readonly service: UserPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
