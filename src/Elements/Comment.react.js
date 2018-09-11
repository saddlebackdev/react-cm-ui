'use strict';

import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Image from './Image.react';

class Comment extends Component {
    render() {
        const { avatarSrc, children, className, commentDetailsPosition, name, style, time } = this.props;
        const containerClasses = ClassNames('ui', 'comment', className);

        console.log('name', name);
        console.log('avatarSrc', avatarSrc);
        console.log('time', time);
        return (
            <div className={containerClasses} style={style}>
                {name && time || avatarSrc && time ? (
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: commentDetailsPosition === 'right' ? 'row-reverse' : 'row',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <div style={{ flex: 'none' }}>
                            <Image avatar name={name} size={44} src={avatarSrc} />
                        </div>

                        <div
                            style={{
                                flex: '1 0 auto',
                                margin: commentDetailsPosition === 'right' ? '0 11px 0 0' : '0 0 0 11px',
                                textAlign: commentDetailsPosition === 'right' ? 'right' : 'left'
                            }}
                        >
                            <span className="comment-name">{name}</span>
                            <span className="comment-time">{this._renderTime()}</span>
                        </div>
                    </div>
                ) : null}

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
    commentDetailsPosition: PropTypes.oneOf([ 'left', 'right' ]),
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    time: PropTypes.number.isRequired
};

export default Comment;
