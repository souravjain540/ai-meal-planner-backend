import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const UserPreferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="DietaryRestrictions"
          source="dietaryRestrictions"
          choices={[
            { label: "vegetarian", value: "Vegetarian" },
            { label: "vegan", value: "Vegan" },
            { label: "nut free", value: "NutFree" },
            { label: "eggetarian", value: "Eggetarian" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="DislikedIngredients" source="dislikedIngredients" />
        <SelectInput
          source="favoriteCuisines"
          label="FavoriteCuisines"
          choices={[
            { label: "italian", value: "Italian" },
            { label: "indian", value: "Indian" },
            { label: "mexican", value: "Mexican" },
            { label: "american", value: "American" },
            { label: "mughlai", value: "Mughlai" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
