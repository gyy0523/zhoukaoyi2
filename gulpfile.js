/**
 * Created by 高媛媛 on 2017/10/9.
 */
var gulp =require('gulp');
var concat = require('gulp-concat');
var uglify =require('gulp-uglify');
var minify = require('gulp-minify-css');
gulp.task('js',function(){
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
})
gulp.task('css',function(){
    gulp.src('./css/*.css')
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('./css'))
})