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

export default series(
    clean,
    parallel(
        images,
        scripts,
        styles,
        ts,
        types,
    ),
);
