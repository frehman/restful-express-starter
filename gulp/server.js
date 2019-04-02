const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev:server', async () => {
  nodemon({
    exec: 'heroku local',
    signal: 'SIGTERM',
    ext: 'js html css' // TODO: Add to this list if required
    // ignore: ['ng*', 'assets*', 'gulp*']
  });
});
