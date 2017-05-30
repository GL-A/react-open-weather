import axios from 'axios';


function fetchWeather() {
  let forecastUrl = window.encodeURI("http://api.openweathermap.org/data/2.5/weather?q=Portland&type=accurate&APPID=18aa061c36413daf770d6f5d5715972e");

  return axios.get( forecastUrl ).then(function( response ) {
    console.log(response);
    return response;
  })
}

module.export = {
  fetchWeather
}
