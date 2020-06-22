const gulp = require('gulp');
gulp.task('default',function () {
    console.log('-----default------')
});
gulp.task('copy-index',function () {
    console.log('-----default------');
    gulp.src('./index.html')//文件夹下所有子文件夹、文件 /file/**/*.*
        .pipe(gulp.dest('./dist'))
});