'use strict';

import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Image from './Image.react';

class Comment extends Component {
    render() {
        const { avatarSrc, children, className, name, style } = this.props;
        const containerClasses = ClassNames('ui', 'comment', className);

        return (
            <div className={containerClasses}>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ flex: 'none' }}>
                        <Image avatar size={44} src={avatarSrc} />
                    </div>

                    <div style={{ flex: '1 0 auto', marginLeft: '11px' }}>
                        <span className="comment-name">{name}</span>
                        <span className="comment-time">{this._renderTime()}</span>
                    </div>
                </div>

                <div className="comment-bubble">
                    {children}
                </div>
            </div>
        );
    }

    _renderTime() {
        const { time } = this.props;

        return moment.unix(time).utc().calendar(null, {
            sameDay: '[Today] - h:mm a',
            nextWeek: 'MMMM D, YYYY - h:mm a',
            nextDay: 'MMMM D, YYYY - h:mm a',
            lastDay: '[Yesterday] - h:mm a',
            lastWeek: 'MMMM D, YYYY - h:mm a',
            sameElse: 'MMMM D, YYYY - h:mm a'
        });
    }
}

Comment.propTypes = {
    avatarSrc: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    time: PropTypes.number.isRequired
};

export default Comment;
