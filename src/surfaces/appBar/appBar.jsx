/* eslint-disable linebreak-style */
import ClassNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
        PropTypes.arrayOf(
            PropTypes.shape({}),
        ),
    ]).isRequired,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    style: undefined,
};

const useStyles = makeStyles((theme) => {
    const heightMd = get(theme, 'height.appHeader.md');
    const heightSm = get(theme, 'height.appHeader.sm');
    const borderColorPrimary = get(theme, 'palette.border.primary');
    const colorBlack = get(theme, 'palette.common.black');

    return {
        root: {
            borderBottom: `1px solid ${borderColorPrimary}`,
            backgroundColor: get(theme, 'palette.background.primary'),
            boxShadow: `0 2px 1px -2px ${colorBlack}`,
            [theme.breakpoints.up('sm')]: {
                height: heightSm,
            },
            [theme.breakpoints.up('md')]: {
                height: heightMd,
            },
        },
    };
});

function AppBar(props) {
    const {
        children,
        className,
        style,
        ...restProps
    } = props;

    const classes = useStyles();
    const rootClasses = ClassNames(
        'ui',
        'app-bar',
        classes.root,
        className,
    );

    return (
        <div
            className={rootClasses}
            style={style}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...restProps}
        >
            {children}
        </div>
    );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
