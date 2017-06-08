import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import Home from './Home';
import WeekForecast from './WeekForecast';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Nav">
          <Nav />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/forecast' component={ WeekForecast }/>

            <Route render={ () => {
              return <p style={ { color: 'black' }}>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
