var gulp = require('gulp');
var del = require('del');

var htmlmin = require('gulp-htmlmin');
var fileinclude = require('gulp-file-include');
var replace = require('gulp-replace');
var webpHtmlNoSvg = require('gulp-webp-html-nosvg');

function deleteall(done){
    del('./dist/**/*');

    done();
}

function html(done)
{
    gulp.src('./src/**.html')
        .pipe(gulp.dest('./dist'));

    done();
}


gulp.task('default', gulp.series(
    deleteall,
    html,
    ));
