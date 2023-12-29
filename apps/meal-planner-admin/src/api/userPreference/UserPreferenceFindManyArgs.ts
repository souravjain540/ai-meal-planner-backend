import { UserPreferenceWhereInput } from "./UserPreferenceWhereInput";
import { UserPreferenceOrderByInput } from "./UserPreferenceOrderByInput";

export type UserPreferenceFindManyArgs = {
  where?: UserPreferenceWhereInput;
  orderBy?: Array<UserPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
