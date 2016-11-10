import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import About from './components/About';
import UserList from './components/users/userList';
import NewUser from './components/users/newUser';
import NoMatch from './components/404';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="about" component={About} />
    <Route path="users" component={UserList}>
      <Route path="new" component={NewUser} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Route>
);

export default routes;
