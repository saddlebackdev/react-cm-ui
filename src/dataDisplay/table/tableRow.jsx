import {
    isFunction,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Utils from '../../utils/utils';
import { withStyles } from '../../styles';
import useStyles from './tableStyles';

const propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    classes: PropTypes.shape({
        tableRow: PropTypes.string,
    }),
    className: PropTypes.string,
    /**
     * A TableRow can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    draggable: PropTypes.bool,
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    id: PropTypes.string,
    onClick: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    selected: PropTypes.bool,
    style: PropTypes.shape({}),
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
};

const defaultProps = {
    active: false,
    classes: {},
    className: null,
    disable: false,
    disabled: false,
    draggable: false,
    fontSize: null,
    id: null,
    onClick: null,
    onDragEnd: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    selected: false,
    style: null,
    textAlign: null,
    verticalAlign: null,
};

class TableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            selected: props.selected,
        };

        this.onClick = this.onClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
            selected: prevSelected,
        } = prevProps;

        const {
            disabled,
            selected,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('TableRow (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        if (selected !== prevSelected) {
            this.setState({ selected });
        }
    }

    onClick() {
        const { onClick } = this.props;
        const isTextHighlighted = window.getSelection().toString();
        if (!isTextHighlighted && isFunction(onClick)) {
            onClick();
        }
    }

    onDragEnd(event) {
        const { draggable, onDragEnd } = this.props;

        if (draggable) {
            this.setState({ isDragging: false });

            if (isFunction(onDragEnd)) {
                onDragEnd(event);
            }
        }
    }

    onDragOver(event) {
        const { draggable, onDragOver } = this.props;

        if (draggable) {
            if (!isFunction(onDragOver)) {
                console.warn('Table Row is draggable but onDragOver event is not handled!'); // eslint-disable-line no-console
            } else {
                onDragOver(event);

                return;
            }
        }

        event.preventDefault();
    }

    onDragStart(event) {
        const { draggable, onDragStart } = this.props;

        if (draggable) {
            this.setState({ isDragging: true });

            if (!isFunction(onDragStart)) {
                console.warn('Table Row is draggable but onDragStart event is not handled!'); // eslint-disable-line no-console
            } else {
                onDragStart(event);
            }
        }
    }

    onDrop(event) {
        const { draggable, onDrop } = this.props;

        if (draggable) {
            if (!isFunction(onDrop)) {
                console.warn('Table Row is draggable but onDrop event is not handled!'); // eslint-disable-line no-console
            } else {
                onDrop(event);
            }
        }
    }

    render() {
        const {
            active,
            children,
            className,
            classes,
            disable,
            disabled,
            draggable,
            fontSize,
            id,
            onClick,
            style,
            textAlign,
            verticalAlign,
        } = this.props;

        const { isDragging, selected } = this.state;

        const containerClasses = ClassNames(
            'table-row',
            classes.tableRow,
            {
                'table-row-active': active,
                'table-row-disabled': disable || disabled,
                'table-row-clickable': onClick,
                'table-row-font-size-large': fontSize === 'large',
                'table-row-font-size-medium': fontSize === 'medium',
                'table-row-font-size-small': fontSize === 'small',
                'table-row-font-size-xlarge': fontSize === 'xlarge',
                'table-row-font-size-xsmall': fontSize === 'xsmall',
                'table-row-font-size-xxsmall': fontSize === 'xxsmall',
                'table-row-selected': selected,
                'table-row-text-align-center': textAlign === 'center',
                'table-row-text-align-left': textAlign === 'left',
                'table-row-text-align-right': textAlign === 'right',
                'table-row-vertical-align-bottom': verticalAlign === 'bottom',
                'table-row-vertical-align-middle': verticalAlign === 'middle',
                'table-row-vertical-align-top': verticalAlign === 'top',
                'table-row-dragging': isDragging,
            },
            className,
        );

        return (
            <tr
                className={containerClasses}
                draggable={draggable}
                id={id}
                onClick={this.onClick}
                onDragEnd={draggable ? this.onDragEnd : undefined}
                onDragOver={draggable ? this.onDragOver : undefined}
                onDragStart={draggable ? this.onDragStart : undefined}
                onDrop={draggable ? this.onDrop : undefined}
                style={style}
            >
                {children}
            </tr>
        );
    }
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default withStyles(useStyles, { withTheme: true })(TableRow);
