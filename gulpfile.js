var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	ugligy = require('gulp-ugligy');


var env, 
	sassSource,
	cssOutput,
	jsOutput;

env = process.env.NODE_ENV || 'development';
sassSource = ['development/sass/'];
cssOutput = ['production/css'];
jsOutput = ['production/js'];

gulp.task('compass', function(){
	gulp.src(sassSource)
		.pipe(
			compass({
				sass: 'development/sass',
				style: sassStyle
			})
			.on('error', gutil.log))
		.pipe(gulp.dest('production/css'));
});

