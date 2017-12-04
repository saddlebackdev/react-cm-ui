const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const cssMin = require('gulp-cssmin');
const rework = require('gulp-rework');
const reworkURL = require('rework-plugin-url');

const libCSS = 'lib/css';

gulp.task('sass:lib', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(libCSS))
});

gulp.task('cssComponentsUrl:lib', [ 'sass:lib' ], () => {
    return gulp.src('lib/css/components/**/*.css')
        .pipe(rework(reworkURL(url => {
            const prependPath = '../../';
            const newUrl = url.includes('../') ? prependPath + url : url;
            return newUrl;
        })))
        .pipe(gulp.dest(libCSS))
});

gulp.task('cssBaseUrl:lib', [ 'sass:lib' ], () => {
    return gulp.src('lib/css/base/**/*.css')
        .pipe(rework(reworkURL(url => {
            const prependPath = '../';
            console.log('url', url);
            const newUrl = url.includes('../') ? prependPath + url : url;
            console.log('newUrl', newUrl);
            return newUrl;
        })))
        .pipe(gulp.dest(libCSS))
});

gulp.task('minifyCss:lib', [ 'sass:lib', 'cssComponentsUrl:lib', 'cssBaseUrl:lib' ], () => {
    return gulp.src('lib/css/**/*.css')
        .pipe(cssMin())
        .pipe(gulp.dest(libCSS))
});

gulp.task('compile:lib', [ 'minifyCss:lib' ]);
