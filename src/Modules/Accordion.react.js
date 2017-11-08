'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Elements/Icon.react';

import DOMUtils from '../utils/DOMUtils.js';

class AccordionItem extends Component {
    constructor(props) {
        super(props);

        this.state = { isSelected: props.isSelected };

        this._onAnimationComplete = this._onAnimationComplete.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isSelected !== nextProps.isSelected) {
            this.setState({ isSelected: nextProps.isSelected });
        }
    }

    render() {
        const { children, className, style, subAccordion, summary } = this.props;
        const { isSelected } = this.state;
        const containerClasses = ClassNames('accordion-item', className, {
            'accordion-item-is-active': isSelected,
            'accordion-item-sub-accordion': subAccordion,
            'accordion-item-no-summary': summary === false
        });

        return (
            <div className={containerClasses} onClick={this._onClick} style={style}>
                {children}
            </div>
        );
    }

    _animationProps(el) {
        let a;
        let animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        }

        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }

    _onAnimationComplete() {
        const itemElement = ReactDOM.findDOMNode(this);
        const animationEvent = this._animationProps(itemElement);

        itemElement.removeEventListener(animationEvent, this._onAnimationComplete);

        const { scrollContainer, scrollContainerMarginHeight } = this.props;
        const scrollContainerEl = _.isString(scrollContainer) ? ReactDOM.findDOMNode(document.querySelector(scrollContainer)) : _.isObject(scrollContainer) ? scrollContainer : null;
        const containerHeight = scrollContainerEl ? scrollContainerEl.offsetHeight - (scrollContainerMarginHeight || 0) : window.innerHeight;
        const scrollPosition = DOMUtils.scrollPos(scrollContainerEl);
        const containerBottom = containerHeight + scrollPosition;
        const itemElHeight = itemElement.offsetHeight;
        const itemElTopYPosition = itemElement.offsetTop;
        const itemElBottomYPosition = itemElTopYPosition + itemElHeight;
        const belowFold = itemElBottomYPosition - (containerHeight + scrollPosition);

        if (containerBottom < itemElBottomYPosition) {
            DOMUtils.scrollTo(scrollPosition + belowFold, null, scrollContainerEl);
        }
    }

    _onClick() {
        const { isSelected } = this.state;

        if (!isSelected) {
            const itemElement = ReactDOM.findDOMNode(this);
            const animationEvent = this._animationProps(itemElement);

            itemElement.addEventListener(animationEvent, this._onAnimationComplete);
        }
    }
}

AccordionItem.propTypes = {
    className: PropTypes.string,
    isSelected: PropTypes.bool,
    scrollContainer: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    scrollContainerMarginHeight: PropTypes.number,
    style: PropTypes.object,
    subAccordion: PropTypes.bool,
    summary: PropTypes.bool
};

class AccordionSummary extends Component {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        return (
            <div className="accordion-item-summary" onClick={this._onClick}>
                {this.props.children}
            </div>
        );
    }

    _onClick() {
        this.props.onClick();
    }
}

AccordionSummary.propTypes = {
    onClick: PropTypes.func
};

class AccordionCheckbox extends Component {

    render() {
        return (
            <div
                className="accordion-checkbox"
                style={{
                    flex: '0 1 auto',
                    minWidth: '44px'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

AccordionCheckbox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

class AccordionContent extends Component {

    render() {
        return (
            <div className="accordion-item-content" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

AccordionContent.propTypes = {
    style: PropTypes.object
};

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
        const { basic, children, className, exclusive, inverse, scrollContainer, scrollContainerMarginHeight, style } = this.props;
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

            if (title) {
                return (
                    <AccordionItem
                        isSelected={isSelected}
                        key={`accordion-item-${index}`}
                        scrollContainer={scrollContainer}
                        scrollContainerMarginHeight={scrollContainerMarginHeight}
                        style={style}
                        subAccordion={subAccordion}
                        summary={summary}
                    >
                        <div
                            className="accordion-item-title"
                            onClick={this._onSummaryClick.bind(this, index)}
                        >
                            <span className="copy">{title}{subTitle ? <span className="padding-left">{subTitle}</span> : null}</span>
                            <Icon compact={true} inverse={inverse} rotate={isSelected ? 135 : 0} type="plus" />
                        </div>

                        <AccordionContent>
                            {children}
                        </AccordionContent>
                    </AccordionItem>
                );
            } else if (summary === false) {
                return (
                    <AccordionItem
                        isSelected={isSelected}
                        key={`accordion-item-${index}`}
                        scrollContainer={scrollContainer}
                        scrollContainerMarginHeight={scrollContainerMarginHeight}
                        style={style}
                        subAccordion={subAccordion}
                        summary={summary}
                    >
                        <AccordionContent>
                            {children}
                        </AccordionContent>
                    </AccordionItem>
                );
            } else {
                return (
                    <AccordionItem
                        isSelected={isSelected}
                        key={`accordion-item-${index}`}
                        scrollContainer={scrollContainer}
                        scrollContainerMarginHeight={scrollContainerMarginHeight}
                        style={style}
                        subAccordion={subAccordion}
                        summary={summary}
                    >
                        {React.Children.map(children, (c, i) => {
                            if (i === 0) {
                                return (
                                    <AccordionSummary onClick={this._onSummaryClick.bind(this, index, c.props.onClick)}>
                                        {c.props.children}
                                    </AccordionSummary>
                                );
                            } else {
                                return c;
                            }
                        })}
                    </AccordionItem>
                );
            }
        });

        return (
            <div className={containerClasses} style={style}>
                {items}
            </div>
        );
    }

    _onSummaryClick(index, onClick) {
        const { exclusive } = this.props;
        const { selected } = this.state;
        let newSelected;

        if (exclusive === false) {
            let isSelected = _.includes(selected, index);

            newSelected = isSelected ? _.pull(selected, index) : _.union(selected, [ index ]);
        } else {
            newSelected = selected === index ? -1 : index;
        }

        if (_.isFunction(onClick)) {
            onClick(newSelected);
        }

        this.setState({ selected: newSelected });
    }

}

Accordion.Content = AccordionContent;
Accordion.Checkbox = AccordionCheckbox;
Accordion.Item = AccordionItem;
Accordion.Summary = AccordionSummary;

Accordion.propTypes = {
    basic: PropTypes.bool,
    className: PropTypes.string,
    exclusive: PropTypes.bool,
    inverse: PropTypes.bool,
    scrollContainer: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    scrollContainerMarginHeight: PropTypes.number,
    selected: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number
    ]),
    style: PropTypes.object
};

export default Accordion;
