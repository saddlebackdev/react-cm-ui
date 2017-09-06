'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component } from 'react';

import AccordionContent from './AccordionContent.react';
import AccordionCheckbox from './AccordionCheckbox.react';
import AccordionItem from './AccordionItem.react';
import AccordionSummary from './AccordionSummary.react';
import Icon from '../Elements/Icon.react';

class Accordion extends Component {

    constructor(props) {
        super(props);

        let newSelected;

        if (props.exclusive === false) {
            newSelected = props.selected || [];
        } else {
            newSelected = props.selected || -1;
        }

        this.state = { selected: newSelected };
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.selected, nextProps.selected)) {
            let newSelected;

            if (nextProps.exclusive === false) {
                newSelected = nextProps.selected || [];
            } else {
                newSelected = nextProps.selected || -1;
            }

            this.setState({ selected: newSelected });
        }
    }

    render() {
        const { basic, children, className, exclusive, inverse, style } = this.props;
        const { selected } = this.state;
        const containerClasses = ClassNames('ui', 'accordion', className, {
            'accordion-basic': basic,
            'accordion-inverse': inverse,
            'accordion-inclusive': exclusive === false
        });
        const convertChildren = _.isArray(children) ? children : [ children ];
        let items = _.map(convertChildren, (child, index) => {
            const { children, className, style, subTitle, subAccordion, summary, title } = child.props;
            const isSelected = exclusive === false ? _.includes(selected, index) : selected === index;
            const isActiveClass = ClassNames('accordion-item', className, {
                'accordion-item-is-active': isSelected,
                'accordion-item-sub-accordion': subAccordion,
                'accordion-item-no-summary': summary === false
            });

            if (title) {
                return (
                    <div className={isActiveClass} key={`accordion-item-${index}`} style={style}>
                        <div
                            className="accordion-item-title"
                            onClick={this._onItemClick.bind(this, index)}
                        >
                            <span className="copy">{title}{subTitle ? <span className="padding-left">{subTitle}</span> : null}</span>
                            <Icon compact={true} inverse={inverse} rotate={isSelected ? 135 : 0} type="plus" />
                        </div>

                        <div className="accordion-item-content">
                            {children}
                        </div>
                    </div>
                );
            } else if (summary === false) {
                return (
                    <div className={isActiveClass} key={`accordion-item-${index}`} style={style}>
                        <div className="accordion-item-content">
                            {children}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className={isActiveClass} key={`accordion-item-${index}`} style={style}>
                        {React.cloneElement(children[0], {
                            onClick: this._onItemClick.bind(this, index),
                        })}

                        {children[1]}
                    </div>
                );
            }
        });

        return (
            <div className={containerClasses} style={style}>
                {items}
            </div>
        );
    }

    _onItemClick(index) {
        const { selected } = this.state;
        let newSelected;

        if (this.props.exclusive === false) {
            let isSelected = _.includes(selected, index);

            newSelected = isSelected ? _.pull(selected, index) : _.union(selected, [ index ]);
        } else {
            newSelected = selected === index ? -1 : index;
        }

        this.setState({ selected: newSelected });
    }

}

Accordion.Content = AccordionContent;
Accordion.Checkbox = AccordionCheckbox;
Accordion.Item = AccordionItem;
Accordion.Summary = AccordionSummary;

Accordion.propTypes = {
    basic: React.PropTypes.bool,
    className: React.PropTypes.string,
    exclusive: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    selected: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.number
    ]),
    style: React.PropTypes.object
};

export default Accordion;
