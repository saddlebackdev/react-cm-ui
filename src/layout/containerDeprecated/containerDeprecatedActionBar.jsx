import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    stretch: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    color: null,
    stretch: null,
    style: null,
};

const useStyles = makeStyles(({
    breakpoints,
    palette,
}) => ({
    root: {
        alignItems: 'center',
        backgroundColor: palette.background.primary,
        borderBottom: `1px solid ${palette.border.primary}`,
        borderTop: `1px solid ${palette.border.primary}`,
        display: 'flex',
        justifyContent: 'flex-start',
        minHeight: 70,
        padding: '0 22px',
        width: 'auto',
        '&.container-action-bar-color': {
            '&-inverse': {
                backgroundColor: palette.background.contrastPrimary,
            },
            '&-light': {
                backgroundColor: palette.background.light,
            },
            '&-nest': {
                backgroundColor: palette.background.secondary,
            },
            '&-primary': {
                backgroundColor: palette.background.primary,
            },
            '&-transparent': {
                backgroundColor: 'transparent',
            },
        },
        '&.container-action-bar-stretch': {
            margin: '0 -11px',
            [breakpoints.up('md')]: {
                margin: '0 -22px',
            },
        },
    },
    '@global': {
        '.container_deprecated .ui.sub-navigation + .container-action-bar': {
            borderTop: 0,
        },
    },
}));

function ContainerDeprecatedActionBar(props) {
    const {
        as,
        children,
        className,
        color,
        stretch,
        style,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        'container-action-bar',
        classes.root,
        className,
        {
        'container-action-bar-color-inverse': color === 'inverse',
        'container-action-bar-color-light': color === 'light',
        'container-action-bar-color-nest': color === 'nest',
        'container-action-bar-color-transparent': color === 'transparent',
        'container-stretch': stretch,
    });

    const ElementType = Utils.getElementType(as || 'header', props);

    return (
        <ElementType
            className={rootClasses}
            style={style}
        >
            <div style={{ width: '100%' }}>
                {children}
            </div>
        </ElementType>
    );
}

ContainerDeprecatedActionBar.propTypes = propTypes;
ContainerDeprecatedActionBar.defaultProps = defaultProps;

export default ContainerDeprecatedActionBar;
