module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['app/styles/scss/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['*.html', 'app/**/*.{js,json}', 'app/styles/css/*.css'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true

			},
			dist: {
				files: {
					'app/styles/css/main.css': 'app/styles/main.scss'
				}
			}
		},
		express: {
		    options: {
		      // Override defaults here
		    },
		    dev: {
		      options: {
		        script: 'server.js'
		      }
		    }
		  }
	});

	grunt.registerTask('default', ['sass:dist', 'express', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
};