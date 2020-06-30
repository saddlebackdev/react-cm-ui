import PropTypes from 'prop-types';

export const BEM_BLOCK_NAME = 'person_panel';

export const BEM_DETAILS_NAME = `${BEM_BLOCK_NAME}--details`;

export const GENDER_PROP_TYPE = PropTypes.oneOf([
    'f',
    'm',
    '',
    null,
]);

export const GENDER_DEFAULT_TYPE = null;

export const RECORD_TYPE_COLOR = ({
    gender,
    isGradient,
    recordType,
    theme,
}) => {
    const {
        palette,
    } = theme;

    switch (recordType) {
        case 'child':
            if (isGradient) {
                return palette.sky.G500;
            }

            return palette.sky[500];
        case 'student':
            if (isGradient) {
                return palette.redOrange.G500;
            }

            return palette.redOrange[500];
        case 'adult':
        default:
            switch (gender) {
                case 'f':
                    if (isGradient) {
                        return palette.cyan.G600;
                    }

                    return palette.cyan[600];
                case 'm':
                    if (isGradient) {
                        return palette.green.G600;
                    }

                    return palette.green[600];
                default:
                    if (isGradient) {
                        return palette.teal.G500;
                    }

                    return palette.teal[500];
            }
    }
};

export const RECORD_TYPE_DEFAULT_PROP = 'adult';

export const RECORD_TYPE_PROP_TYPE = PropTypes.oneOf(['adult', 'child', 'student']);
