import { MealWhereUniqueInput } from "./MealWhereUniqueInput";
import { MealUpdateInput } from "./MealUpdateInput";

export type UpdateMealArgs = {
  where: MealWhereUniqueInput;
  data: MealUpdateInput;
};
