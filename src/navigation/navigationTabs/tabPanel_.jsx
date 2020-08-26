import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    classNames: PropTypes.string.isRequired,
    getContent: PropTypes.func,
    id: PropTypes.string.isRequired,
};

const defaultProps = {
    children: undefined,
    getContent: undefined,
};

function TabPanel(props) {
    const {
        children,
        classNames,
        getContent,
        id,
    } = props;

    let content = getContent && getContent();
    const shouldRenderChildren = !getContent && children;

    if (shouldRenderChildren) {
        content = children;
    }

    return (
        <div className={classNames} role="tabpanel" id={id}>
            {content}
        </div>
    );
}

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;
