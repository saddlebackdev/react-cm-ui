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
    /**
     * Add a `data-testid` attribute to the Modal's Close Button.
     * Used for DOM Testing.
     * See https://testing-library.com/docs/queries/bytestid/.
     */
    closeButtonDataTestId: PropTypes.string,
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    style: PropTypes.shape({}),
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

const defaultProps = {
    children: null,
    closeButton: null,
    closeButtonDataTestId: undefined,
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
            closeButtonDataTestId,
            inverse,
            style,
            title,
            titleTruncate,
        } = this.props;

        const titleClass = ClassNames('title', {
            'modal-title-truncate': titleTruncate,
        });

        const isCloseButtonNullish = isNil(closeButton);
        const isCloseButtonAnObject = isObject(closeButton);
        const isCloseButtonAString = isString(closeButton);

        // If `closeButton` prop is nullish (`null`/`undefined`) then we want to render default Close Button
        // HOWEVER if `closeButton` prop is explicitly Boolean `false` we will respect user's wishes and not render a Close Button
        const shouldRenderCloseButton = isCloseButtonNullish || !!closeButton;

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
                    {(shouldRenderCloseButton && !isCloseButtonAnObject) && (
                        <Button
                            className="modal-close-button"
                            color={inverse ? 'transparent' : 'alternate'}
                            data-testid={closeButtonDataTestId}
                            onClick={this.onCloseClick}
                            icon
                        >
                            <Icon
                                inverse
                                title={false}
                                type={isCloseButtonAString ? closeButton : 'times'}
                            />
                        </Button>
                    )}

                    {isCloseButtonAnObject && closeButton}
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
