import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import InfoBar from '../views/infoBar.js';
import DetailsColumnContainer from './detailsColumnContainer.js';
import domUtils from '../utils/domUtils.js';

const columnPropTypesShape = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    divide: PropTypes.bool,
    expandedButton: PropTypes.bool,
    expandedButtonId: PropTypes.string,
    flexBasis: PropTypes.string,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    fontSize: PropTypes.oneOf(['large', 'medium', 'small']),
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    header: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
});
const columnPropsPropTypesShape = PropTypes.shape({
    horizontalSpacing: PropTypes.number,
});

class Details extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isExpanded: false,
        };

        this.expandableContainerHeight = null;
        this.previousExpandableContainerHeight = null;

        this.onExpandButtonToggle = this.onExpandButtonToggle.bind(this);
        this.onExpandTransitionComplete = this.onExpandTransitionComplete.bind(this);
        this.setColumnContainerHeight = this.setColumnContainerHeight.bind(this);
    }

    componentDidMount() {
        this.setExpandableContainerHeight();
    }

    componentDidUpdate(prevProps, prevState) {
        const { isExpanded } = this.state;
        const { isExpanded: prevIsExpanded } = prevState;

        if (prevIsExpanded !== isExpanded) {
            this.setExpandableContainerHeight();
        }
    }

    onExpandButtonToggle() {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded,
        }));
    }

    onExpandTransitionComplete() {
        const { moduleType } = this.props;
        const exandableContainer = ReactDOM.findDOMNode(this.exandableContainerRef); // eslint-disable-line react/no-find-dom-node, max-len

        exandableContainer.classList.remove(
            `${moduleType}_details--exapndable_columns_container-contracted-active`,
            `${moduleType}_details--exapndable_columns_container-expanded-active`,
        );
        exandableContainer.removeEventListener(
            domUtils.cssTransitionType(exandableContainer),
            this.onExpandTransitionComplete,
        );
    }

    setColumnContainerHeight(height) {
        console.log('setColumnContainerHeight', height);
        if (!this.expandableContainerHeight || this.expandableContainerHeight > height) {
            this.expandableContainerHeight = height;
        }
    }

    setExpandableContainerHeight() {
        const { expandableColumns, moduleType } = this.props;
        const { isExpanded } = this.state;
        const hasExpandableColumns = !_.isEmpty(expandableColumns);

        if (hasExpandableColumns && this.exandableContainerRef) {
            const exandableContainer = ReactDOM.findDOMNode(this.exandableContainerRef); // eslint-disable-line react/no-find-dom-node, max-len

            exandableContainer.style.height = `${isExpanded ? this.expandableContainerHeight : 0}px`;
            exandableContainer.classList.add(
                `${moduleType}_details--exapndable_columns_container-${isExpanded ? 'expanded' : 'contracted'}-active`,
            );
            exandableContainer.addEventListener(
                domUtils.cssTransitionType(exandableContainer),
                this.onExpandTransitionComplete,
            );
        }
    }

    render() {
        const {
            bleed,
            className,
            color,
            columnProps,
            columns,
            data,
            expandableColumns,
            style,
            moduleType,
        } = this.props;
        const { isExpanded } = this.state;
        const hasExpandableColumns = !_.isEmpty(expandableColumns);
        const containerClasses = ClassNames('ui', `${moduleType}_details`, className, {
            'page--details-bleed': bleed && moduleType === 'page',
            'drawer--details-bleed': bleed && moduleType === 'drawer',
        });
        const shouldShowExpanded = isExpanded;
        const expandableColumnsContainerName = `${moduleType}_details--exapndable_columns_container`;
        const expandedContainerClassName = shouldShowExpanded ?
            `${expandableColumnsContainerName}-expanded` :
            null;
        const contractedContainerClassName = !shouldShowExpanded ?
            `${expandableColumnsContainerName}-contracted` :
            null;
        const expandableContainerClasses = ClassNames(
            contractedContainerClassName,
            expandableColumnsContainerName,
            expandedContainerClassName,
        );
        let detailsColumnKeyNum = 1;
        let detailsColumnKeyNumExpanded = 1;
        let horizontalSpacing;

        if (columnProps) {
            horizontalSpacing = columnProps.horizontalSpacing;
        }

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <InfoBar color={color}>
                    <div
                        className={`${moduleType}_details--columns_container`}
                        style={{
                            marginLeft: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                            marginRight: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                        }}
                    >
                        {_.map(columns, (column) => {
                            detailsColumnKeyNum += 1;

                            return (
                                <DetailsColumnContainer
                                    column={column}
                                    columnProps={columnProps}
                                    data={data}
                                    isExpanded={isExpanded}
                                    key={`${moduleType}DetailsColumn-${detailsColumnKeyNum}`}
                                    moduleType={moduleType}
                                    onExpandButtonToggle={this.onExpandButtonToggle}
                                />
                            );
                        })}
                    </div>

                    {hasExpandableColumns && (
                        <div
                            className={expandableContainerClasses}
                            ref={(ref) => { this.exandableContainerRef = ref; }}
                        >
                            {_.map(expandableColumns, (column) => {
                                detailsColumnKeyNumExpanded += 1;

                                return (
                                    <DetailsColumnContainer
                                        column={column}
                                        columnProps={columnProps}
                                        data={data}
                                        key={`${moduleType}DetailsColumn-${detailsColumnKeyNumExpanded}`}
                                        moduleType={moduleType}
                                        setColumnContainerHeight={this.setColumnContainerHeight}
                                    />
                                );
                            })}
                        </div>
                    )}
                </InfoBar>
            </div>
        );
    }
}

Details.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    columnProps: columnPropsPropTypesShape,
    columns: PropTypes.arrayOf(columnPropTypesShape).isRequired,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    expandableColumns: PropTypes.arrayOf(columnPropTypesShape),
    moduleType: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Details.defaultProps = {
    bleed: true,
    className: undefined,
    color: undefined,
    columnProps: undefined,
    expandableColumns: undefined,
    moduleType: undefined,
    style: {},
};

export default Details;
