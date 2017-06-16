'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';

import Button from 'Elements/Button.react';
import Divider from 'Elements/Divider.react';
import Header from 'Elements/Header.react';
import Icon from 'Elements/Icon.react';

export default class DrawerHeader extends React.Component {

    render() {
        const { children, closeButton, inverse, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'drawer-title-truncate': titleTruncate
        });

        return (
            <header className="drawer-header">
                <Header as="h2" className={titleClass} title={title}>{title}</Header>

                <div className="drawer-close-button-container">
                    {!closeButton || _.isString(closeButton) ? (
                        <Button
                            className="drawer-close-button"
                            color={inverse ? 'transparent' : 'alternate'}
                            onClick={this._onCloseClick.bind(this)}
                            icon={true}
                        >
                            <Icon inverse={true} type={_.isString(closeButton) ? closeButton : 'times'} />
                        </Button>
                    ) : _.isObject(closeButton) ? closeButton : null}
                </div>

                {children ? (
                    <div className="drawer-header-children">{children}</div>
                ) : (
                    <Divider />
                )}
            </header>
        );
    }

    _onCloseClick() {
        this.props.onClose();
    }

}

DrawerHeader.propTypes = {
    closeButton: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    inverse: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    title: React.PropTypes.string,
    titleTruncate: React.PropTypes.bool
};
