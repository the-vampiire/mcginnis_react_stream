import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Popular from '../popular/Popular';
import Battle from '../battle/Battle';

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" component={About} />
      <Route path="/popular/:language?" component={Popular} />
      <Route path="/battle/:playerOneName?/:playerTwoName?" component={Battle} />
    </div>
  </BrowserRouter>
);

export default Router;
