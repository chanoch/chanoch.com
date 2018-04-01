var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var csp = require('helmet-csp');

var compression = require('compression');

var app = express();

if(process.env.NODE_ENV!=='production') {
    var livereload = require('livereload').createServer({
        debug: true
    }); 
    livereload.watch(__dirname + '/..');
}
// app.use(compression);

// TODO uncomment when you've created a favicon
// app.use(favicon(path.join(__dirname, 'public', '/assets/img/cw_favicon.png')));
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Add Content Source Policy - CSP
if(process.env.NODE_ENV==='productio') {
    console.log('Setting up CSP');
    app.use(csp({
        directives: {
            defaultSrc: [
                "'self'",
            ],
            scriptSrc: [
                "'self'", 
                "https://www.googletagmanager.com",
                "https://maxcdn.bootstrapcdn.com/",
                "https://www.google-analytics.com",
                "https://use.fontawesome.com",            
                "https://fonts.googleapis.com",
                "https://www.google.com",
                "https://fonts.gstatic.com", 
                "https://www.gstatic.com",                
//                "'unsafe-inline'"
            ], // TODO review - triggers for form, I think
            styleSrc: [
                "'self'",
                "https://use.fontawesome.com",            
                "https://fonts.googleapis.com",
                "https://maxcdn.bootstrapcdn.com/",
            ],
            fontSrc: [
                "'self'",
                "https://use.fontawesome.com", 
                "https://fonts.gstatic.com", 
            ],
            imgSrc: [
                "'self'", 
                'data:',
                "https://www.google-analytics.com"            
            ],
            sandbox: ['allow-forms', 'allow-scripts'],
            reportUri: 'https://bodypoise.co.uk/report-violation',
            objectSrc: ["'none'"],
            upgradeInsecureRequests: true,
            workerSrc: false  // This is not set.
        },
    
        // This module will detect common mistakes in your directives and throw errors
        // if it finds any. To disable this, enable "loose mode".
        loose: false,
    
        // Set to true if you only want browsers to report errors, not block them.
        // You may also set this to a function(req, res) in order to decide dynamically
        // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
        reportOnly: false,
    
        // Set to true if you want to blindly set all headers: Content-Security-Policy,
        // X-WebKit-CSP, and X-Content-Security-Policy.
        setAllHeaders: false,
    }))
}

var contact_form = require('./routes/contact'); // not currently implemented
app.use(contact_form); // mount contact me form post end point

// all .html files should end up being service spa
app.use('*.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.htm'));
});

app.use(express.static(path.join(__dirname, '../public')));

// Return home page if not url specified
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.htm'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req,res,next) {
    next(err);
});

module.exports = app;