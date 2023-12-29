export type MealUpdateInput = {
  description?: string | null;
  mealType?: "Breakfast" | "Lunch" | "Dinner" | null;
  name?: string | null;
  tag?: Array<"Vegan" | "GlutenFree" | "HighProtein" | "Keto">;
};
