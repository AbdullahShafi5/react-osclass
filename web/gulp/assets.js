var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config.js');

gulp.task('assets', function () {
    return gulp.src(config.assets.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.assets.dest))
});