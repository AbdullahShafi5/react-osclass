var gulp = require('gulp');
var config = require('../config.js');

gulp.task('vendor', function () {
    return gulp.src(config.vendor.src)
        .pipe(gulp.dest(config.vendor.dest));
});