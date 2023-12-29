import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MealServiceBase } from "./base/meal.service.base";

@Injectable()
export class MealService extends MealServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
