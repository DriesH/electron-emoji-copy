import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import './app/index.css';
import App from './app/App';
import Settings from './app/Settings';

const Router = process.env.ENV === 'browser' ? BrowserRouter : MemoryRouter;

console.info(Router, process.env.ENV);

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
