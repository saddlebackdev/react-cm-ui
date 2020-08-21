import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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

const GridRow = React.forwardRef((props, ref) => {
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
    const containerClasses = ClassNames(
        'ui',
        'grid-row',
        columns ? `grid-row-columns-${Utils.numberToWord(columns)}` : null, {
            'grid-row-horizontal-center': horizontalAlign === 'center',
            'grid-row-horizontal-left': horizontalAlign === 'left',
            'grid-row-horizontal-right': horizontalAlign === 'right',
            'grid-row-stressed': stressed,
            'grid-row-text-align-center': textAlign === 'center',
            'grid-row-text-align-left': textAlign === 'left',
            'grid-row-text-align-right': textAlign === 'right',
            'grid-row-vertical-bottom': verticalAlign === 'bottom',
            'grid-row-vertical-middle': verticalAlign === 'middle',
            'grid-row-vertical-top': verticalAlign === 'top',
        },
        className,
    );

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

GridRow.propTypes = propTypes;
GridRow.defaultProps = defaultProps;

export default GridRow;
