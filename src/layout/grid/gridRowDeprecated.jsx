import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_GRID_ROW,
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import Utils from '../../utils/utils';

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
            className,
            {
                [`grid-row-columns-${Utils.numberToWord(columns)}`]: columns,
                [classes.horizontalAlignCenter]: horizontalAlign === 'center',
                [classes.horizontalAlignLeft]: horizontalAlign === 'left',
                [classes.horizontalAlignRight]: horizontalAlign === 'right',
                [classes.stressed]: stressed,
                [classes.textAlignCenter]: textAlign === 'center',
                [classes.textAlignLeft]: textAlign === 'left',
                [classes.textAlignRight]: textAlign === 'right',
                [classes.verticalAlignBottom]: verticalAlign === 'bottom',
                [classes.verticalAlignMiddle]: verticalAlign === 'middle',
                [classes.verticalAlignTop]: verticalAlign === 'top',
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
