var gulp = require('gulp');
var config = require('../config.js');

gulp.task('watch', function () {
    gulp.watch('src/index.html', ['templates']);
    gulp.watch(config.typescript.src, ['webpack']);
    gulp.watch(config.sass.bulk, ['sass']);
});