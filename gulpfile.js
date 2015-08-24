var gulp = require('gulp');

gulp.task('jekyll', function(gulpCallback) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], { stdio: 'inherit'});

  jekyll.on('exit', function(code) {
    gulpCallback(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+ code)
    })
  });
