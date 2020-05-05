import PropTypes from 'prop-types';
import Utils from '../utils/utils';

export const buttonPropTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    disable: PropTypes.bool,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.bool,
    id: PropTypes.string,
    innerStyle: PropTypes.shape({}),
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    outlined: PropTypes.bool,
    relax: PropTypes.bool,
    style: PropTypes.shape({}),
    target: PropTypes.oneOf(['_blank']),
    title: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export const buttonDefaultProps = {
    as: 'button',
    className: undefined,
    color: 'primary',
    compact: false,
    disable: false,
    disabled: false,
    fluid: false,
    href: undefined,
    icon: false,
    id: undefined,
    innerStyle: {},
    inverse: false,
    onClick: undefined,
    outlined: false,
    relax: false,
    style: {},
    target: undefined,
    title: undefined,
    width: undefined,
};