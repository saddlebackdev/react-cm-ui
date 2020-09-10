import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Children to be rendered when the getContent function is undefined/null.
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    /**
     * Class names to potentially override styling.
     */
    classNames: PropTypes.string.isRequired,
    /**
     * Main function to get the content, is passed from the <SectionalTabs /> items objects.
     * It could return a string, an object or an array.
     */
    getContent: PropTypes.func,
    /**
     * Tab content component identifier.
     */
    id: PropTypes.string.isRequired,
};

const defaultProps = {
    children: undefined,
    getContent: undefined,
};

function SectionalTabContent(props) {
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

SectionalTabContent.propTypes = propTypes;
SectionalTabContent.defaultProps = defaultProps;

export default SectionalTabContent;
