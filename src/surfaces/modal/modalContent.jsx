import { camelCase } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_MODAL_CONTENT,
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
        'stretch',
    ]),
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    alignItems: 'flex-start',
    children: null,
    classes: null,
    className: null,
    id: null,
};

const useStyles = makeStyles(() => ({
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
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > h2': {
            margin: 0,
            '& + h6': {
                marginTop: 8,
            },
            '& + p': {
                marginTop: 22,
            },
        },
        '& > p': {
            margin: [[22, 0]],
        },
        '& > .icon': {
            '& + h2': {
                marginTop: 18,
            },
        },
    },
}));

function ModalContent(props) {
    const {
        alignItems,
        children,
        className,
        id,
    } = props;

    const classes = useStyles(props);

    return (
        <div
            className={ClassNames(
                BEM_MODAL_CONTENT,
                classes.root,
                className,
                {

                    [classes[`alignItems-${camelCase(alignItems)}`]]: alignItems !== 'flex-start',
                },
            )}
            id={id}
        >
            {children}
        </div>
    );
}

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
