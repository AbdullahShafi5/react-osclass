var gulp = require('gulp');
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var util = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var config = require('../config.js');

gulp.task('sass', function () {
    return gulp.src(config.sass.src)
        .pipe(bulkSass())
        .pipe(!config.env ? sourcemaps.init() : util.noop())
        .pipe(plumber())
        .pipe(sass(config.sass.settings ).on('error', sass.logError))
        .pipe(!config.env ? sourcemaps.write() : util.noop())
        .pipe(gulp.dest(config.sass.dest));
});