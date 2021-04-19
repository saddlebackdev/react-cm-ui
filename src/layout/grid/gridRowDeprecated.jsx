import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_GRID_COLUMN,
    BEM_GRID_ROW,
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const columnNumberEnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const xAlignEnums = ['center', 'left', 'right'];
const verticalAlignEnums = ['bottom', 'middle', 'top'];

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    columns: PropTypes.oneOf(columnNumberEnums),
    horizontalAlign: PropTypes.oneOf(xAlignEnums),
    id: PropTypes.string,
    stressed: PropTypes.bool,
    style: PropTypes.shape({}),
    textAlign: PropTypes.oneOf(xAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums),
};

const defaultProps = {
    className: undefined,
    columns: undefined,
    horizontalAlign: undefined,
    id: undefined,
    stressed: false,
    style: {},
    textAlign: undefined,
    verticalAlign: undefined,
};

const useStyles = makeStyles(() => ({
    'deprecatedGridRowColumns-1': {},
    'deprecatedGridRowColumns-2': {},
    'deprecatedGridRowColumns-3': {},
    'deprecatedGridRowColumns-4': {},
    'deprecatedGridRowColumns-5': {},
    'deprecatedGridRowColumns-6': {},
    'deprecatedGridRowColumns-7': {},
    'deprecatedGridRowColumns-8': {},
    'deprecatedGridRowColumns-9': {},
    'deprecatedGridRowColumns-10': {},
    'deprecatedGridRowColumns-11': {},
    'deprecatedGridRowColumns-12': {},
    deprecatedHorizontalCenter: {},
    deprecatedHorizontalLeft: {},
    deprecatedHorizontalTop: {},
    deprecatedStressed: {},
    deprecatedTextAlignCenter: {},
    deprecatedTextAlignLeft: {},
    deprecatedTextAlignRight: {},
    deprecatedVerticalAlignBottom: {},
    deprecatedVerticalAlignMiddle: {},
    deprecatedVerticalAlignTop: {},
    root: {
        alignItems: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'inherit',
        width: '100%',
        [`&$deprecatedGridRowColumns-1 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 1) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-2 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 2) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-3 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 3) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-4 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 4) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-5 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 5) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-6 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 6) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-7 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 7) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-8 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 8) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-9 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 9) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-10 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 10) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-11 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 11) * 10e7) / 10e5}%`,
        },
        [`&$deprecatedGridRowColumns-12 .${BEM_GRID_COLUMN}`]: {
            width: `${Math.round((1 / 12) * 10e7) / 10e5}%`,
        },
        '&$deprecatedHorizontalCenter': {
            justifyContent: 'center',
        },
        '&$deprecatedHorizontalLeft': {
            justifyContent: 'flex-start',
        },
        '&$deprecatedHorizontalTop': {
            justifyContent: 'flex-end',
        },
        '&$deprecatedTextAlignCenter': {
            textAlign: 'center',
        },
        '&$deprecatedTextAlignLeft': {
            textAlign: 'left',
        },
        '&$deprecatedTextAlignRight': {
            textAlign: 'right',
        },
        '&$deprecatedVerticalAlignBottom': {
            alignItems: 'flex-end',
        },
        '&$deprecatedVerticalAlignMiddle': {
            alignItems: 'center',
        },
        '&$deprecatedVerticalAlignTop': {
            alignItems: 'flex-start',
        },
    },
}));

const GridRowDeprecated = React.forwardRef(
    // eslint-disable-next-line prefer-arrow-callback
    function GridRowDeprecated(props, ref) {
        const {
            children,
            className,
            columns,
            horizontalAlign,
            id,
            stressed,
            style,
            textAlign,
            verticalAlign,
        } = props;

        const classes = useStyles(props);

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_GRID_ROW,
            classes.root,
            className,
            {
                [classes[`deprecatedGridRowColumns-${String(columns)}`]]: columns,
                [classes.deprecatedHorizontalAlignCenter]: horizontalAlign === 'center',
                [classes.deprecatedHorizontalAlignLeft]: horizontalAlign === 'left',
                [classes.deprecatedHorizontalAlignRight]: horizontalAlign === 'right',
                [classes.deprecatedStressed]: stressed,
                [classes.deprecatedTextAlignCenter]: textAlign === 'center',
                [classes.deprecatedTextAlignLeft]: textAlign === 'left',
                [classes.deprecatedTextAlignRight]: textAlign === 'right',
                [classes.deprecatedVerticalAlignBottom]: verticalAlign === 'bottom',
                [classes.deprecatedVerticalAlignMiddle]: verticalAlign === 'middle',
                [classes.deprecatedVerticalAlignTop]: verticalAlign === 'top',
            },
        );

        return (
            <div
                className={rootClasses}
                id={id}
                ref={ref}
                style={style}
            >
                {children}
            </div>
        );
    },
);

GridRowDeprecated.propTypes = propTypes;
GridRowDeprecated.defaultProps = defaultProps;

export default GridRowDeprecated;
