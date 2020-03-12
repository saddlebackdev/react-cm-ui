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
        src: 'src/global/images/**',
        lib: 'lib/global/images',
    },
    scripts: {
        src: [
            'src/**/*.js',
            'src/**/*.jsx',
        ],
        lib: 'lib',
    },
    styles: {
        src: 'src/**/*.scss',
        lib: 'lib',
    },
};

export const clean = () => del(['lib']);

export function images() {
    return src(paths.images.src)
        .pipe(dest(paths.images.lib));
}

export function scripts() {
    return src(paths.scripts.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.lib));
}

export function styles() {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest(paths.styles.lib));
}

function watchFiles() {
    watch(paths.images.src, images);
    watch(paths.scripts.src, scripts);
    watch(paths.styles.src, styles);
}

export { watchFiles as watch };

/**
 * NOTE: Not adding scripts just yet. Maybe at some other time we'll do that.
 */
export default series(clean, parallel(styles, images));
