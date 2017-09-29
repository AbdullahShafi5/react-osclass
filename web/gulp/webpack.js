var gulp = require('gulp');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var stripDebug = require('gulp-strip-debug');
var util = require('gulp-util');
var config = require('../config');

gulp.task('webpack', function() {
  return gulp.src(config.typescript.src)
    .pipe(plumber())
    .pipe(gulpWebpack(config.webpack, webpack))
    .pipe(config.env ? stripDebug() : util.noop())
    .pipe(config.env ? uglify() : util.noop())
    .pipe(gulp.dest(config.typescript.dest));
});