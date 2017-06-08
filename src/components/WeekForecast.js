import React, { Component } from 'react';
import queryString from 'query-string';
import FetchWeather from '../api/open-weather.js';
import DailyWeatherDetails from './DailyWeatherDetails';

import moment from 'moment';

class Forecast extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      showDetails: false,
      idx: null
    }
    this.showDetails = this.showDetails.bind( this );
  }
  showDetails( event ){
    let value = event.target.value;
    let date = value.split('+')[1];
    let idx = parseInt(value.split('+')[0], 10);
    console.log( idx);
    this.setState( () => {
      return {
        showDetails: true,
        date: date,
        idx: idx
      }
    })
  }

  render() {
    let style = {
      'listStyle': 'none',
      'display': 'flex',
      'justifyContent': 'space-between',
      'width': '70%',
      'marginTop': '100px'
    }

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around'
        }}>
        { !this.state.showDetails ?
          <ul style={ style }>
            {
              this.props.forecast.map( ( day, idx ) => {
                let date = moment( day.dt_txt)._d;
                let weather = day.weather[ 0 ].description;
                date = date.toString('').split(' ').splice( 0, 3 ).join(' ');
                return (
                  <li
                    style={{ borderRadius: '20%', background: '#C97064' }}
                    key={ idx }
                    >
                      <h3>{ weather }</h3>
                      <h3>{ date }</h3>
                      <button
                        onClick={ this.showDetails }
                        value={ `${idx} + ${date}` }>
                        Show Details
                      </button>
                  </li>
                )
              })
            }
          </ul>
          :
          <DailyWeatherDetails
            date={ this.state.date }
            humidity={ this.props.forecast[ this.state.idx ].main.humidity }
            weather={ this.props.forecast[ this.state.idx ].weather[ 0 ].description}
            city={ this.props.city }/>
        }
      </div>

    )
  }
}
class WeekForecast extends Component {
  constructor( props ){
    super( props );
    this.state = {
      city: null,
      forecast: null
    }
    this.handleClick = this.handleClick.bind( this );
  }
  componentDidMount() {
    var city = queryString.parse(this.props.location.search).city;
    FetchWeather.forecast( city ).then( (res) =>{
      this.setState( () => {
        return {
          city: res.city.name,
          forecast: res.forecast
        }
      })
    });
  }
  handleClick() {
    console.log( 'hello' );
  }
  render() {
    return (
      <div>
        <div
          style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
          }}>
          <h2 style={{ color:"black"}}>
            { this.state.city }
          </h2>

        </div>
          { this.state.city !== null
            ? <Forecast city={ this.state.city } forecast={ this.state.forecast }/>
            : <h1>Loading</h1> }

      </div>
    )
  }
}
export default WeekForecast;
