import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Children to be rendered when the getContent function is undefined/null.
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    /**
     * Aditional classes passed from the parent <TabsTabs /> component to
     * override the label styling.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        withContent: PropTypes.string,
    }),
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
    /**
     * Renders the content set inside the item object under the tabs panel
     */
    withContent: PropTypes.bool,
};

const defaultProps = {
    children: undefined,
    classes: null,
    getContent: undefined,
    withContent: false,
};

const useStyles = makeStyles(({
    palette,
    shape,
    spacing,
}) => ({
    root: {
        padding: spacing(1),
        borderTop: `1px solid ${palette.border.secondary}`,
        '&$withContent': {
            backgroundColor: palette.background.primary,
            borderRadius: [[0, shape.borderRadius.main, shape.borderRadius.main]],
            boxShadow: `inset 0 0 0 1px ${palette.border.secondary}`,
            borderTop: 0,
            padding: spacing(2),
            position: 'relative',
            zIndex: 4,
            '& >': {
                '&:first-child': {
                    marginTop: 0,
                },
                '&:last-child': {
                    marginBottom: 0,
                },
            },
        },
    },
    withContent: {},
}));

function TabsContent(props) {
    const {
        children,
        classNames,
        getContent,
        id,
        withContent,
    } = props;

    const classes = useStyles(props);

    let content = getContent && getContent();

    const shouldRenderChildren = !getContent && children;

    if (shouldRenderChildren) {
        content = children;
    }

    return (
        <div
            className={ClassNames(
                classes.root,
                classNames,
                {
                    [classes.withContent]: withContent,
                },
            )}
            role="tabpanel"
            id={id}
        >
            {content}
        </div>
    );
}

TabsContent.propTypes = propTypes;
TabsContent.defaultProps = defaultProps;

export default TabsContent;
