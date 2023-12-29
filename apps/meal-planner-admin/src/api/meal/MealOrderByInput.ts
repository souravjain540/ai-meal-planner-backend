import { SortOrder } from "../../util/SortOrder";

export type MealOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  mealType?: SortOrder;
  name?: SortOrder;
  tag?: SortOrder;
  updatedAt?: SortOrder;
};
