var request = require('request');
var cheerio = require('cheerio');

function getWeather(callback){
    var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm';
    request(url, function(err, res, body){
        var $ = cheerio.load(body);

        var weather = [];
        $('table.FcstBoxTable01 > tbody > tr').each(function(){
            weather.push($(this).text().split('\n'));
        });

        weather = weather.map(function(elem){
            return {
                time: elem[1].trim().split(' ')[0],
                temp: elem[2].trim(),
                rain: elem[6].trim()
            }
        });

        var message = weather.map(function(e){
            return e.time + '：溫度 ' + e.temp + '，降雨機率 ' + e.rain;
        }).join('\n');

        callback(err, message);
    });
}

module.exports = getWeather;
