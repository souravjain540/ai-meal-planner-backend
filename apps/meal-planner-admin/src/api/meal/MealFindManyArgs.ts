import { MealWhereInput } from "./MealWhereInput";
import { MealOrderByInput } from "./MealOrderByInput";

export type MealFindManyArgs = {
  where?: MealWhereInput;
  orderBy?: Array<MealOrderByInput>;
  skip?: number;
  take?: number;
};
