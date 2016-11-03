var login = require('facebook-chat-api');
var getWeather = require('./getWeather');

var user = {
    email: 'FB_EMAIL',
    password: 'FB_PASSWORD'
};

login(user, function(err, api){
    var message = '你好阿';
    var id = 100001567752835;

    setInterval(function(){
        getWeather(function(err, weather){
            api.sendMessage(weather, id);
        });
    }, 5 * 1000);
});
