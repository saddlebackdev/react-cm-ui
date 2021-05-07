import { camelCase } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_MODAL_ACTIONS,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems: PropTypes.oneOf([
        'baseline',
        'center',
        'flex-end',
        'flex-start',
    ]),
    /**
     * The content of the ModalActions
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to ModalActions.
     */
    classes: PropTypes.shape({
        margin: PropTypes.string,
        root: PropTypes.string,
    }),
    /**
     * Assign additional class names to ModalActions.
     */
    className: PropTypes.string,
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     */
    direction: PropTypes.oneOf([
        'column-reverse',
        'column',
        'row-reverse',
        'row',
    ]),
    /**
     * The `id` of the ModalActions.
     */
    id: PropTypes.string,
};

const defaultProps = {
    alignItems: 'flex-start',
    children: null,
    classes: null,
    className: null,
    direction: 'row',
    id: null,
};

const useStyles = makeStyles((theme) => ({
    'alignItems-center': {
        alignItems: 'center',
    },
    'alignItems-flexStart': {
        alignItems: 'flex-start',
    },
    'alignItems-flexEnd': {
        alignItems: 'flex-end',
    },
    'alignItems-baseline': {
        alignItems: 'baseline',
    },
    'direction-column': {
        flexDirection: 'column',
    },
    'direction-columnReverse': {
        flexDirection: 'column-reverse',
    },
    'direction-rowReverse': {
        flexDirection: 'row-reverse',
    },
    'direction-row': {
        flexDirection: 'row',
    },
    margin: {},
    root: {
        display: 'flex',
        margin: [[theme.spacing(3), 0, 0]],
    },
}));

function ModalActions(props) {
    const {
        alignItems,
        children,
        className,
        direction,
        id,
    } = props;

    const classes = useStyles(props);

    return (
        <div
            className={ClassNames(
                BEM_MODAL_ACTIONS,
                classes.root,
                className,
                classes.margin,
                classes[`alignItems-${camelCase(alignItems)}`],
                classes[`direction-${camelCase(direction)}`],
            )}
            id={id}
        >
            {children}
        </div>
    );
}

ModalActions.propTypes = propTypes;
ModalActions.defaultProps = defaultProps;

export default ModalActions;
