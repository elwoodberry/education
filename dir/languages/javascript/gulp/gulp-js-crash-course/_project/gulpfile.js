const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});

// CONCAT
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// Compile SASS
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

// Optimize Images
gulp.task('imageMin', function(){
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/img'));
});

// default Message
gulp.task('default', ['copyHtml', 'scripts', 'sass', 'imageMin']);

gulp.task('watch', function(){
  gulp.watch('src/*.html',['copyHtml']);
  gulp.watch('src/js/*.js',['scripts']);
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/img/*',['imageMin']);
});
