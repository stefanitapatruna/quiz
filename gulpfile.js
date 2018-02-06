'use-strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('scripts', function() {
    gulp.src(['app/**/*.js'])
        .pipe(gulp.dest('public'))
});


gulp.task('scss', function() {
    gulp.src(['app/**/*.scss'])
    	.pipe(sass())
        .pipe(gulp.dest('public'))
});

gulp.task('html', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('public'))
    });

gulp.task('html2', function() {
    gulp.src('app/**/*.html')
    .pipe(gulp.dest('public'))
    });

gulp.task('watch', function() {
  
  //livereload.listen();
  gulp.watch('app/**/*.scss', ['scss']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/**/*.html', ['html2']);
});

gulp.task('default',['html','html2','scripts','scss','watch']);