'use strict';

import _ from 'lodash';
import MediaQuery from 'react-responsive';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScrollBar from 'react-custom-scrollbars';

import Button from '../Elements/Button.react';
import Divider from '../Elements/Divider.react';
import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';

export class ModalContainer extends Component {

    constructor(props) {
        super(props);

        this._defaultDimensions = {
            height: '100%',
            maxHeight: '100%',
            maxWidth: 'none',
            minHeight: 'auto',
            minWidth: '320px',
            width: '100%'
        };

        this.state = {
            height: this._defaultDimensions.height,
            maxHeight: this._defaultDimensions.maxHeight,
            maxWidth: this._defaultDimensions.maxWidth,
            minHeight: this._defaultDimensions.minHeight,
            minWidth: this._defaultDimensions.minWidth,
            width: this._defaultDimensions.width
        };

        this._mounted = false;
        this._onResizeRef = _.debounce(() => this._onResize(), 300);
    }

    render() {
        const { closeButton, title, fluidContent } = this.props;
        const containerStyles = {
            height: this.state.height,
            maxHeight: this.state.maxHeight,
            maxWidth: this.state.maxWidth,
            minHeight: this.state.minHeight,
            minWidth: this.state.minWidth,
            width: this.state.width
        };
        const innerStyles = fluidContent ? {height: '100%'} : undefined;

        let header;
        if (!_.isEmpty(title)) {
            header = (
                <MediaQuery maxWidth={767}>
                    {matches => {
                        return (
                            <header>
                                <Header
                                    as="h2"
                                    className="title"
                                    inverse={matches ? true : false}
                                >
                                    {title}
                                </Header>

                                <div className="modal-close-button-container">
                                    {!closeButton || _.isString(closeButton) ? (
                                        <div>
                                            {matches ? (
                                                <Icon
                                                    compact={true}
                                                    inverse={true}
                                                    onClick={this._onCloseClick.bind(this)}
                                                    type="times"
                                                />
                                            ) : (
                                                <Button
                                                    className="modal-close-button"
                                                    color="alternate"
                                                    inverse={matches ? true : false}
                                                    onClick={this._onCloseClick.bind(this)}
                                                    square={true}
                                                >
                                                    <Icon
                                                        inverse={true}
                                                        type={_.isString(closeButton) ? closeButton : 'times'}
                                                    />
                                                </Button>
                                            )}
                                        </div>
                                    ) : _.isObject(closeButton) ? closeButton : null}
                                </div>

                                <Divider inverse={matches ? true : false} />
                            </header>
                        );
                    }}
                </MediaQuery>
            );
        }

        return (
            <div className="modal-container" style={containerStyles}>
                <ScrollBar autoHide={true}>
                    <div className="modal-container-inner" style={innerStyles}>
                        {header}
                        {this.props.children}
                    </div>
                </ScrollBar>
            </div>
        );
    }

    componentDidMount() {
        this._mounted = true;

        window.addEventListener('resize', this._onResizeRef);

        this._onResize();
    }

    componentWillUnmount() {
        this._mounted = false;

        window.removeEventListener('resize', this._onResizeRef);
    }

    handleClickOutside() {
        if (this.props.onClickOutside) {
            this._onCloseClick();
        }
    }

    _onCloseClick() {
        this.props.onClose();
    }

    _onResize() {
        if (this._mounted) {
            let dimensions = {};

            if (window.matchMedia('(min-width: 768px)').matches === true) {
                dimensions = {
                    height: this.props.height || '500px',
                    maxHeight: this.props.maxHeight || this._defaultDimensions.maxHeight,
                    maxWidth: this.props.maxWidth || this._defaultDimensions.maxWidth,
                    minHeight: this.props.minHeight || '305px',
                    minWidth: this.props.minWidth || this._defaultDimensions.minWidth,
                    width: this.props.width || '640px'
                };
            } else {
                dimensions = {
                    height: this._defaultDimensions.height,
                    maxHeight: this._defaultDimensions.maxHeight,
                    maxWidth: this._defaultDimensions.maxWidth,
                    minHeight: this._defaultDimensions.minHeight,
                    minWidth: this._defaultDimensions.minWidth,
                    width: this._defaultDimensions.width
                };
            }

            this.setState(dimensions);
        }
    }

}

ModalContainer.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    fluidContent: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export default onClickOutside(ModalContainer);
