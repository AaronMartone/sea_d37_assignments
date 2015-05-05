module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['./*.js', 'tests/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        jscs: {
            src: ['./*.js', 'tests/**/*.js'],
            options: {
                verbose: true
            }
        }       
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jshint', 'jscs']);

};