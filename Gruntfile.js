'use strict';

var grunt = require('grunt');

/* globals grunt */
var currentSession = 'USYSD417EFF65E8F9BEB2113094AF748A277_idses-refa03.a.fsglobal.net';
var options = {
  cookie: 'fssessionid='+currentSession,
  timeout: 120,
  verbose: true,
  debug: true
};

grunt.initConfig( {
  phantomas : {
    viewerPage: {
      options: {
        indexPath: './phantomas/',
        numberOfRuns: 1,
        options: options,
        url: 'http://localhost:5000/images/6218370?cc=UNKNOWN'
      }
    }
  }
});

// load tasks
grunt.loadNpmTasks('grunt-phantomas');

// register tasks
grunt.registerTask('perf', ['phantomas']);