const gulp = require('gulp'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat');

// CONCAT JS
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// COMPILE SASS
gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js',['scripts']);
  gulp.watch('src/scss/*.scss',['sass']);
});
