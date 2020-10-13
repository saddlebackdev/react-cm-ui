import {
    isUndefined,
    isString,
    isObject,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../inputs/button';
import Header from '../../dataDisplay/header';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        closeButtonContainer: PropTypes.string,
        root: PropTypes.string,
        title: PropTypes.string,
    }),
    closeButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

const defaultProps = {
    children: null,
    classes: null,
    closeButton: null,
    inverse: null,
    onClose: null,
    title: null,
    titleTruncate: null,
};

const useStyles = makeStyles((theme) => ({
    closeButtonContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: '0 1 1px',
        height: 29,
        justifyContent: 'center',
        marginBottom: 0,
        width: 16,
        [theme.breakpoints.up('md')]: {
            height: 33,
            width: 33,
        },
    },
    root: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.contrastPrimary,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        left: 0,
        padding: `${theme.spacing(3)}px 11px`,
        position: 'fixed',
        top: 0,
        width: '100%',
        '& .ui.divider': {
            flex: '0 1 100%',
            margin: '11px 0 0',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.background.primary,
            padding: `${theme.spacing(3)}px ${theme.spacing(3)}px 22px`,
        },
    },
    title: {
        alignItems: 'flex-start',
        display: 'flex',
        flex: '1 1 1px',
        justifyContent: 'flex-start',
        margin: 0,
        paddingRight: theme.spacing(3),
        width: '100%',
    },
}));

function ModalHeader(props) {
    const {
        children,
        closeButton,
        inverse,
        onClose,
        title,
        titleTruncate,
    } = props;

    const classes = useStyles(props);

    return (
        <header className="modal-header">
            <Header
                as="h3"
                className={ClassNames(
                    classes.title,
                    {
                        'modal-title-truncate': titleTruncate,
                    },
                )}
                title={title}
                weight="bold"
            >
                {title}
            </Header>

            <div className={classes.closeButtonContainer}>
                {(isUndefined(closeButton) || isString(closeButton)) && (
                    <Button
                        className="modal-close-button"
                        color={inverse ? 'transparent' : 'alternate'}
                        onClick={onClose}
                        icon
                        title="Close"
                    >
                        <Icon
                            inverse
                            type={isString(closeButton) ? closeButton : 'close'}
                        />
                    </Button>
                )}

                {isObject(closeButton) && closeButton}
            </div>

            {children && (
                <div className="modal-header-children">
                    {children}
                </div>
            )}
        </header>
    );
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
