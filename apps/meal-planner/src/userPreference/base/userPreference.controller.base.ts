/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserPreferenceService } from "../userPreference.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserPreferenceCreateInput } from "./UserPreferenceCreateInput";
import { UserPreference } from "./UserPreference";
import { UserPreferenceFindManyArgs } from "./UserPreferenceFindManyArgs";
import { UserPreferenceWhereUniqueInput } from "./UserPreferenceWhereUniqueInput";
import { UserPreferenceUpdateInput } from "./UserPreferenceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserPreferenceControllerBase {
  constructor(
    protected readonly service: UserPreferenceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserPreference })
  @nestAccessControl.UseRoles({
    resource: "UserPreference",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserPreference(
    @common.Body() data: UserPreferenceCreateInput
  ): Promise<UserPreference> {
    return await this.service.createUserPreference({
      data: data,
      select: {
        createdAt: true,
        dietaryRestrictions: true,
        dislikedIngredients: true,
        favoriteCuisines: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserPreference] })
  @ApiNestedQuery(UserPreferenceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserPreference",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userPreferences(
    @common.Req() request: Request
  ): Promise<UserPreference[]> {
    const args = plainToClass(UserPreferenceFindManyArgs, request.query);
    return this.service.userPreferences({
      ...args,
      select: {
        createdAt: true,
        dietaryRestrictions: true,
        dislikedIngredients: true,
        favoriteCuisines: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserPreference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPreference",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userPreference(
    @common.Param() params: UserPreferenceWhereUniqueInput
  ): Promise<UserPreference | null> {
    const result = await this.service.userPreference({
      where: params,
      select: {
        createdAt: true,
        dietaryRestrictions: true,
        dislikedIngredients: true,
        favoriteCuisines: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserPreference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPreference",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserPreference(
    @common.Param() params: UserPreferenceWhereUniqueInput,
    @common.Body() data: UserPreferenceUpdateInput
  ): Promise<UserPreference | null> {
    try {
      return await this.service.updateUserPreference({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dietaryRestrictions: true,
          dislikedIngredients: true,
          favoriteCuisines: true,
          id: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserPreference })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPreference",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserPreference(
    @common.Param() params: UserPreferenceWhereUniqueInput
  ): Promise<UserPreference | null> {
    try {
      return await this.service.deleteUserPreference({
        where: params,
        select: {
          createdAt: true,
          dietaryRestrictions: true,
          dislikedIngredients: true,
          favoriteCuisines: true,
          id: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}