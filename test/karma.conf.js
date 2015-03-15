"use strict";

var PATHS = {
    jQuery            : './bower_components/jquery/dist/jquery.js',
    requireTestConfig : './test/require-test-config.js'
};

var testingBrowsers = ['PhantomJS'];

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            PATHS.jQuery,
            PATHS.requireTestConfig,
            {
                pattern: './app/scripts/modules/*.js',
                included: false
            }, 
            {
                pattern: './test/unit-tests/*.js',
                included: false
            }
        ],

        // list of files to exclude
        exclude: [

        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: './test/target/junit-results.xml',
            suite: ''
        },

        preprocessors: {
            '**/app/scripts/modules/**/*.js': 'coverage'
        },

        coverageReporter: {
            type: 'lcov',
            dir: './test/target/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO ||
        // config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        browsers: testingBrowsers,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};