var gulp = require('gulp');
var plumber = require('gulp-plumber');
var config = require('../config.js');

gulp.task('template', function () {
    return gulp.src('src/index.html') // modify this to your template
        .pipe(plumber())
        .pipe(gulp.dest('dist'))
});