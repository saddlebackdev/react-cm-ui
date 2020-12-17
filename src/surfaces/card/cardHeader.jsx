import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../dataDisplay/typography';

const propTypes = {
    attached: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['blue', 'green', 'pink']),
    style: PropTypes.shape({}),
    title: PropTypes.string,
};

const defaultProps = {
    attached: false,
    children: null,
    className: null,
    color: null,
    style: null,
    title: null,
};

function CardHeader(props) {
    const {
        attached,
        children,
        className,
        color,
        style,
        title,
    } = props;

    const rootClasses = ClassNames('card-header', className, {
        'card-header-attached': attached,
        'card-header-color-blue': color === 'blue',
        'card-header-color-green': color === 'green',
        'card-header-color-pink': color === 'pink',
    });

    return (
        <header
            className={rootClasses}
            style={style}
        >
            {title ? (
                <Typography
                    variant="h2"
                >
                    {title}
                </Typography>
            ) : children}
        </header>
    );
}

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
