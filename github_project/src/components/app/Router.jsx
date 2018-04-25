import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from '../popular/Popular';

// const User = ({ match }) => (<p>{match.params.username}</p>);
const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" render={() => (<h1>Home</h1>)} />
      <Route path="/popular/:language?" component={Popular} />
    </div>
  </BrowserRouter>
);

export default Router;
