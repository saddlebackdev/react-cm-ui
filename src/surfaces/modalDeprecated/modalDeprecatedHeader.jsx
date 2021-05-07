import {
    isFunction,
    isNil,
    isObject,
    isString,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../inputs/button';
import Header from '../../dataDisplay/header';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    children: PropTypes.node,
    closeButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    style: PropTypes.shape({}),
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

const defaultProps = {
    children: null,
    closeButton: null,
    inverse: false,
    onClose: null,
    style: null,
    title: null,
    titleTruncate: false,
};

class ModalHeader extends React.Component {
    constructor() {
        super();

        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick() {
        const {
            onClose,
        } = this.props;

        if (isFunction(onClose)) {
            onClose();
        }
    }

    render() {
        const {
            children,
            closeButton,
            inverse,
            style,
            title,
            titleTruncate,
        } = this.props;

        const titleClass = ClassNames('title', {
            'modal-title-truncate': titleTruncate,
        });

        return (
            <header
                className="modal-header"
                style={style}
            >
                <Header
                    as="h3"
                    className={titleClass}
                    title={title}
                    weight="bold"
                >
                    {title}
                </Header>

                <div className="modal-close-button-container">
                    {(isNil(closeButton) || isString(closeButton)) && (
                        <Button
                            className="modal-close-button"
                            color={inverse ? 'transparent' : 'alternate'}
                            onClick={this.onCloseClick}
                            icon
                        >
                            <Icon
                                inverse
                                type={isString(closeButton) ? closeButton : 'times'}
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
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
