import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPreferenceServiceBase } from "./base/userPreference.service.base";

@Injectable()
export class UserPreferenceService extends UserPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
