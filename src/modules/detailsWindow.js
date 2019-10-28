import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { columnPropTypesShape, columnPropsPropTypesShape } from './detailsWindowPropTypes.js';
import InfoBar from '../views/infoBar.js';
import DetailsWindowColumnContainer from './detailsWindowColumnContainer.js';
import domUtils from '../utils/domUtils.js';

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
        this.toggleExpandableContainer();
    }

    componentDidUpdate(prevProps) {
        const { expandableColumns } = this.props;
        const { expandableColumns: prevExpandableColumns } = prevProps;

        if (_.isEmpty(prevExpandableColumns) && !_.isEmpty(expandableColumns)) {
            this.toggleExpandableContainer();
        }
    }

    onExpandButtonToggle() {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded,
        }), () => {
            this.toggleExpandableContainer();
        });
    }

    onExpandTransitionComplete() {
        const { moduleType } = this.props;
        const bemClassName = `${moduleType}--details_window`;
        const exandableContainer = ReactDOM.findDOMNode(this.exandableContainerRef); // eslint-disable-line react/no-find-dom-node, max-len

        exandableContainer.classList.remove(
            `${bemClassName}_exapndable_columns_container-contracted-active`,
            `${bemClassName}_exapndable_columns_container-expanded-active`,
        );
        exandableContainer.removeEventListener(
            domUtils.cssTransitionType(exandableContainer),
            this.onExpandTransitionComplete,
        );
    }

    setColumnContainerHeight(height) {
        if (_.isNil(this.expandableContainerHeight) || this.expandableContainerHeight > height) {
            this.expandableContainerHeight = height;
        }
    }

    toggleExpandableContainer() {
        const { expandableColumns, moduleType } = this.props;
        const bemClassName = `${moduleType}--details_window`;
        const { isExpanded } = this.state;
        const hasExpandableColumns = !_.isEmpty(expandableColumns);

        if (hasExpandableColumns && this.exandableContainerRef) {
            const exandableContainer = ReactDOM.findDOMNode(this.exandableContainerRef); // eslint-disable-line react/no-find-dom-node, max-len

            exandableContainer.style.height = `${isExpanded ? this.expandableContainerHeight : 0}px`;
            exandableContainer.classList.add(
                `${bemClassName}_exapndable_columns_container-${isExpanded ? 'expanded' : 'contracted'}-active`,
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
        const bemClassName = `${moduleType}--details_window`;
        const containerClasses = ClassNames('ui', bemClassName, className, {
            [`${bemClassName}-bleed`]: bleed,
        });
        let detailsColumnKeyNum = 1;
        let detailsColumnKeyNumExpanded = 1;
        let horizontalSpacing;

        if (columnProps) {
            horizontalSpacing = columnProps.horizontalSpacing;
        }

        let expandableJSX;

        if (hasExpandableColumns) {
            const shouldShowExpanded = isExpanded;
            const expandableColumnsContainerName = `${bemClassName}_exapndable_columns_container`;
            const expandableContainerClasses = ClassNames(
                expandableColumnsContainerName,
                {
                    [`${expandableColumnsContainerName}-expanded`]: shouldShowExpanded,
                    [`${expandableColumnsContainerName}-contracted`]: !shouldShowExpanded,
                },
            );

            expandableJSX = (
                <div
                    className={expandableContainerClasses}
                    ref={(ref) => { this.exandableContainerRef = ref; }}
                >
                    {_.map(expandableColumns, (column) => {
                        detailsColumnKeyNumExpanded += 1;

                        return (
                            <DetailsWindowColumnContainer
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
            );
        }

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <InfoBar color={color}>
                    <div
                        className={`${bemClassName}_columns_container`}
                        style={{
                            marginLeft: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                            marginRight: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                        }}
                    >
                        {_.map(columns, (column) => {
                            detailsColumnKeyNum += 1;

                            return (
                                <DetailsWindowColumnContainer
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

                    {expandableJSX}
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
    data: PropTypes.shape({}).isRequired,
    expandableColumns: PropTypes.arrayOf(columnPropTypesShape),
    moduleType: PropTypes.string,
    style: PropTypes.shape({}),
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
