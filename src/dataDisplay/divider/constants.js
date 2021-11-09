import PropTypes from 'prop-types';
import Utils from '../../utils/utils';

export const DIVIDER_DEPRECATED_PROP_TYPES = {
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    hidden: PropTypes.bool,
    inverse: PropTypes.bool,
    relaxed: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very']),
    ]),
    style: PropTypes.shape({}),
};
