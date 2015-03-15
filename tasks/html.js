var gulp = require('gulp');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-csso');

gulp.task('html', function () {

  return gulp.src('./app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});

gulp.task('html-dist', function () {
	var assets = useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('./app/*.html')
  	.pipe(assets)
    .pipe(gulpIf('*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});
