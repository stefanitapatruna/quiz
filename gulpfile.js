var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('scripts', function() {
    gulp.src(['app/**/*.js'])
        .pipe(gulp.dest('public'))
        .pipe(reload({
                stream: true
            }))
});

gulp.task('modulesScripts', function() {
    gulp.src(['app/javascript/modules/**/*.js'])
        .pipe(gulp.dest('public/javascript/modules/'))
        .pipe(reload({
                stream: true
            }))
});


gulp.task('sass', function() {
    gulp.src(['app/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({
                stream: true
            }))
});

gulp.task('html', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('public'))
    .pipe(reload({
                stream: true
            }))
    });

gulp.task('html2', function() {
    gulp.src('app/html/**/*.html')
    .pipe(gulp.dest('public/html/'))
    .pipe(reload({
                stream: true
            }))
    });

gulp.task('browser-sync', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'public',
            routes: { }
        }
    });

});


gulp.task('watch', function() {
  
  //livereload.listen();
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/javascript/modules/**/*.js', ['modulesScripts']);
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/**/*.html', ['html2']);
});

gulp.task('default',['html','html2','scripts','modulesScripts','sass','watch','browser-sync']);