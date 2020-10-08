import ClassNames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
    BEM_APP_BAR,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import {
    ALIGN_ITEMS_CENTER,
    ALIGN_ITEMS_END,
    ALIGN_ITEMS_START,
    JUSTIFY_CONTENT_CENTER,
    JUSTIFY_CONTENT_END,
    JUSTIFY_CONTENT_START,
    PLACEMENT_BOTTOM_CENTER,
    PLACEMENT_BOTTOM_LEFT,
    PLACEMENT_BOTTOM_RIGHT,
    PLACEMENT_TOP_CENTER,
    PLACEMENT_TOP_LEFT,
    PLACEMENT_TOP_RIGHT,
    PLACEMENT_MIDDLE_CENTER,
    PLACEMENT_MIDDLE_LEFT,
    PLACEMENT_MIDDLE_RIGHT,
} from './appBarConstants';

const propTypes = {
    /**
     * App Bar content
     */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
        PropTypes.arrayOf(
            PropTypes.shape({}),
        ),
    ]).isRequired,
    /**
     * Additional classes strings.
     */
    className: PropTypes.string,
    /**
     * Additional classes object.
     */
    classes: PropTypes.shape({
        root: PropTypes.shape({}),
    }),
    /**
     * Content position.
     */
    placement: PropTypes.oneOf([
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-center',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
    ]),
    /**
     * Supply any inline styles to the App Bar's container
    */
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: '',
    classes: {},
    placement: 'top-left',
    style: undefined,
};

const useStyles = makeStyles((theme) => {
    const heightMd = get(theme, 'height.appHeader.md');
    const heightSm = get(theme, 'height.appHeader.sm');
    const colorBlack = get(theme, 'palette.common.black');

    return {
        root: {
            backgroundColor: get(theme, 'palette.background.primary'),
            boxShadow: `0 2px 1px -2px ${colorBlack}`,
            padding: '10px 22px',
            display: 'flex',
            justifyContent: ({ placement }) => {
                switch (placement) {
                    case PLACEMENT_TOP_LEFT:
                    case PLACEMENT_MIDDLE_LEFT:
                    case PLACEMENT_BOTTOM_LEFT:
                        return JUSTIFY_CONTENT_START;

                    case PLACEMENT_TOP_CENTER:
                    case PLACEMENT_MIDDLE_CENTER:
                    case PLACEMENT_BOTTOM_CENTER:
                        return JUSTIFY_CONTENT_CENTER;

                    case PLACEMENT_TOP_RIGHT:
                    case PLACEMENT_MIDDLE_RIGHT:
                    case PLACEMENT_BOTTOM_RIGHT:
                        return JUSTIFY_CONTENT_END;
                    default:
                        return JUSTIFY_CONTENT_START;
                }
            },
            alignItems: ({ placement }) => {
                switch (placement) {
                    case PLACEMENT_TOP_LEFT:
                    case PLACEMENT_TOP_CENTER:
                    case PLACEMENT_TOP_RIGHT:
                        return ALIGN_ITEMS_START;

                    case PLACEMENT_MIDDLE_LEFT:
                    case PLACEMENT_MIDDLE_CENTER:
                    case PLACEMENT_MIDDLE_RIGHT:
                        return ALIGN_ITEMS_CENTER;

                    case PLACEMENT_BOTTOM_LEFT:
                    case PLACEMENT_BOTTOM_CENTER:
                    case PLACEMENT_BOTTOM_RIGHT:
                        return ALIGN_ITEMS_END;

                    default:
                        return ALIGN_ITEMS_START;
                }
            },
            [theme.breakpoints.up('sm')]: {
                height: heightSm,
            },
            [theme.breakpoints.up('md')]: {
                height: heightMd,
            },
        },
    };
});

/**
 * App Bar is replacing our old Title Bar component. It's a wrapper for the a page title.
 */
function AppBar(props) {
    const {
        children,
        classes,
        className,
        style,
        ...restProps
    } = props;

    const innerClasses = useStyles(props);
    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_APP_BAR,
        classes.root,
        innerClasses.root,
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
