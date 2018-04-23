import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PopularRepos from '../popular/Popular';
import NavBar from '../stateless/Navbar';

const Router = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => (<p>Home</p>)} />
        <Route path="/popular" component={PopularRepos} />
        <Route render={() => (<p>Page not found</p>)} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
