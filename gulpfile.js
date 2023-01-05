var gulp = require('gulp');
var del = require('del');

var htmlmin = require('gulp-htmlmin');
var fileinclude = require('gulp-file-include');
var replace = require('gulp-replace');
var webpHtmlNoSvg = require('gulp-webp-html-nosvg');

var cssmin = require('gulp-cssmin');
var csso = require('gulp-csso');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');

var ttf2woff2 = require('gulp-ttf2woff2');

var webp = require('gulp-webp');
var imagemin = require('gulp-imagemin');

// function deleteall(done) {
//     del('./dist/**/*');

//     done();
// }

function html(done) {
    gulp.src('./src/**.html')
        .pipe(fileinclude())
        .pipe(replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNoSvg())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));

    done();
}

function getcss(done) {
    gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(concatCss('index.css'))
        .pipe(cssmin())
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
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));

    done();
}

function compressFonts(done) {
    gulp.src('./src/fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(gulp.src('./src/fonts/**/*.{otf,woff,woff2}'))
        .pipe(gulp.dest('./dist/fonts'));

    done();
}

function compressImages(done) {
    gulp.src('./src/img/**/*.jpg')
        .pipe(webp())
        .pipe(gulp.src('./src/img/**/*.{jpg, jpeg, png, jfif, webp}'))
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(gulp.dest('./dist/img'));

    done();
}

gulp.task('build', gulp.series(
    html,
    getcss,
    images,
    javascript
));

gulp.task('compress', gulp.series(
    html,
    getcss,
    compressImages,
    compressFonts,
    javascript
));

gulp.task('serve', gulp.series(
    html,
    getcss,
    images,
    javascript
));
