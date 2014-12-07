module.exports = (grunt) ->

  # Constants


  # Project configuration
  grunt.initConfig
    bump:
      options:
        commit: false
        push: false



  # Dependencies
  grunt.loadNpmTasks 'grunt-bump'