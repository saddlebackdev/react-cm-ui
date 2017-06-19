'use strict';

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

        this.state = { selected: props.selected || -1 };
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.selected, nextProps.selected)) {
            this.setState({ selected: nextProps.selected });
        }
    }

    render() {
        const { basic, children, className, inverse, style } = this.props;
        const containerClasses = ClassNames('ui', 'accordion', className, {
            'accordion-basic': basic,
            'accordion-inverse': inverse
        });
        const convertChildren = _.isArray(children) ? children : [ children ];
        let items = _.map(convertChildren, (child, index) => {
            const { children, style, subTitle, title } = child.props;
            const isSelected = this.state.selected === index;
            const isActiveClass = ClassNames('accordion-item', {
                'accordion-item-is-active': isSelected
            });

            return (
                <div
                    className={isActiveClass}
                    key={'accordion-item-' + index}
                    style={style}
                >
                    {title ? [
                        <div
                            className="accordion-item-title"
                            key={`accordion-item-title-${index}`}
                            onClick={this._onItemClick.bind(this, index)}
                        >
                            <span className="copy">{title}{subTitle ? <span className="padding-left">{subTitle}</span> : null}</span>
                            <Icon compact={true} inverse={inverse} rotate={isSelected ? 135 : 0} type="plus" />
                        </div>,
                        <div className="accordion-item-content" key={`accordion-item-content-${index}`}>
                            {children}
                        </div>
                    ] : children.length >= 3 ? (
                        <div
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            {children[0]}

                            <div style={{ flex: '1 1 auto' }}>
                                {React.cloneElement(children[1], {
                                    onClick: this._onItemClick.bind(this, index),
                                })}

                                {children[2]}
                            </div>
                        </div>
                    ) : (
                        <div>
                            {React.cloneElement(children[0], {
                                onClick: this._onItemClick.bind(this, index),
                            })}

                            {children[1]}
                        </div>
                    )}
                </div>
            );z
        });

        return (
            <div className={containerClasses} style={style}>
                {items}
            </div>
        );
    }

    _onItemClick(index) {
        this.setState({ selected: this.state.selected === index ? -1 : index });
    }

}

Accordion.Content = AccordionContent;
Accordion.Checkbox = AccordionCheckbox;
Accordion.Item = AccordionItem;
Accordion.Summary = AccordionSummary;

Accordion.propTypes = {
    basic: React.PropTypes.bool,
    className: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    selected: React.PropTypes.number,
    style: React.PropTypes.object
};

export default Accordion;
