module.exports = function(grunt) {
  grunt.registerMultiTask('webby', 'parse webby style',function() {

    var transform = require('../lib/transform.js');

    var files = this.files;

    files.forEach(function(file) {
      //console.log(transform(file.src[0]));
      try {
        grunt.file.write(file.dest, transform(file.src[0]));
        grunt.log.ok("Rendered " + file.src[0] + " to: " + file.dest);
      } catch(e) {
        grunt.log.error("Rendering of " + file.src[0] + " failed!\n    " + e.message);
      }
    });
  });
};
