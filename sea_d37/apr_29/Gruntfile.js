(function() {
    'use strict';

    module.exports = function(grunt) {

        // load the jshint and watch libraries.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.initConfig({
            jshint: {
                // This creates a 'jshint:files' task.
                files: ['Gruntfile.js', 'greet.js', 'tests/**/*test.js', 'greet-caller.js'],
                options: {                    
                    jshintrc: "greet.jshintrc"
                }
                /*
                , options: {
                    globals: {
                        require: true
                        , describe: true
                        , it: true
                        , module: true
                    }
                    , jshintrc: true
                }
                */
            },
            watch: {
                files: ['**/*.js', '!package.json'],
                tasks: ['jshint:files']
            }      
        });        

        grunt.registerTask('default', ['jshint', 'watch']);
    };
})();