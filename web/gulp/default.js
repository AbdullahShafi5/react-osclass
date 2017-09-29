var gulp = require('gulp');
var config = require('../config.js');

var watchTasks = !config.env ? ['clean', 'template', 'sass', 'assets', 'vendor', 'webpack', 'watch'] : ['clean', 'template', 'sass', 'assets', 'vendor', 'webpack']

gulp.task('default', watchTasks);
