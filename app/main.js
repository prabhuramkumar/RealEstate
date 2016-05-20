require.config({
	baseUrl: 'app/',
	paths: {
		"angular": "../bower_components/angular/angular",
		"ui-router": "../bower_components/ui-router/release/angular-ui-router",
		"routes": "./router",
		"commonModule": "./common/common_module",
		"propertyModule": "./components/property_module",
		"app": "./app"
	},

	shim: {
		'angular': {
            exports: 'angular'
        },

		'ui-router': {
            exports: 'ui-router',
            deps: ['angular']
        },

        'app': {
        	deps: ['angular', 'commonModule', 'propertyModule', 'ui-router']
        }

	}
});

require(['app'],
  function(App) {
    App.initialize();
  }
);