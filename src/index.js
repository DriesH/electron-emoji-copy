import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import './app/index.css';
import App from './app/App';
import Settings from './app/Settings';

const Router = !__IS_ELECTRON__ ? BrowserRouter : MemoryRouter;

const memoryRouterProps = {
  initialEntries: ['/', '/settings'],
  initialIndex: 1,
};

const routerProps = !__IS_ELECTRON__ ? {} : memoryRouterProps;

ReactDOM.render(
  <Router {...routerProps}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
