var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-csso');

gulp.task('styles', function() {
    return gulp.src('./app/styles/main.scss')
		.pipe(sass({
			outputStyle: 'nested',
			includePaths: ['.'],
			onError: console.error.bind(console, 'Sass error:')
		}))
		.pipe(autoprefixer('last 2 version', 'safari >= 5', 'ie >= 9', 'chrome >= 36', 'opera >= 12.1', 'ios >= 6', 'android >= 4'))
		.pipe(gulp.dest('./.tmp/styles'))
});


gulp.task('styles-dist', function() {
    return gulp.src('./app/styles/main.scss')
		.pipe(sass({
			outputStyle: 'nested',
			includePaths: ['.'],
			onError: console.error.bind(console, 'Sass error:')
		}))
		.pipe(autoprefixer('last 2 version', 'safari >= 5', 'ie >= 9', 'chrome >= 36', 'opera >= 12.1', 'ios >= 6', 'android >= 4'))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/styles'))
});