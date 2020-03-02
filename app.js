"use strict";

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

module.exports = (async () => {
    /* eslint-disable global-require */
    const routes = require('./routes/index');
    const api = require('./routes/api')({});
    /* eslint-enable global-require */

    const app = express();

    // View engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // Uncomment after placing your favicon in /public
    // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    app.use('/api', api);

    // Catch 404 and forward to error handler
    app.use((req, res, next) => {
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    });

    // Error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development'){
        app.use((error, req, res, next) => {
            res.status(error.status || 500);
            res.render('error', {
                message: error.message,
                error: error,
            });
        });
    }

    // Production error handler
    // no stacktraces leaked to user
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error: {},
        });
    });

    return app;
})();
