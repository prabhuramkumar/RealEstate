module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine', 'requirejs'],

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'test-main.js',
      {pattern: 'app/common/**/*.js', included: false},
      {pattern: 'app/components/**/*.js', included: false},
      {pattern: 'config/*.js', included: false},
      {pattern: 'spec/*.js', included: true},
      {pattern: 'app/app.js', included: false}
    ],
    
    autoWatch : true,

    exclude: ['app/main.js'],

    browsers : ['Chrome'],

    singleRun: true,

    plugins : [
            'karma-requirejs',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
