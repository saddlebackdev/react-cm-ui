import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

class Divider extends React.Component {

    render() {
        const { className, color, compact, hidden, inverse, relaxed, style } = this.props;

        const containerClasses = ClassNames('ui', 'divider', className, {
            'divider-color-alternate': color === 'alternate',
            'divider-color-highlight': color === 'highlight',
            'divider-color-inverse': color === 'inverse',
            'divider-color-inverse-alternate': color === 'inverse-alternate',
            'divider-color-light': color === 'light',
            'divider-color-primary': !color || color === 'primary',
            'divider-compact': compact,
            'divider-hidden': hidden,
            'divider-inverse': inverse,
            'divider-relaxed': relaxed,
            'divider-relaxed-very': relaxed === 'very'
        });

        return (
            <div className={containerClasses} style={style} />
        );
    }

}
Divider.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    hidden: PropTypes.bool,
    inverse: PropTypes.bool,
    relaxed: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([ 'very' ])
    ]),
    style: PropTypes.shape({}),
};

export default Divider;
