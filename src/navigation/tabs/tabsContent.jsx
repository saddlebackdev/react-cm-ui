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
     * Main function to get the content, is passed from the <Tabs /> items objects.
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

function TabsContent(props) {
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

TabsContent.propTypes = propTypes;
TabsContent.defaultProps = defaultProps;

export default TabsContent;
