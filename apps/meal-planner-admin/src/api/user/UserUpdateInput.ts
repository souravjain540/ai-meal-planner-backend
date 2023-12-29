import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  name?: string;
  password?: string;
  roles?: InputJsonValue;
  userId?: string | null;
  username?: string;
};
