import {
    Icon,
    Typography,
} from 'react-cm-ui';
import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    anchorLink: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
    ]).isRequired,
};

const defaultProps = {
    anchorLink: null,
    children: null,
    className: null,
};

const useStyles = makeStyles(() => {
    const anchorIconSize = '0.7em !important';
    const anchorIconStyles = {
        height: anchorIconSize,
        width: anchorIconSize,
    };

    return {
        anchorIcon: {
            ...anchorIconStyles,
            '& svg': {
                ...anchorIconStyles,
            },
        },
        anchorLink: {
            opacity: 0,
            paddingLeft: 11,
            transition: 'opacity 200ms ease-in-out',
        },
        hasAnchorLink: {},
        innerContainer: {
            '&$hasAnchorLink': {
                '&:hover $anchorLink': {
                    opacity: 1,
                },
            },
        },
        root: {},
    };
});

function Heading(props) {
    const {
        anchorLink,
        children,
        className,
        variant,
    } = props;
    const classes = useStyles();
    const innerContainerClasses = ClassNames(
        classes.innerContainer,
        {
            [classes.hasAnchorLink]: anchorLink,
        },
    );

    return (
        <Typography
            className={className}
            variant={variant}
        >
            <span
                className={innerContainerClasses}
            >
                {children}

                {anchorLink && (
                    <a
                        className={classes.anchorLink}
                        ariaHidden="true"
                        ariaLabel="anchor"
                        id={anchorLink}
                        href={`#${anchorLink}`}
                    >
                        <Icon
                            className={classes.anchorIcon}
                            color="static"
                            compact
                            size={14}
                            type="link"
                        />
                    </a>
                )}
            </span>
        </Typography>
    );
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
