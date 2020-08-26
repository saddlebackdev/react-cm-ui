import React, {
    Component,
} from 'react';
import {
    isFunction,
} from 'lodash';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Typography from '../../dataDisplay/typography';
import { BEM_NAVIGATION_TAB_ROOT_CLASS } from '../../global/constants';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    classNames: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    originalKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    selected: PropTypes.bool.isRequired,
};

const defaultProps = {
    children: undefined,
    onChange: undefined,
    onClick: undefined,
};

class Tab extends Component {
    constructor(props) {
        super(props);
        this.onTabClick = this.onTabClick.bind(this);
        this.renderTab = this.renderTab.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const {
            children,
            classNames,
            selected,
        } = this.props;

        return children !== nextProps.children ||
            selected !== nextProps.selected ||
            classNames !== nextProps.classNames;
    }

    onTabClick(evt) {
        const {
            onChange,
            onClick,
            originalKey,
        } = this.props;

        if (isFunction(onClick)) {
            onClick(this.props);
        }
        if (isFunction(onChange)) {
            onChange(originalKey, evt);
        }
    }

    renderTab() {
        const {
            children,
            selected,
        } = this.props;

        const tabLabelClassNames = Classnames(
            `${BEM_NAVIGATION_TAB_ROOT_CLASS}-label`,
            { [`${BEM_NAVIGATION_TAB_ROOT_CLASS}-label-selected`]: selected },
        );

        return (
            <Typography
                variant="h4"
                className={tabLabelClassNames}
            >
                {children}
            </Typography>
        );
    }

    render() {
        const {
            classNames,
            id,
        } = this.props;

        return (
            <div
                className={classNames}
                id={id}
                onClick={this.onTabClick}
                ref={(e) => { this.tab = e; }}
                role="presentation"
            >
                {this.renderTab()}
            </div>
        );
    }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
