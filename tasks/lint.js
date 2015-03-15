var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint-client', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', ['clean'], function() {
  return gulp.src('./test/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint', ['clean'], function() {
  gulp.start('lint-test', 'lint-client');
});