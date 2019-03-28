const fs = require('fs');
const gulp = require('gulp');

// prettier-ignore
fs
  .readdirSync(__dirname + '/gulp')
  .forEach(task => {
    require('./gulp/' + task);
});

gulp.task('dev', gulp.series('dev:server'));
