import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MealList } from "./meal/MealList";
import { MealCreate } from "./meal/MealCreate";
import { MealEdit } from "./meal/MealEdit";
import { MealShow } from "./meal/MealShow";
import { UserPreferenceList } from "./userPreference/UserPreferenceList";
import { UserPreferenceCreate } from "./userPreference/UserPreferenceCreate";
import { UserPreferenceEdit } from "./userPreference/UserPreferenceEdit";
import { UserPreferenceShow } from "./userPreference/UserPreferenceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"meal-planner"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Meal"
          list={MealList}
          edit={MealEdit}
          create={MealCreate}
          show={MealShow}
        />
        <Resource
          name="UserPreference"
          list={UserPreferenceList}
          edit={UserPreferenceEdit}
          create={UserPreferenceCreate}
          show={UserPreferenceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
