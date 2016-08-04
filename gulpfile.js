var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	ugligy = require('gulp-uglify'),
	connect = require('gulp-connect');


var env, 
	sassSource,
	cssOutput,
	jsOutput,
	htmlSource;

env = process.env.NODE_ENV || 'development';
sassSource = ['development/sass/'];
cssOutput = ['production/css'];
jsOutput = ['production/js'];
sassStyle = 'expanded';

gulp.task('compass', function(){
	gulp.src(sassSource)
		.pipe(
			compass({
				sass: 'development/sass',
				style: sassStyle
			})
			.on('error', gutil.log))
		.pipe(gulp.dest('production/css'))
		.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('index.html').pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('development/sass/*.scss', ['compass']);
	gulp.watch('index.html',['html']);
});

gulp.task('default', ['html', 'compass', 'connect', 'watch']);

