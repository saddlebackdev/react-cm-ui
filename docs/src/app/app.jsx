import './app.scss';

import _ from 'lodash';
import { Button, domUtils, Icon } from 'react-cm-ui';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import breakpointActions from '../global/breakpointActions';
import Header from './header';
import Navigation from './navigation';

const propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

// eslint-disable-next-line no-restricted-globals
if (location.hash && location.hash[0] === '#' && location.hash[1] === '!') {
    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, '', location.hash.substring(2));
}

class CoreApp extends React.Component {
    static onResize() {
        breakpointActions.update();
    }

    constructor(props) {
        super(props);

        document.querySelector('html').classList.add(domUtils.browserDetect());
        breakpointActions.update();

        this.curScrollPos = null;
        this.onResizeDebounce = _.debounce(() => CoreApp.onResize(), 80);
        this.onToggleNavigation = this.onToggleNavigation.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResizeDebounce);
        CoreApp.onResize();
    }

    onToggleNavigation() {
        if (domUtils.hasClassName(document.body, 'pushed-right')) {
            document.body.classList.remove('pushed-right');
            document.querySelector('.core-app-root > nav').classList.remove('pushed-right');
        } else {
            this.curScrollPos = domUtils.scrollPos();

            document.body.classList.add('pushed-right');
            document.querySelector('.core-app-root > nav').classList.add('pushed-right');
        }
    }

    render() {
        const { children, location } = this.props;
        const isDemo = location.pathname.split('/').pop() === 'demo';

        if (isDemo) {
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
        }

        return (
            <section className="core-app-root">
                <Navigation toggleNavigation={this.onToggleNavigation} />

                <div className="layout">
                    <MediaQuery maxWidth={767}>
                        <Header onToggleNavigation={this.onToggleNavigation} />
                    </MediaQuery>

                    {children}
                </div>
            </section>
        );
    }
}

CoreApp.propTypes = propTypes;

export default CoreApp;
