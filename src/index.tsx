import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '@Styles/main.css';
import Home from './pages/Home';
import Dashboard from './components/layouts/Dashboard';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Dashboard>
          <Home />
        </Dashboard>
      </Route>
    </Switch>
  </BrowserRouter>
);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
