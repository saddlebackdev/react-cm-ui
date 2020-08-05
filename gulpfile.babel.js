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
        colors: {
            src: [
                'src/colors/**/**.js',
                '!src/colors/**/*.test.js',
            ],
            dest: 'core/colors',
        },
        dataDisplay: {
            src: [
                'src/dataDisplay/**/**.js',
                'src/dataDisplay/**/**.jsx',
                '!src/dataDisplay/**/*.test.js',
            ],
            dest: 'core/dataDisplay',
        },
        feedback: {
            src: [
                'src/feedback/**/**.js',
                'src/feedback/**/**.jsx',
                '!src/feedback/**/*.test.js',
            ],
            dest: 'core/feedback',
        },
        global: {
            src: [
                'src/global/**/**.js',
                '!src/global/**/*.test.js',
                'src/global/**/**.jsx',
            ],
            dest: 'core/global',
        },
        inputs: {
            src: [
                'src/inputs/**/**.js',
                '!src/inputs/**/*.test.js',
                'src/inputs/**/**.jsx',
            ],
            dest: 'core/inputs',
        },
        layout: {
            src: [
                'src/layout/**/**.js',
                '!src/layout/**/*.test.js',
                'src/layout/**/**.jsx',
            ],
            dest: 'core/layout',
        },
        navigation: {
            src: [
                'src/navigation/**/**.js',
                '!src/navigation/**/*.test.js',
                'src/navigation/**/**.jsx',
            ],
            dest: 'core/navigation',
        },
        root: {
            src: [
                'src/**.js',
            ],
            dest: 'core',
        },
        styles: {
            src: [
                '!src/styles/**/*.test.js',
                'src/styles/**/**.js',
            ],
            dest: 'core/styles',
        },
        surfaces: {
            src: [
                '!src/surfaces/**/*.test.js',
                'src/surfaces/**/**.js',
            ],
            dest: 'core/surfaces',
        },
        testUtils: {
            src: [
                'src/testUtils/**/**.js',
                '!src/utils/**/*.test.js',
                'src/testUtils/**/**.jsx',
            ],
            dest: 'core/testUtils',
        },
        utils: {
            src: [
                'src/utils/**/**.js',
                '!src/utils/**/*.test.js',
                'src/utils/**/**.jsx',
            ],
            dest: 'core/utils',
        },
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

export function scriptsColors() {
    return src(paths.scripts.colors.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.colors.dest));
}

export function scriptsDataDisplay() {
    return src(paths.scripts.dataDisplay.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.dataDisplay.dest));
}

export function scriptsFeedback() {
    return src(paths.scripts.feedback.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.feedback.dest));
}

export function scriptsGlobal() {
    return src(paths.scripts.global.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.global.dest));
}

export function scriptsInputs() {
    return src(paths.scripts.inputs.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.inputs.dest));
}

export function scriptsLayout() {
    return src(paths.scripts.layout.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.layout.dest));
}

export function scriptsNavigation() {
    return src(paths.scripts.navigation.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.navigation.dest));
}

export function scriptsRoot() {
    return src(paths.scripts.root.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.root.dest));
}

export function scriptsStyles() {
    return src(paths.scripts.styles.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.styles.dest));
}

export function scriptsSurfaces() {
    return src(paths.scripts.surfaces.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.surfaces.dest));
}

export function scriptsUtils() {
    return src(paths.scripts.utils.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.utils.dest));
}

export function scriptsTestUtils() {
    return src(paths.scripts.testUtils.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.testUtils.dest));
}

export function styles() {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest(paths.styles.dest));
}

function watchFiles() {
    watch(paths.images.src, images);
    watch(paths.scripts.src, scriptsRoot);
    watch(paths.scripts.src, scriptsColors);
    watch(paths.scripts.src, scriptsDataDisplay);
    watch(paths.scripts.src, scriptsFeedback);
    watch(paths.scripts.src, scriptsGlobal);
    watch(paths.scripts.src, scriptsInputs);
    watch(paths.scripts.src, scriptsLayout);
    watch(paths.scripts.src, scriptsNavigation);
    watch(paths.scripts.src, scriptsStyles);
    watch(paths.scripts.src, scriptsSurfaces);
    watch(paths.scripts.src, scriptsUtils);
    watch(paths.scripts.src, scriptsTestUtils);
    watch(paths.styles.src, styles);
}

export { watchFiles as watch };

export default series(
    clean,
    parallel(
        images,
        scriptsColors,
        scriptsDataDisplay,
        scriptsFeedback,
        scriptsGlobal,
        scriptsInputs,
        scriptsLayout,
        scriptsNavigation,
        scriptsRoot,
        scriptsStyles,
        scriptsSurfaces,
        scriptsUtils,
        scriptsTestUtils,
        styles,
    ),
);
