import React from 'react';
import './css/app.css';

import Landing from './Screens/index';
import Login from './Sweeper (Chat Web)/Screens/Login';
import ChatBoard from './Sweeper (Chat Web)/Screens/ChatBoard';

//react-router
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Route render={({location}) => (
      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/chat" component={ ChatBoard } />
      </Switch>
    )} />
  );
}

export default App;
