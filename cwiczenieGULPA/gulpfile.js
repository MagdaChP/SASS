var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
})

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
})

gulp.task('sprite', function () {
  var spriteData = gulp.src('./resources/images/flags/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
  }));
  var imgStream = spriteData.img
     .pipe(gulp.dest('./resources/images/flags'));
 
   var cssStream = spriteData.css
     .pipe(gulp.dest('sass'));
 
   return merge(imgStream, cssStream);
});