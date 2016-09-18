var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	ugligy = require('gulp-uglify'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	gulpOpen = require('gulp-open'),
	babelify = require('gulp-babel');

var env, 
	sassSource,
	cssOutput,
	jsOutput,
	htmlSource,
	connectConfig = {
		baseDevUrl: 'http://localhost',
	};

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
		.pipe(gulp.dest('production/css'));
		//.pipe(connect.reload());
});
/**
gulp.task('connect', function(){
	connect.server({
		root: './',
		base: connectConfig.baseDevUrl,
		livereload: true
	});
});
*/
/**
gulp.task('open', function(){
	gulp.src('index.html')
	.pipe(gulpOpen({uri: 'http://localhost:3030', app: 'google chrome'}));
});
*/
gulp.task('browserify', function(){
	gulp.src('development/js/mbox.js')
	.pipe(browserify())
	.pipe(babelify({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('production/js/main.js'));
});
/**
gulp.task('html', function(){
	gulp.src('index.html').pipe(connect.reload());
});
*/
gulp.task('watch', function(){
	gulp.watch('development/sass/*.scss', ['compass']);
	gulp.watch('index.html',['html']);
	gulp.watch('development/js/mbox.js', ['browserify']);
});


gulp.task('default', ['compass', 'browserify','watch']);

