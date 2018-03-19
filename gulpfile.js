var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('compile', function() {
    return gulp.src('./scss/grid.scss') 
    .pipe(sass()) 
    .pipe(gulp.dest('./compiled')) 
})