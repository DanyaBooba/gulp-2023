var gulp = require('gulp');
var del = require('del');

var htmlmin = require('gulp-htmlmin');
var fileinclude = require('gulp-file-include');
var replace = require('gulp-replace');
var webpHtmlNoSvg = require('gulp-webp-html-nosvg');

function deleteall(done) {
    del('./dist/**/*');

    done();
}

function html(done) {
    gulp.src('./src/**.html')
        .pipe(gulp.dest('./dist'));

    done();
}

function getcss(done) {
    gulp.src('./src/css/**/*.css')
        .pipe(gulp.dest('./dist/css'));

    done();
}

function images(done) {
    gulp.src('./src/img/**/*.{jpg, webp, svg, avi}')
        .pipe(gulp.dest('./dist/img'));

    done();
}

function javascript(done) {
    gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js'));

    done();
}

function fonts(done) {
    gulp.src('./src/fonts/**/*.{woff2,woff,otf,ttf}')
        .pipe(gulp.dest('./dist/fonts'));

    done();
}

gulp.task('default', gulp.series(
    deleteall,
    html,
    getcss,
    images,
    javascript,
    fonts
    ));

gulp.task(getcss);
