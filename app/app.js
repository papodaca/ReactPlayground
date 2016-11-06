import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import About from './components/About';
import UserList from './components/users/list/userList';
import NoMatch from './components/404';
import media from './utils/styles'

window.React = React;
const mountNode = document.getElementById('app');

const Container = styled.div`
  ${ media.mobile`
    width: 100%;
    margin: 0;
  ` }
  ${ media.desktop`
    width: 1100px;
    margin: auto;
  ` }

`;

ReactDOM.render((
  <Container>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="about" component={About} />
        <Route path="users" component={UserList} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Container>
), mountNode);
