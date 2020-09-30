import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_MODAL_CONTENT,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    id: null,
};

const useStyles = makeStyles(() => ({
    root: {},
}));

function ModalContent(props) {
    const {
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
