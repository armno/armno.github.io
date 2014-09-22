var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('css', function() {
	return gulp.src('sass/style.sass')
				.pipe(sass({ style: 'compressed' }))
				.pipe(prefix('last 2 version'))
				.pipe(gulp.dest('css'));
});

gulp.task('js', function() {
	return gulp.src(['js/lib/fastclick/lib/fastclick.js'])
				.pipe(concat('scripts.js'))
				.pipe(uglify())
				.pipe(gulp.dest('js'));
});

gulp.task('copystyles', function() {
  return gulp.src(['_site/css/style.css'])
    .pipe($.rename({
      basename: 'site'
    }))
    .pipe(gulp.dest('_site/css'));
});

gulp.task('default', function() {
	gulp.run('css');
	gulp.run('js');
	gulp.watch('sass/**/*', function() {
		gulp.run('css');
	});

	gulp.watch('js/**/*', function() {
		gulp.run('js');
	});
});
