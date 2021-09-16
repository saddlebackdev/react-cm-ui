import PropTypes from 'prop-types';
import React from 'react';
import List from './list';
import ListDeprecated from './listDeprecated';
import ListItemDeprecated from './listItemDeprecated';

const propTypes = {
    children: PropTypes.node,
    /**
     * Dependent on the designVersion number, the component can either use our old Button component
     * or the new Button component.
     */
    designVersion: PropTypes.number,
};

const defaultProps = {
    children: undefined,
    designVersion: 1,
};

// eslint-disable-next-line prefer-arrow-callback
const ListBase = React.forwardRef(function ListBase(props, ref) {
    const {
        children,
        designVersion,
        ...otherProps
    } = props;

    if (designVersion === 2) {
        return (
            <List
                ref={ref}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </List>
        );
    }

    return (
        <ListDeprecated
            ref={ref}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </ListDeprecated>
    );
});

ListBase.Item = ListItemDeprecated;

ListBase.propTypes = propTypes;
ListBase.defaultProps = defaultProps;

export default ListBase;
