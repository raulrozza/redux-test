import React from 'react';
import { Switch } from 'react-router-dom';
import Private from './Private';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Student from '../pages/Student';
import StudentList from '../pages/StudentList';
import Pictures from '../pages/Pictures';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Private path="/" exact component={StudentList} />
      <Private path="/student/:id/edit" exact component={Student} isClosed />
      <Private path="/student" exact component={Student} isClosed />
      <Private path="/picture/:id" exact component={Pictures} isClosed />
      <Private path="/register" exact component={Register} />
      <Private path="/login" exact component={Login} />
      <Private path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
