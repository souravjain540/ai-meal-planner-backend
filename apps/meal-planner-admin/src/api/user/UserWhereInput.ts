import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  userId?: StringNullableFilter;
  username?: StringFilter;
};
