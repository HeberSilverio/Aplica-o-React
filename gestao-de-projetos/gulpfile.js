"use strict"
// const { watch } = require('gulp')
const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
sass.compiler = require('node-sass')

gulp.task('default', watchFunction)
gulp.task('sass', compileSass)

function compileSass(){
   return gulp
      .src('src/scss/*.scss')
      .pipe(sass({
         outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(gulp.dest('src/dist/css'))
}

function watchFunction(){
   gulp.watch('src/scss/*.scss', compileSass)
}