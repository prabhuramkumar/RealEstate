module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine', 'requirejs'],

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/common/**/*.js',
      'app/components/**/*.js',
      'app/app.js'
    ],

    autoWatch : true,

    exclude: ['app/main.js', 'app/router.js'],

    browsers : ['Chrome'],

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
