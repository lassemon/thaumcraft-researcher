var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images-dist', function() {
  return gulp.src('./app/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/assets/img'));
});