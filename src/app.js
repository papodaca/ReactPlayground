import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

window.React = React;
const mountNode = document.getElementById('app');

render((
  <Router history={browserHistory} routes={routes} />
), mountNode);