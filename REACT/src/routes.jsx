import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Lists from './components/views/lists';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='lists' component={Lists} />
    <Route path='*' component={Home} />
  </Route>
);