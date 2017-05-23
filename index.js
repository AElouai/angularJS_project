/**
 * Created by obito on 18/05/17.
 */
var express    = require('express');
var logger     = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(require('./server'));

let port =  2018;

var server = app.listen( port, function () {
    console.log('server listening on %d', server.address().port);   
});
