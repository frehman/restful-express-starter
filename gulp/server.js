var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', async () => {
  nodemon({
    exec: 'heroku local',
    signal: 'SIGTERM',
    ext: 'js html css'
    // ignore: ['ng*', 'assets*', 'gulp*']
  });
});
