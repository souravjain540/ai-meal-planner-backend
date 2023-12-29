import { Meal as TMeal } from "../api/meal/Meal";

export const MEAL_TITLE_FIELD = "name";

export const MealTitle = (record: TMeal): string => {
  return record.name?.toString() || String(record.id);
};
