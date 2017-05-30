import React, { Component } from 'react';
import { fetchWeather } from './api/open-weather.js'

class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <ul className="nav-ul">
          <li className="nav-ul-header">
            <h1>React Weather</h1>
          </li>
          <li>
            <input className="nav-weather-input" placeholder="Portland, Oregon"></input>
          </li>
          <li >
            <button className="nav-weather-button">Get Weather</button>
            <h4>{ fetchWeather }</h4>
          </li>
        </ul>
      </div>
    )
  }
}
export default Nav;
