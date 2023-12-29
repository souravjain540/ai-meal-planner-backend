export type Meal = {
  createdAt: Date;
  description: string | null;
  id: string;
  mealType?: "Breakfast" | "Lunch" | "Dinner" | null;
  name: string | null;
  tag?: Array<"Vegan" | "GlutenFree" | "HighProtein" | "Keto">;
  updatedAt: Date;
};
