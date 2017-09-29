var gulp = require('gulp');
var clean = require('gulp-clean');
var util = require('gulp-util');
var config = require('../config.js');

gulp.task('clean', function () {
    return gulp.src(config.typescript.dest)
        .pipe(config.env ? clean() : util.noop())
});