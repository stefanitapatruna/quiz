var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var image = require('gulp-image');

var express = require('express');
var appServer = express();
var mongojs = require('mongojs');
var db = mongojs('myShopDb',['users']);
var bodyParser = require('body-parser');

gulp.task('express', function(){
    appServer.use(express.static(__dirname + '/public'));
    appServer.listen(3000);
});

gulp.task('scripts', function() {
    gulp.src(['app/**/*.js'])
        .pipe(gulp.dest('public'))
});

gulp.task('modulesScripts', function() {
    gulp.src(['app/javascript/modules/**/*.js'])
        .pipe(gulp.dest('public/javascript/modules/'))
});

gulp.task('sass', function() {
    gulp.src(['app/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
});

gulp.task('html', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('public'))
    });

gulp.task('html2', function() {
    gulp.src('app/html/**/*.html')
    .pipe(gulp.dest('public/html/'))
    });

gulp.task('images', function(){
    gulp.src(['app/images/*'])
        .pipe(image())
        .pipe(gulp.dest('public/images'))
});


gulp.task('watch', function() {
  
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/javascript/modules/**/*.js', ['modulesScripts']);
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/**/*.html', ['html2']);
  gulp.watch('app/images/*.png', ['images']);
});

gulp.task('default',['express','html','html2','scripts','modulesScripts','sass','watch','images']);


appServer.use(bodyParser.json());

appServer.get('/registerUser', function(req, res){
    res.send('register user page');
});

appServer.post('/registerUser', function(req, res){
    console.log(req.body);
});

