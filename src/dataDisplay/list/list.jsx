import MUIList from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import {
    LIST_DEPRECATED_DEFAULT_PROPS,
    LIST_DEPRECATED_PROP_TYPES,
} from './constants';
import ListDeprecated from './listDeprecated';

const propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({}).isRequired,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
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
    version: PropTypes.number,
    ...LIST_DEPRECATED_PROP_TYPES,
};

const defaultProps = {
    version: 1,
    ...LIST_DEPRECATED_DEFAULT_PROPS,
};

function List(props) {
    const {
        children,
        version,
        ...otherProps
    } = props;

    if (version === 2) {
        return (
            <MUIList
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </MUIList>
        );
    }

    return (
        <ListDeprecated
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </ListDeprecated>
    );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
