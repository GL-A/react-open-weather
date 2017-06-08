import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import { Link } from 'react-router-dom';
// import { fetchWeather } from './api/open-weather.js'

class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <ul className="nav-ul">

          <li className="nav-ul-header">
            <Link to='/'>
              <h1>React Weather</h1>
            </Link>
          </li>

          <li >
            <WeatherForm/>
          </li>

        </ul>
      </div>
    )
  }
}
export default Nav;
