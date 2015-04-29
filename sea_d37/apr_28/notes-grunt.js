/*
    Grunt is a TASK RUNNER. It's goal is to provide automation in your workflow. Tasks like minification, compilation,
    unit testing, linting, etc. can all be done through Grunt. These tasks are saved in a GRUNTFILE, which Grunt uses
    in order to configure and execute the tasks.

    NOTICE that grunt-cli (which is installed globally) is NOT the Grunt Task Runner. This is the command line tool 
    which allows you to run grunt from a terminal. The grunt task runner ('grunt') is what executes the provided
    gruntfile to automate your workflow.

    When you run 'grunt' in the CLI, it looks for a locally installed 'grunt' module via Node's require() method 
    process. This allows you to use different versions of the grunt library, depending on which it finds lcally. After
    this, it looks for a GruntFile and applies any of the configurations it finds there, then moves on to execute the
    processes you indicated through the CLI.

    Note that the GRUNTFILE should be placed in the SITE ROOT, next to the package.json file. This file should be 
    committed with your source.
*/

// Sample Gruntfile.js

// This is the basic 'wrapper' that is placed around a Gruntfile. When this module is exported, the main 'grunt' file 
// is passed into this function. 
module.exports = function(grunt) {

    // It has an 'initConfig' method used to configure its operations. Because you can store grunt-related options in 
    // the package.json file, these variables can be read from and then referenced via <%= %> template variables.
    grunt.initConfig({

        // Uses the grunt object's 'file' method to read the contents of your package.json file.
        pkg: grunt.file.readJSON('package.json'),
        // The 'uglify' task, which is now reading variables defined in this initConfig's 'pkg' property. Notice how it
        // can not only read these vars, but has access to grunt.template for dynamic data, like the date of execution.
        // In this way we can provide dynamic pathing and values.
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
        
    }); 

    // Now, we load the plugin which is used for the initCofig's 'uglify' task. The grunt ecosystem provides many
    // libraries that offer common automation functions, like compiling, linting, minification, etc.
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    // Grunt has a 'default' task, where you can specify it to run one or more tasks in succession. Here, we register
    // those tasks and associate them with the 'default' label.
    grunt.registerTask('default', ['uglify']);  

    // Grunt also allows you to define a custom task for functionality not provided by a Grunt plugin.
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

};