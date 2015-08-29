module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            } 
        },

        connect: {
            server: {
                options: {
                    port: 9222
                }
            }
        },

        watch: {
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
	});

    // 2. Where I tell Grunt I plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 3. Where I tell Grunt what to do when I type "grunt" into the terminal.
    grunt.registerTask('default', [
        'sass','connect','watch'
    ]);

};