import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './containers/LoginForm'
import EmployeeList from './containers/EmployeeList'
import EmployeeCreate from './containers/EmployeeCreate'
import EmployeeEdit from './containers/EmployeeEdit'

const RouterComponent = (props) => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login"  initial />
    </Scene>
    <Scene key="main">
      <Scene key="employeeList" rightTitle="Add" onRight={ () => Actions.employeeCreate() } component={EmployeeList} title="Employees" />
      <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate}  />
      <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit}  />
    </Scene>

  </Router>
)

export default RouterComponent;
