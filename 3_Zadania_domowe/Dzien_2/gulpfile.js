var gulp = require('gulp');  //pobraliśmy gulpa
var sass = require('gulp-sass');

gulp.task('sass', function() { 
  return gulp.src('sass/main.scss') //znajdź plik style.css
        .pipe(sass({errLogToConsole: true})) //ok, mam plik, podaję go dalej i sass kompiluje go na .css
        .pipe(gulp.dest('css')) //skopilowany plik przekazujemy do gulp.dest i wyrzuca go do katalogu css
})
gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']); /*które katalogi powinien oglądać, tutaj nazwa folderu to sass(tak nazywa się nasz folder z plikami sassa) */
})
