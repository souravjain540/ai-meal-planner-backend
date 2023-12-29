import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  name: string;
  password: string;
  roles: InputJsonValue;
  userId?: string | null;
  username: string;
};
