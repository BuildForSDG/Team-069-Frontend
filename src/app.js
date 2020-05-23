import React from 'react';
import NavBar from '../src/components/navBar/navbar';
import LandingPage from './landingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParticlesBg from 'particles-bg';

const App = () => {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
