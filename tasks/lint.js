var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint-client', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
  return gulp.src('./test/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint', function() {
  gulp.start('lint-test', 'lint-client');
});