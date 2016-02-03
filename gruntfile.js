// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // check all js files for errors
    jshint: {
      all: ['public/js/**/*.js'] 
    },
    
    
    watch: {
      css: {
        files: ['public/css/**/*.css'],
      },
      js: {
        files: ['public/js/**/*.js'],
      }
    },
    
    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    
    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    } 

  });

 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['jshint', 'concurrent']);  

};
