var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-csso'),
    minifyHtml = require('gulp-minify-html'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    del = require('del');

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

gulp.task('images', function() {
  return gulp.src('./app/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('html', ['styles'], function () {
  var assets = useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifycss()))
    .pipe(assets.restore())
    .pipe(useref())
    //.pipe(gulpIf('*.html', minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
    del(['./dist/'], cb)
});

gulp.task('serve', ['styles'], function () {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
    
  });

  gulp.watch([
    './app/*.html',
    './app/scripts/**/*.js',
    './app/images/**/*',
    './.tmp/**/*'
  ]).on('change', reload);

  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.js', ['lint-client']);
  gulp.watch('./test/**/*.js', ['lint-test']);
});

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

gulp.task('build', function() {
  gulp.start('styles', 'images');
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

gulp.task('dist', ['default'], function() {
  gulp.start('html');
});