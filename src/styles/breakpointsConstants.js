import PropTypes from 'prop-types';

export const keys = ['sm', 'md', 'lg', 'xl'];

export const values = {
    sm: 0,
    md: 768,
    lg: 1200,
    xl: 1686,
};

export const propTypes = {
    breakpoints: PropTypes.arrayOf(PropTypes.shape({
        between: PropTypes.func,
        keys: PropTypes.oneOf(keys),
        down: PropTypes.func,
        only: PropTypes.func,
        up: PropTypes.func,
        values: PropTypes.shape({
            sm: PropTypes.oneOf([values.sm]),
            md: PropTypes.oneOf([values.sm]),
            lg: PropTypes.oneOf([values.lg]),
            xl: PropTypes.oneOf([values.xl]),
        }),
        width: PropTypes.func,
    })).isRequired,
};
