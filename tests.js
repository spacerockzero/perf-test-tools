'use strict';

var browserPerf = require('browser-perf');

var options = {
    selenium: 'http://ondemand.saucelabs.com',
    username: process.env.SAUCE_USERNAME || 'jakob_anderson',
    accesskey: process.env.SAUCE_ACCESSKEY || 'bd133dcd-3c1d-4bc8-ac5a-8b023c4429fb',
    browsers: ['chrome', 'firefox'],
    actions: 'scroll'
};

browserPerf('http://localhost:5000/images/6218370?cc=UNKNOWN', function(err, res){/*callback*/}, options);