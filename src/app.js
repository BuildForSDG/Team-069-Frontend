import React from 'react';
import NavBar from '../src/components/navBar/navbar';
import About from './about';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParticlesBg from 'particles-bg';

const App = () => {
  return (
    <div>
      <ParticlesBg type="round" bg={true} />
      <Router>
        <NavBar />
        <About />
        <Switch></Switch>
      </Router>
    </div>
  );
};

export default App;
