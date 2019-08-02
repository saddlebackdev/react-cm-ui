'use strict';

import './app.scss';

import { DOMUtils } from 'react-cm-ui';
import Header from './header.js';
import MediaQuery from 'react-responsive';
import Navigation from './navigation.js';
import React from 'react';

if (location.hash && location.hash[0] === '#' && location.hash[1] === '!') {
    history.pushState({}, '', location.hash.substring(2));
}

export default class CoreApp extends React.Component {
    constructor(props) {
        super(props);

        this._curScrollPos = null;
    }

    render() {
        return (
            <section className="core-app-root">
                <Navigation toggleNavigation={this._onToggleNavigation.bind(this)} />

                <div className="layout">
                    <MediaQuery maxWidth={767}>
                        <Header onToggleNavigation={this._onToggleNavigation.bind(this)} />
                    </MediaQuery>

                    {this.props.children}
                </div>
            </section>
        );
    }

    componentWillMount() {
        document.querySelector('html').classList.add(DOMUtils.browserDetect());
    }

    _onToggleNavigation(event) {
        if (DOMUtils.hasClassName(document.body, 'pushed-right')) {
            document.body.classList.remove('pushed-right');
        } else {
            this._curScrollPos = DOMUtils.scrollPos();

            document.body.classList.add('pushed-right');
        }
    }
}
