var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js-dist-require-modules', function () {
  return gulp.src('./app/scripts/modules/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/modules'));
});