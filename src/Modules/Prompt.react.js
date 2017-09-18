'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component } from 'react';

class Prompt extends Component {

    constructor(props) {
        super(props);

        this.state = { show: props.show || false };

        this._onClick = this._onClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.show !== nextProps.show) {
            this.setState({ show: nextProps.show });
        }
    }

    render() {
        const { children, className, inline, message, style } = this.props;
        const { show } = this.state;
        const containerClasses = ClassNames('ui', 'prompt', className, {
            'promp-show': show,
            'prompt-inline': inline
        });

        return (
            <div clasName={containerClasses} onClick={this._onClick}>
                {this._renderAction()}

                <div>
                    <div>{message || 'Are you sure?'}</div>
                    <div>Yes</div>
                    <div>No</div>
                </div>
            </div>
        );
    }

    _onClick(test) {
        console.log('testing argument:', test);
        const { onClick } = this.props;
        const { show } = this.state;

        if (!_.isUndefined(onClick)) {
            onClick();
        } else {
            this.setState({ show: !show });
        }
    }

    _renderAction() {
        const { children } = this.props;

        if (children) {
            return React.cloneElement(children, {
                className: 'promp-action',
                onClick: this.onClickRef
            });
        }
    }

}

Prompt.propTypes = {
    className: React.PropTypes.string,
    inline: React.PropTypes.bool,
    message: React.PropTypes.string,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object
};

export default Prompt;
