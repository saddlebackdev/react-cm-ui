import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    getContent: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    id: PropTypes.string.isRequired,
    isHidden: PropTypes.bool,
    classNames: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
};

const defaultProps = {
    getContent: undefined,
    children: undefined,
    isHidden: false,
};

class TabPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedAtLeastOnce: !props.isHidden,
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            renderedAtLeastOnce: state.renderedAtLeastOnce || !props.isHidden,
        };
    }

    shouldComponentUpdate(nextProps) {
        const {
            children,
            classNames,
            getContent,
            isHidden,
        } = this.props;

        return (
            getContent !== nextProps.getContent ||
            children !== nextProps.children ||
            classNames !== nextProps.classNames ||
            isHidden !== nextProps.isHidden
        );
    }

    render() {
        const {
            children,
            classNames,
            getContent,
            id,
            isHidden,
            tabId,
        } = this.props;

        const {
            renderedAtLeastOnce,
        } = this.state;

        return (
            <div className={classNames} role="tabpanel" id={id} aria-labelledby={tabId} aria-hidden={isHidden}>
                {getContent && renderedAtLeastOnce && getContent()}
                {!getContent && children}
            </div>
        );
    }
}

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;
