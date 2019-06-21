const { dest, series, src } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

const scssTask = () => {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(dest('lib'));
};

const minifyCssTask = () => {
    return src('lib/**/*.css')
        .pipe(cleanCSS())
        .pipe(dest('lib'));
};

exports.default = series(scssTask, minifyCssTask);
