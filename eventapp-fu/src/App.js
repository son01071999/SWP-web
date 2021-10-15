import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListEvent from './pages/ListEvent';
import Profile from './pages/Profile';
import Login from './pages/Login';
import EventDetail from './pages/EventDetail';
import EventManagement from './pages/EventManagement';
import { EventMng } from './pages/EventMng';



function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/myevent' component={EventMng} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/event-detail' component={EventDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
