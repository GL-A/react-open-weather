import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WeatherForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      city: ''
    }
    // this.handleTextInput = this.handleTextInput.bind( this );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    let city = event.target.value;
    console.log( city );
    this.setState( () => {
      return {
        city: city
      }
    })
  }
  componentWillUnmount(){
    this.setState( () => {
      return {
        city: ''
      }
    })
  }
  render() {

    return (
      <div className="nav-weather-form">
        <input
          type="text"
          value={ this.state.username }
          onChange={ this.handleChange }
          className="input-lg"
          placeholder="Select City"></input>
        <Link
          to={{
            pathname: '/forecast',
            search: `city=${ this.state.city }`
          }}
          className="btn btn-success btn-small"
          >
          Get Weather
        </Link>
      </div>

    )
  }
}

export default WeatherForm;
