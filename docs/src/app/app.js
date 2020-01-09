import './app.scss';

import { Button, domUtils, Icon } from 'react-cm-ui';
import _ from 'lodash';
import breakpointActions from '../global/breakpointActions.js';
import Header from './header';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Navigation from './navigation';
import React from 'react';

if (location.hash && location.hash[0] === '#' && location.hash[1] === '!') {
    history.pushState({}, '', location.hash.substring(2));
}

export default class CoreApp extends React.Component {
    constructor(props) {
        super(props);

        this._curScrollPos = null;
        this._onResizeDebounce = _.debounce(() => this._onResize(), 80);

        document.querySelector('html').classList.add(domUtils.browserDetect());
        breakpointActions.update();
    }

    componentDidMount() {
        window.addEventListener('resize', this._onResizeDebounce);
        this._onResize();
    }

    render() {
        const { children } = this.props;
        const isExample = this.props.location.pathname.split('/').pop() === 'demo';

        if (isExample) {
            return (
                <div className="demo">
                    <div className="demo--navigation">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <Button
                                    color="transparent"
                                    compact
                                    style={{
                                        margin: '11px 0',
                                    }}
                                >
                                    <Icon type="chevron-left" />
                                    <span>Back to Docs</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="demo--layout">
                        <div className="page-content">
                            {children}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <section className="core-app-root">
                    <Navigation toggleNavigation={this._onToggleNavigation.bind(this)} />

                    <div className="layout">
                        <MediaQuery maxWidth={767}>
                            <Header onToggleNavigation={this._onToggleNavigation.bind(this)} />
                        </MediaQuery>

                        {children}
                    </div>
                </section>
            );
        }
    }

    _onResize() {
        breakpointActions.update();
    }

    _onToggleNavigation(event) {
        if (domUtils.hasClassName(document.body, 'pushed-right')) {
            document.body.classList.remove('pushed-right');
        } else {
            this._curScrollPos = domUtils.scrollPos();

            document.body.classList.add('pushed-right');
        }
    }
}
