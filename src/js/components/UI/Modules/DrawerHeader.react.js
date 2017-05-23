'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';

import Avatar from '../../Avatar.react';
import Button from 'components/UI/Elements/Button.react';
import Divider from 'components/UI/Elements/Divider.react';
import Header from 'components/UI/Elements/Header.react';
import Icon from 'components/UI/Elements/Icon.react';

import PersonProfileAPIUtils from '../../../utils/Person/PersonProfileAPIUtils.js';

export default class DrawerHeader extends React.Component {

    render() {
        const { children, closeButton, inverse, person, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'drawer-title-truncate': titleTruncate
        });

        return (
            <header className="drawer-header">
                {person ?
                    <div className="padding-left-2x">
                        <Avatar
                            image={PersonProfileAPIUtils.getPersonProfileImageUrl(person.id || 0, person.gender)}
                            style={{ height: '55px', width: '55px' }}
                        />
                    </div>
                : null}

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
    person: React.PropTypes.object,
    title: React.PropTypes.string,
    titleTruncate: React.PropTypes.bool
};
