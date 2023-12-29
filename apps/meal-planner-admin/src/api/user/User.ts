import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  roles: JsonValue;
  updatedAt: Date;
  userId: string | null;
  username: string;
};
