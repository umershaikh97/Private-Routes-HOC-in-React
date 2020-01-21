import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Public from './Public';
import Private from './Private';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Public} /> {/* Public routes for unauthenticated users, they can be routes for login/signup etc*/}
          <PrivateRoute path="/private" component={Private} /> {/* Private routes for authenticated users only, they cannot be accessed without untill the user is authentic, , they can be routes for dashboard etc */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
