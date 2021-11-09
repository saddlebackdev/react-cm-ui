import {
    isObject,
    isString,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Typography from '../../dataDisplay/typography';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        closeButton: PropTypes.string,
        root: PropTypes.string,
        title: PropTypes.string,
    }),
    className: PropTypes.string,
    closeButton: PropTypes.shape({}),
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
};

const defaultProps = {
    children: null,
    classes: null,
    className: undefined,
    closeButton: undefined,
    closeButtonStyle: {},
    dataTestId: `${UI_CLASS_NAME}-drawer_title_bar`,
    style: {},
    title: undefined,
};

const useStyles = makeStyles(({
    breakpoints,
    height,
    palette,
    spacing,
    typography,
    zIndex,
}) => ({
    closeButton: {
        alignItems: 'center',
        display: 'flex',
        height: spacing(4),
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: spacing(4),
    },
    root: {
        backgroundColor: palette.background.primary,
        borderBottom: `1px solid ${palette.border.secondary}`,
        height: height.drawerTitleBar.sm,
        left: 0,
        padding: [[0, spacing(1)]],
        position: 'fixed',
        top: 0,
        transform: 'translateZ(0)',
        width: '100%',
        zIndex: zIndex.drawer,
        [breakpoints.up('md')]: {
            height: height.drawerTitleBar.md,
            padding: [[0, spacing(2)]],
        },
        '& > div': {
            height: height.drawerTitleBar.sm,
            position: 'relative',
            [breakpoints.up('md')]: {
                height: height.drawerTitleBar.md,
            },
        },
    },
    title: {
        display: 'block',
        lineHeight: typography.pxToRem(20),
        margin: 0,
        overflow: 'hidden',
        padding: [[14, spacing(8), 0, 0]],
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
    },
}));

const HAS_CLASS_NAME = 'drawer-has_title_bar';
const HAS_WING_CLASS_NAME = 'drawer--wing-has_title_bar';

function DrawerTitleBar(props) {
    const {
        children,
        className,
        closeButton,
        dataTestId,
        style,
        title,
        titleStyle,
    } = props;

    const classes = useStyles(props);
    const rootRef = useRef();

    useEffect(() => {
        const closestDrawer = rootRef.current.closest('.ui.drawer');
        const closestWing = rootRef.current.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(HAS_WING_CLASS_NAME);

            return null;
        }

        closestDrawer.classList.add(HAS_CLASS_NAME);

        return () => {
            if (closestWing) {
                closestWing.classList.remove(HAS_WING_CLASS_NAME);

                return null;
            }

            closestDrawer.classList.remove(HAS_CLASS_NAME);

            return null;
        };
    }, []);

    const rootClasses = ClassNames(
        'ui',
        'drawer--title_bar',
        classes.root,
        className,
    );

    return (
        <header
            className={rootClasses}
            data-testid={dataTestId}
            ref={rootRef}
            style={style}
        >
            <div
                className="drawer--title_bar_inner"
            >
                {isObject(title) && title}

                {isString(title) && (
                    <Typography
                        className={ClassNames(
                            'title',
                            classes.title,
                        )}
                        variant="h3"
                    >
                        {title}
                    </Typography>
                )}

                {isObject(closeButton) && (
                    <div
                        className={ClassNames(
                            'close-button',
                            classes.closeButton,
                        )}
                    >
                        {closeButton}
                    </div>
                )}

                {children}
            </div>
        </header>
    );
}

DrawerTitleBar.propTypes = propTypes;
DrawerTitleBar.defaultProps = defaultProps;

export default DrawerTitleBar;