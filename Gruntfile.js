module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
    		server: {
        		options: {
            		port: 8000,
            		base: "./"
        		}
    		}
		},
		concat: {
    		dist: {
	    		src: ['src/partials/header.html', 'Content/bower_components/kartverket-felleskomponenter/assets/partials/_SharedMenu.html', 'src/partials/content.html', 'src/partials/footer.html'],
	    		dest: 'index.html'
	    	}
        },
		watch: {
    		dist: {
	    		files: "src/partials/**/*.html",
                tasks: ["concat"]
    		}
		},
		open: {
    		dev: {
        		path: "http://localhost:8000/index.html"
    		}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');
	
	// Default task(s).
	grunt.registerTask('default', ['connect', 'open', 'watch']);
};