import {
    dest,
    parallel,
    series,
    src,
    watch,
} from 'gulp';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import sass from 'gulp-sass';
import del from 'del';

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
        ],
        dest: 'core',
    },
    styles: {
        src: 'src/**/*.scss',
        dest: 'core',
    },
};

export const clean = () => del(['core']);

export function images() {
    return src(paths.images.src)
        .pipe(dest(paths.images.dest));
}

export function scripts() {
    return src(paths.scripts.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.dest));
}

export function styles() {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest(paths.styles.dest));
}

function watchFiles() {
    watch(paths.images.src, images);
    watch(paths.scripts.src, scripts);
    watch(paths.styles.src, styles);
}

export { watchFiles as watch };

export default series(
    clean,
    parallel(
        images,
        scripts,
        styles,
    ),
);
