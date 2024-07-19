import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PresenceList } from "./presence/PresenceList";
import { PresenceCreate } from "./presence/PresenceCreate";
import { PresenceEdit } from "./presence/PresenceEdit";
import { PresenceShow } from "./presence/PresenceShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { PermissionList } from "./permission/PermissionList";
import { PermissionCreate } from "./permission/PermissionCreate";
import { PermissionEdit } from "./permission/PermissionEdit";
import { PermissionShow } from "./permission/PermissionShow";
import { HolidayList } from "./holiday/HolidayList";
import { HolidayCreate } from "./holiday/HolidayCreate";
import { HolidayEdit } from "./holiday/HolidayEdit";
import { HolidayShow } from "./holiday/HolidayShow";
import { TransferList } from "./transfer/TransferList";
import { TransferCreate } from "./transfer/TransferCreate";
import { TransferEdit } from "./transfer/TransferEdit";
import { TransferShow } from "./transfer/TransferShow";
import { DiseaseCertificateList } from "./diseaseCertificate/DiseaseCertificateList";
import { DiseaseCertificateCreate } from "./diseaseCertificate/DiseaseCertificateCreate";
import { DiseaseCertificateEdit } from "./diseaseCertificate/DiseaseCertificateEdit";
import { DiseaseCertificateShow } from "./diseaseCertificate/DiseaseCertificateShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"EmployeeManagementAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Presence"
          list={PresenceList}
          edit={PresenceEdit}
          create={PresenceCreate}
          show={PresenceShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Permission"
          list={PermissionList}
          edit={PermissionEdit}
          create={PermissionCreate}
          show={PermissionShow}
        />
        <Resource
          name="Holiday"
          list={HolidayList}
          edit={HolidayEdit}
          create={HolidayCreate}
          show={HolidayShow}
        />
        <Resource
          name="Transfer"
          list={TransferList}
          edit={TransferEdit}
          create={TransferCreate}
          show={TransferShow}
        />
        <Resource
          name="DiseaseCertificate"
          list={DiseaseCertificateList}
          edit={DiseaseCertificateEdit}
          create={DiseaseCertificateCreate}
          show={DiseaseCertificateShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
