const fs = require('fs');
const gulp = require('gulp');

/** explicitly require each file in gulp folder */
require('./gulp/server');

/* Causes error: Found fs.readdirSync with non literal argument at index 0  eslint(security/detect-non-literal-fs-filename)
fs
  .readdirSync(__dirname + '/gulp')
  .forEach(task => {
    require('./gulp/' + task);
});
*/
gulp.task('dev', gulp.series('dev:server'));
