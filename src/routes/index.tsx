import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Questions from '../pages/Questions';
import Dashboard from '../pages/Dashboard';
import Congratulations from '../pages/Congratulations';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/questions" component={Questions} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/congratulations" component={Congratulations} />
  </Switch>
);

export default Routes;
