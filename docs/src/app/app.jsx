import './app.scss';

import {
    AppBar,
    Button,
    domUtils,
    Icon,
    Typography,
} from 'react-cm-ui';
import { Link, withRouter } from 'react-router';
import _, {
    find,
    pick,
} from 'lodash';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'react-cm-ui/styles/withStyles';
import { navigationItems } from './navigationConstants';
import breakpointActions from '../global/breakpointActions';
import Header from './header';
import Navigation from './navigation';
import Tabs from './tabs';

const propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape({
        appBar: PropTypes.string,
        appBarInner: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    router: PropTypes.shape({}).isRequired,
};

// eslint-disable-next-line no-restricted-globals
if (location.hash && location.hash[0] === '#' && location.hash[1] === '!') {
    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, '', location.hash.substring(2));
}

const styles = (theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            left: theme.width.navigation.md.expanded,
            position: 'fixed',
            right: 0,
            zIndex: 1,
        },
    },
    appBarInner: {
        position: 'relative',
        width: '100%',
    },
});

class App extends React.Component {
    static onResize() {
        breakpointActions.update();
    }

    constructor(props) {
        super(props);

        document.querySelector('html').classList.add(domUtils.browserDetect());
        breakpointActions.update();

        this.curScrollPos = null;
        this.onResizeDebounce = _.debounce(() => App.onResize(), 80);
        this.onToggleNavigation = this.onToggleNavigation.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResizeDebounce);

        App.onResize();
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
        const {
            children,
            classes,
            location,
            router,
        } = this.props;

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

        const firstLevelPath = router?.routes[1]?.path;
        const secondLevelPath = router?.routes[2]?.path;
        const thirdLevelPath = router?.routes[3]?.path;

        const activeLevelTwoItems = find(navigationItems, { path: firstLevelPath })?.levelTwo;
        const activeLevelTwoItem = find(activeLevelTwoItems, { path: secondLevelPath });
        const activeLevelThreeItem = find(activeLevelTwoItem?.levelThree, { path: thirdLevelPath });

        const pageHeading = activeLevelThreeItem ?
            activeLevelThreeItem.label :
            activeLevelTwoItem?.label;

        let pageTabsItems = [];

        if (activeLevelThreeItem?.levelFour) {
            pageTabsItems = [
                {
                    ...pick(activeLevelThreeItem, ['component', 'label', 'path']),
                },
                ...activeLevelThreeItem.levelFour,
            ];
        }

        return (
            <section className="core-app-root">
                <Navigation toggleNavigation={this.onToggleNavigation} />

                <div className="layout">
                    <MediaQuery maxWidth={767}>
                        <Header onToggleNavigation={this.onToggleNavigation} />
                    </MediaQuery>

                    {firstLevelPath && (
                        <AppBar
                            classes={{
                                root: classes.appBar,
                            }}
                        >
                            <div
                                className={classes.appBarInner}
                            >
                                <Typography
                                    variant="h2"
                                >
                                    {pageHeading}
                                </Typography>

                                <Tabs
                                    items={pageTabsItems}
                                />
                            </div>
                        </AppBar>
                    )}

                    {children}
                </div>
            </section>
        );
    }
}

App.propTypes = propTypes;

export default withRouter(withStyles(styles)(App));
