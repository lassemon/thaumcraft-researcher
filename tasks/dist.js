var gulp = require('gulp');

gulp.task('dist', ['clean'], function() {
  gulp.start('images-dist', 'html-dist', 'styles-dist', 'js-dist-require-modules');
});