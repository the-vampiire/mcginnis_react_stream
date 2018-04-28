import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" render={() => (<h1>Home</h1>)} />
    </div>
  </BrowserRouter>
);

export default Router;
