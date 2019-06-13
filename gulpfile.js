const { dest, series, src } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

const libCSS = 'lib/css';

const scssTask = () => {
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest(libCSS));
};

const minifyCssTask = () => {
    return src('lib/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(dest(libCSS));
};

exports.default = series(scssTask, minifyCssTask);
