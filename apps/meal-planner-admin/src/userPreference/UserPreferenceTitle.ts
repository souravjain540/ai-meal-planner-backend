import { UserPreference as TUserPreference } from "../api/userPreference/UserPreference";

export const USERPREFERENCE_TITLE_FIELD = "dislikedIngredients";

export const UserPreferenceTitle = (record: TUserPreference): string => {
  return record.dislikedIngredients?.toString() || String(record.id);
};
