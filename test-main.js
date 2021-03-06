var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/spec\.js$/).test(file);
});


requirejs.config({
	baseUrl: '/base/',

	paths: {
		"angular": "bower_components/angular/angular",
		"ui-router": "bower_components/ui-router/release/angular-ui-router",
		"angular-mocks": "bower_components/angular-mocks/angular-mocks.js",
		"routes": "config/router",
		"commonModule": "app/common/common_module",
		"propertyModule": "app/components/property_module",
		"app": "app/app"
	},

	shim: {
		'angular': {
            exports: 'angular'
        },

        'angular-mocks': {
            exports: 'angular-mocks'
        },

		'ui-router': {
            exports: 'ui-router',
            deps: ['angular']
        },

        'app': {
        	deps: ['angular', 'commonModule', 'propertyModule', 'ui-router']
        }

	},

	// Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});

