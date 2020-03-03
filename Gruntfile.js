module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
        release:{
          files: {
            'rectangle.min.js': 'rectangle.js',
            'util.min.js': 'util.js',

          }
        }       
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['uglify:release']);
  };