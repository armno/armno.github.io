var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('css', function() {
	return gulp.src('sass/style.sass')
				.pipe(sass({ style: 'compressed' }))
				.pipe(prefix('last 2 version'))
				.pipe(gulp.dest('css'));
});

gulp.task('default', function() {
	gulp.run('css');
	gulp.watch('sass/**/*.sass', function() {
		gulp.run('css');
	});
});
