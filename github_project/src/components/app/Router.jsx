import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from '../popular/Popular';

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => (<h1>Home</h1>)} />
        <Route path="/popular" component={Popular} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
