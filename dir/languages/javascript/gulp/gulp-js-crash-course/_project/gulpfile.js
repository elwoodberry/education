// GULP
const gulp = require('gulp');

// Gulp-Uglify
const uglify = require('gulp-uglify');


// MINIFY JS
gulp.task('minify', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
      .pipe(gulp.dest('public/js'))
});



// IMAGEMIN
const imagemin = require('gulp-imagemin');

gulp.task('imageMin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
);




// default Message
gulp.task('default', function(){
  return console.log('Gulp is running...');
});

// Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});
