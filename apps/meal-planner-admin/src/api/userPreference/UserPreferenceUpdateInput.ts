export type UserPreferenceUpdateInput = {
  dietaryRestrictions?: Array<
    "Vegetarian" | "Vegan" | "NutFree" | "Eggetarian"
  >;
  dislikedIngredients?: string | null;
  favoriteCuisines?:
    | "Italian"
    | "Indian"
    | "Mexican"
    | "American"
    | "Mughlai"
    | null;
  userId?: string | null;
};
