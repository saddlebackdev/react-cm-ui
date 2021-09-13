import MUIList from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.node,
    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
     * the list and list items.
     * The prop is available to descendant components as the `dense` context.
     */
    dense: PropTypes.bool,
    /**
     * If `true`, vertical padding will be removed from the list.
     */
    disablePadding: PropTypes.bool,
    /**
     * The content of the subheader, normally `ListSubheader`.
     */
    subheader: PropTypes.node,
};

const defaultProps = {
    children: undefined,
    className: undefined,
    component: undefined,
    classes: undefined,
    dense: false,
    disablePadding: false,
    subheader: undefined,
};

function List(props) {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <MUIList
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </MUIList>
    );
}


List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
