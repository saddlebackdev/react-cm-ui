import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_MODAL_ACTIONS,
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(5),
    },
}));

function ModalActions(props) {
    const {
        children,
        className,
        id,
    } = props;

    const classes = useStyles(props);

    return (
        <div
            className={ClassNames(
                BEM_MODAL_ACTIONS,
                classes.root,
                className,
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
