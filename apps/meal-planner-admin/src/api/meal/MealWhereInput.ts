import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MealWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  mealType?: "Breakfast" | "Lunch" | "Dinner";
  name?: StringNullableFilter;
};
