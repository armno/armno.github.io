var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('css', function() {
	return gulp.src('sass/style.sass')
				.pipe($.rubySass({
          style: 'compressed'
        }))
				.pipe(gulp.dest('css'));
});

gulp.task('js', function() {
	return gulp.src(['js/lib/fastclick/lib/fastclick.js'])
				.pipe($.concat('scripts.js'))
				.pipe($.uglify())
				.pipe(gulp.dest('js'));
});

gulp.task('default', ['css', 'js'], function() {
	gulp.watch('sass/**/*', ['css']);
	gulp.watch('js/**/*', ['js']);
});
