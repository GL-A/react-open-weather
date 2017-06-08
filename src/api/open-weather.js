import axios from 'axios';

var FetchWeather = {
   forecast: function( city ) {
    let forecastUrl = (`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=18aa061c36413daf770d6f5d5715972e`);

    return axios.get( forecastUrl ).then(function( response ) {

      let city = response.data.city;
      let forecastArr = [];
      for( var x = 0; x < response.data.list.length; x+=8 ){
        forecastArr.push( response.data.list[ x ] );
      }
      let forecast = {
        city: city,
        forecast: forecastArr
      }

      return forecast;
    })
  }
}


export default FetchWeather;
