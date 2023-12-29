import { SortOrder } from "../../util/SortOrder";

export type UserPreferenceOrderByInput = {
  createdAt?: SortOrder;
  dietaryRestrictions?: SortOrder;
  dislikedIngredients?: SortOrder;
  favoriteCuisines?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
