import React from 'react';
import NavBar from './components/navBar/navbar';
import LandingPage from './landingPage';
import Login from './components/login/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParticlesBg from 'particles-bg';

const App = () => {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" render={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
