import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GridColumn from './gridColumn';
import GridRow from './gridRow';
import Utils from '../utils/utils';

const columnNumberEnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const xAlignEnums = ['center', 'left', 'right'];
const yAlignEnums = ['bottom', 'middle', 'top'];

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    columns: PropTypes.oneOf(columnNumberEnums),
    form: PropTypes.bool,
    horizontalAlign: PropTypes.oneOf(xAlignEnums),
    id: PropTypes.string,
    relaxed: PropTypes.bool,
    stressed: PropTypes.bool,
    style: PropTypes.shape({}),
    textAlign: PropTypes.oneOf(xAlignEnums),
    verticalAlign: PropTypes.oneOf(yAlignEnums),
};

const defaultProps = {
    className: undefined,
    columns: undefined,
    form: false,
    horizontalAlign: undefined,
    id: undefined,
    relaxed: false,
    stressed: false,
    style: {},
    textAlign: undefined,
    verticalAlign: undefined,
};

const Grid = React.forwardRef((props, ref) => {
    const {
        children,
        className,
        columns,
        form,
        horizontalAlign,
        id,
        relaxed,
        stressed,
        style,
        textAlign,
        verticalAlign,
    } = props;
    const containerClasses = ClassNames('ui', 'grid', className, {
        [`grid-columns-${Utils.numberToWord(columns)}`]: columns,
        'grid-form': form,
        'grid-horizontal-center': horizontalAlign === 'center',
        'grid-horizontal-left': horizontalAlign === 'left',
        'grid-horizontal-right': horizontalAlign === 'right',
        'grid-relaxed': relaxed,
        'grid-stressed': stressed,
        'grid-text-align-center': textAlign === 'center',
        'grid-text-align-left': textAlign === 'left',
        'grid-text-align-right': textAlign === 'right',
        'grid-vertical-bottom': verticalAlign === 'bottom',
        'grid-vertical-middle': verticalAlign === 'middle',
        'grid-vertical-top': verticalAlign === 'top',
    });

    return (
        <div
            className={containerClasses}
            id={id}
            ref={ref}
            style={style}
        >
            {children}
        </div>
    );
});

Grid.Column = GridColumn;
Grid.Row = GridRow;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
