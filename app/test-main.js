var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/spec\.js$/).test(file);
});
requirejs.config({
	baseUrl: '/base/app/',
	paths: {
		"angular": "../bower_components/angular/angular",
		"angular-mocks": "../bower_components/angular-mocks/angular-mocks.js",
		"errorDirective": "common/error/error_directive",
		"loaderDirective": "common/loader/loader_directive",
		"propertyController": "components/property/property_controller",
		"propertyDirective": "components/property/property_directive",
		"propertyListService": "components/property_list/property_list_service",
		"propertyListController": "components/property_list/property_list_controller",
		"commonModule": "common/common_module",
		"propertyModule": "components/property_module",
		"app": "app"
	},

	shim: {
		'angular': {
            exports: 'angular'
        },

        'angular-mocks': {
            exports: 'angular-mocks'
        },


        'app': {
        	deps: ['angular', 'commonModule', 'propertyModule']
        }

	},

	// Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});

