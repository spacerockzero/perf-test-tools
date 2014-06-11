'use strict';

/* globals require */

var grunt = require('grunt');

/* globals grunt */
var currentSession = 'USYSD417EFF65E8F9BEB2113094AF748A277_idses-refa03.a.fsglobal.net';
var options = {
  cookie: 'fssessionid='+currentSession,
  timeout: 500,
  viewport: '1280x1024'
};

grunt.initConfig( {

  phantomas : {

    viewerPage: {
      options: {
        indexPath: './results/viewerPage/',
        numberOfRuns: 10,
        options: options,
        url: 'http://localhost:5000/images/6218370?cc=UNKNOWN',
        group: {
          criticalPerf: [
            // 'timeToFirstByte',
            // 'timeToLastByte',
            // 'timeToFirstCss',
            // 'timeToFirstJs',
            // 'timeToFirstImage',
            // 'fastestResponse',
            // 'slowestResponse',
            'onDOMReadyTime',
            'onDOMReadyTimeEnd',
            'windowOnLoadTime',
            'windowOnLoadTimeEnd',
            'httpTrafficCompleted',
            'timeBackend',
            'timeFrontend',
            'cookiesSent'
          ]
        }
      }
    }

  }

});

// load tasks
grunt.loadNpmTasks('grunt-phantomas');

// register tasks
grunt.registerTask('perf', ['phantomas']);