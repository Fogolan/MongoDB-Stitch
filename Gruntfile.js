module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      light: {
        files: {
          "dist/css/react-admin.css": "dist/css/less/app.less"
        }
      },
      dark : {
        files: {
          "dist/css/react-admin.css": "dist/css/less-dark/app.less"
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'dist/css/react-admin.min.css': ['dist/css/react-admin.css']
        }
      }
    },
    watch: {
      light : {
        files: ['dist/css/less/*.less'], // which files to watch
        tasks: ['less:light'],
        options: {
          nospawn: true
        }
      }, 
      dark : {
        files: ['dist/css/less-dark/*.less'], // which files to watch
        tasks: ['less:dark'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['less:light', 'watch:light']);
  grunt.registerTask('dark', ['less:dark', 'watch:dark']);

  grunt.registerTask('build', ['less:light', 'cssmin']);
  grunt.registerTask('build:dark', ['less:dark', 'cssmin']);

};