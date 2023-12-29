import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

export const MealEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
