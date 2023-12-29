import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MealService } from "./meal.service";
import { MealControllerBase } from "./base/meal.controller.base";

@swagger.ApiTags("meals")
@common.Controller("meals")
export class MealController extends MealControllerBase {
  constructor(
    protected readonly service: MealService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
