var gulp = require('gulp');
var config = require('../config.js');

var watchTasks = !config.env ? ['clean', 'templates', 'sass', 'assets', 'vendor', 'webpack', 'watch'] : ['clean', 'templates', 'sass', 'assets', 'vendor', 'webpack']

gulp.task('default', watchTasks);
