/**
 * Created by obito on 18/05/17.
 */
var express    = require('express');
var logger     = require('morgan');
var cors     = require('cors');

var app = express();

app.use(logger('dev'));
app.use(require('./server'));

var originsWhitelist = [ 'http://localhost:4200' ,'*' ];

var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
};
app.use(cors(corsOptions));


let port =  2018;

var server = app.listen( port, function () {
    console.log('server listening on %d', server.address().port);   
});
