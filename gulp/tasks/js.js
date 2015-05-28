var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  coffee = require('gulp-coffee'),
  babel  = require('gulp-babel');

gulp.task('js', function() {
  return gulp.src([
    './lib/js/**/*.js',
    './lib/coffee/**/*.coffee'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./public/js-alc/'))
});

gulp.task('test:js', function() {
  return gulp.src([
    './lib/tests/**/*.coffee',
    './lib/tests/**/*.js'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./public/js-alc/tests/'))
});