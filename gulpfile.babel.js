import {
    dest,
    parallel,
    series,
    src,
    watch,
} from 'gulp';
import gulpTs from 'gulp-typescript';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import sass from '@selfisekai/gulp-sass';
import del from 'del';
import concat from 'gulp-concat';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import stripCode from 'gulp-strip-code';

const tsProject = gulpTs.createProject('tsconfig.json');

sass.compiler = require('sass');

const destSrc = 'core';

const paths = {
    images: {
        src: 'src/images/**',
        dest: 'core/images',
    },
    scripts: {
        src: [
            'src/**/*.js',
            'src/**/*.jsx',
            '!src/**/*.test.js',
            '!src/**/*.test.jsx',
        ],
        dest: destSrc,
    },
    ts: {
        src: [
            'src/**/*.ts',
            'src/**/*.tsx',
            '!node_modules',
            '!src/**/*.d.ts',
            '!src/**/*.test.ts',
            '!src/**/*.test.tsx',
        ],
        dest: destSrc,
    },
    types: {
        src: [
            'src/**/*.d.ts',
        ],
        dest: destSrc,
    },
    styles: {
        src: 'src/**/*.scss',
        dest: destSrc,
    },
};

const clean = () => del(['core']);

function images() {
    return src(paths.images.src)
        .pipe(dest(paths.images.dest));
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.dest));
}

function styles() {
    return src(paths.styles.src)
        .pipe(stripCode({
            start_comment: 'disable-gulp-start',
            end_comment: 'disable-gulp-end'
        }))
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest(paths.styles.dest));
}

function ts() {
    return src(paths.ts.src)
        .pipe(tsProject())
        .js
        .pipe(dest(paths.ts.dest));
}

function types() {
    return src(paths.types.src)
        .pipe(dest(paths.types.dest));
}

function containerQueries() {
    return src('./src/layout/grid/gridColumn.scss')
        .pipe(replace(/@container/g, '@media')) // temporarily replace `@container` with `@media` because Clean CSS Gulp plugin does not support `@container` queries
        .pipe(rename('styleGridColumn.scss'))
        .pipe(sass())
        .pipe(csso())
        .pipe(dest(destSrc));
}

function containerQueriesPostProcess() {
    return src('./core/styleGridColumn.css')
        .pipe(replace(/@media/g, '@container')) // restore `@container` for queries in this file that had temporarily been switched to `@media`
        .pipe(dest(destSrc));
}

function concatCss() {
    return src('core/**.css')
        .pipe(concat('style.css'))
        .pipe(dest(destSrc));
}

function removeUnusedFiles() {
    return del(['core/styleGridColumn.css']);
}

export default series(
    clean,
    parallel(
        images,
        scripts,
        styles,
        ts,
        types,
        containerQueries,
    ),
    containerQueriesPostProcess,
    concatCss,
    removeUnusedFiles,
);
