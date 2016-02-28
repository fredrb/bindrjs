module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      "bindr": {
        src: [
          "app/bindr.js",
        ],
        dest: "dist/bindr.js"
      }
    },
    run: {
      test: {
        cmd: 'npm',
        args: [
          'run',
          'test'
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask("test", ["run:test"]);
  grunt.registerTask("default", ["concat", "run:test"]);
};
