var gulp = require('gulp');
var plumber = require('gulp-plumber');
var config = require('../config.js');

gulp.task('templates', function () {
    return gulp.src('src/index.html') // modify this to your templates
        .pipe(plumber())
        .pipe(gulp.dest('dist'))
});