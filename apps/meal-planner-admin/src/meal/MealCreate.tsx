import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

export const MealCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="mealType"
          label="mealType"
          choices={[
            { label: "breakfast", value: "Breakfast" },
            { label: "lunch", value: "Lunch" },
            { label: "dinner", value: "Dinner" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <SelectArrayInput
          label="tag"
          source="tag"
          choices={[
            { label: "vegan", value: "Vegan" },
            { label: "gluten free", value: "GlutenFree" },
            { label: "high protein", value: "HighProtein" },
            { label: "keto", value: "Keto" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
