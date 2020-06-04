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
        atoms: {
            src: [
                'src/atoms/**/**.js',
                'src/atoms/**/**.jsx',
            ],
            dest: 'core/atoms',
        },
        colors: {
            src: [
                'src/colors/**/**.js',
            ],
            dest: 'core/colors',
        },
        dataDisplay: {
            src: [
                'src/dataDisplay/**/**.js',
                'src/dataDisplay/**/**.jsx',
            ],
            dest: 'core/dataDisplay',
        },
        inputs: {
            src: [
                'src/inputs/**/**.js',
                'src/inputs/**/**.jsx',
            ],
            dest: 'core/inputs',
        },
        molecules: {
            src: [
                'src/molecules/**/**.js',
                'src/molecules/**/**.jsx',
            ],
            dest: 'core/molecules',
        },
        organisms: {
            src: [
                'src/organisms/**/**.js',
                'src/organisms/**/**.jsx',
            ],
            dest: 'core/organisms',
        },
        root: {
            src: [
                'src/**.js',
            ],
            dest: 'core',
        },
        styles: {
            src: [
                'src/styles/**/**.js',
            ],
            dest: 'core/styles',
        },
        templates: {
            src: [
                'src/templates/**/**.js',
                'src/templates/**/**.jsx',
            ],
            dest: 'core/templates',
        },
        utils: {
            src: [
                'src/utils/**/**.js',
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

// TODO: Remove once all components are shifted to the new organization.
export function scriptsAtoms() {
    return src(paths.scripts.atoms.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.atoms.dest));
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

export function scriptsInputs() {
    return src(paths.scripts.inputs.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.inputs.dest));
}

// TODO: Remove once all components are shifted to the new organization.
export function scriptsMolecules() {
    return src(paths.scripts.molecules.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.molecules.dest));
}

// TODO: Remove once all components are shifted to the new organization.
export function scriptsOrganisms() {
    return src(paths.scripts.organisms.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.organisms.dest));
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

// TODO: Remove once all components are shifted to the new organization.
export function scriptsTemplates() {
    return src(paths.scripts.templates.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.templates.dest));
}

// TODO: Remove once all components are shifted to the new organization.
export function scriptsUtils() {
    return src(paths.scripts.utils.src)
        .pipe(babel())
        .pipe(dest(paths.scripts.utils.dest));
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
    watch(paths.scripts.src, scriptsAtoms);
    watch(paths.scripts.src, scriptsColors);
    watch(paths.scripts.src, scriptsDataDisplay);
    watch(paths.scripts.src, scriptsInputs);
    watch(paths.scripts.src, scriptsMolecules);
    watch(paths.scripts.src, scriptsOrganisms);
    watch(paths.scripts.src, scriptsStyles);
    watch(paths.scripts.src, scriptsTemplates);
    watch(paths.scripts.src, scriptsUtils);
    watch(paths.styles.src, styles);
}

export { watchFiles as watch };

export default series(
    clean,
    parallel(
        images,
        scriptsAtoms,
        scriptsColors,
        scriptsDataDisplay,
        scriptsInputs,
        scriptsMolecules,
        scriptsOrganisms,
        scriptsRoot,
        scriptsStyles,
        scriptsTemplates,
        scriptsUtils,
        styles,
    ),
);
