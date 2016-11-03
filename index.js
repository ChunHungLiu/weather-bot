var getWeather = require('./getWeather');

getWeather(function(err, weather){
    console.log(weather);
});

