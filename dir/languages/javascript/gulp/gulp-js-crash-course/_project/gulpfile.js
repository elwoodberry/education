


// GULP
const gulp = require('gulp');

// default Message
gulp.task('default', function(){
  return console.log('Gulp is running...');
});

// Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});
