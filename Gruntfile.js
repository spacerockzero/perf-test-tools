'use strict';

/* globals grunt */
var currentSession = 'USYSD417EFF65E8F9BEB2113094AF748A277_idses-refa03.a.fsglobal.net';
var options = {
  cookie: 'fssessionid='+currentSession+';domain=/'
};

grunt.initConfig( {
  phantomas: {
    gruntSite : {
      options : {
        indexPath : './phantomas/',
        options   :  options,
        url       : 'http://localhost:5000/images/6218370?cc=UNKNOWN',
        buildUi   : true
      }
    }
  }
});

// load tasks
grunt.loadNpmTasks('grunt-phantomas');

// register tasks
grunt.registerTask('perf', ['phantomas']);