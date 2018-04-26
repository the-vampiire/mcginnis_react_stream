import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Popular from '../popular/Popular';
import Battle from '../battle/Battle';

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" render={() => (<h1>Home</h1>)} />
      <Route path="/popular/:language?" component={Popular} />
      <Route path="/battle/:username?/:username?" component={Battle} />
    </div>
  </BrowserRouter>
);

export default Router;
