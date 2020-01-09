import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Rail(props) {
    const {
        children,
        className,
        position,
        style,
    } = props;
    const containerClasses = ClassNames('ui', 'rail', className, {
        'rail-position-left': position === 'left',
        'rail-position-right': position === 'right',
    });

    return (
        <div className={containerClasses} style={style}>
            {children}
        </div>
    );
}

const positionEnums = [ 'left', 'right' ];

Rail.propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(positionEnums).isRequired,
    style: PropTypes.object,
};

export default Rail;
