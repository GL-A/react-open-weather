import React from 'react';

function DailyWeatherDetails( props ) {
  console.log( props );

    return (
      <div style={{ textAlign: 'center'}}>
        <h2>Date: { props.date }</h2>
        <h3>Weather: { props.weather }</h3>
        <h3>Humidity: { props.humidity}</h3>
      </div>
    )

}
export default DailyWeatherDetails;
