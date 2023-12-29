export type UserPreference = {
  createdAt: Date;
  dietaryRestrictions?: Array<
    "Vegetarian" | "Vegan" | "NutFree" | "Eggetarian"
  >;
  dislikedIngredients: string | null;
  favoriteCuisines?:
    | "Italian"
    | "Indian"
    | "Mexican"
    | "American"
    | "Mughlai"
    | null;
  id: string;
  updatedAt: Date;
  userId: string | null;
};
