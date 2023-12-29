import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserPreferenceWhereInput = {
  dislikedIngredients?: StringNullableFilter;
  favoriteCuisines?: "Italian" | "Indian" | "Mexican" | "American" | "Mughlai";
  id?: StringFilter;
  userId?: StringNullableFilter;
};
