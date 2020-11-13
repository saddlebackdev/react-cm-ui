import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ContainerDeprecatedActionBar from './containerDeprecatedActionBar';
import ContainerDeprecatedContent from './containerDeprecatedContent';
import makeStyles from '../../styles/makeStyles';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    color: null,
    style: null,
};

const useStyles = makeStyles(({
    breakpoints,
    palette,
    width,
}) => ({
    root: {
        backgroundColor: palette.background.primary,
        minHeight: '100%',
        padding: '0 11px',
        width: '100%',
        [breakpoints.up('md')]: {
            padding: '0 22px',
        },
        '&.container-color': {
            '&-inverse': {
                backgroundColor: palette.background.contrastPrimary,
            },
            '&-light': {
                backgroundColor: palette.background.light,
            },
            '&-nest': {
                backgroundColor: palette.background.secondary,
            },
            '&-transparent': {
                backgroundColor: 'transparent',
            },
        },
        '& .ui.rail': {
            position: 'absolute',
        },
        '& .container-content': {
            margin: '0 auto',
            maxWidth: `${1720 - width.navigation.md.expanded}px`,
            position: 'relative',
            width: '100%',
        },
        '& .container-content-max-width': {
            '&-laptop': {
                maxWidth: `${1024 - width.navigation.md.expanded - 44}px`,
            },
        },
    },
}));

function ContainerDeprecated(props) {
    const {
        as,
        children,
        className,
        color,
        style,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        'ui',
        'container_deprecated',
        classes.root,
        className,
        {
            'container-color-inverse': color === 'inverse',
            'container-color-light': color === 'light',
            'container-color-nest': color === 'nest',
            'container-color-transparent': color === 'transparent',
        },
    );

    const ElementType = Utils.getElementType(as || 'main', props);

    return (
        <ElementType
            className={rootClasses}
            style={style}
        >
            {children}
        </ElementType>
    );
}

ContainerDeprecated.ActionBar = ContainerDeprecatedActionBar;
ContainerDeprecated.Content = ContainerDeprecatedContent;

ContainerDeprecated.propTypes = propTypes;
ContainerDeprecated.defaultProps = defaultProps;

export default ContainerDeprecated;
