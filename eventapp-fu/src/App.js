import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Profile from './pages/Profile';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
