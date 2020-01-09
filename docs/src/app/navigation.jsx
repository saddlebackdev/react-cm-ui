import './navigation.scss';

import { domUtils, Header, Icon } from 'react-cm-ui';
import _ from 'lodash';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';

const propTypes = {
    router: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    selection: PropTypes.bool,
    toggleNavigation: PropTypes.func.isRequired,
};

class CoreAppNavigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onLogoClick = this.onLogoClick.bind(this);
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    componentDidMount() {
        const { selection } = this.props;
        console.log('selection', selection);

        if (!selection) {
            document.addEventListener('click', this.toggleNavigation);
        }
    }

    componentWillUnmount() {
        const { selection } = this.props;

        if (!selection) {
            document.removeEventListener('click', this.toggleNavigation);
        }
    }

    onLogoClick() {
        const { router } = this.state;

        router.push('/');
    }

    toggleNavigation(event) {
        const { toggleNavigation } = this.props;
        const isCoreAppNav = this.coreAppNavRef.contains(event.target);
        const isPushedRight = domUtils.hasClassName(document.body, 'pushed-right');

        if (
            domUtils.hasClassName(event.target, 'button-menu') ||
            (
                isPushedRight &&
                isCoreAppNav &&
                !domUtils.hasClassName(event.target, 'core-app-nav-item')
            ) ||
            (!isPushedRight && !isCoreAppNav)
        ) {
            return;
        }

        toggleNavigation();
    }

    render() {
        const navItemClassName = 'core-app-nav-item';
        const isActive = 'is-active';
        const version = __UI_DOCS_VERSION__; // eslint-disable-line

        return (
            <nav className="core-app-nav" ref={(ref) => { this.coreAppNavRef = ref; }}>
                <ScrollBar
                    autoHide
                    className="core-app-nav-scrollbar"
                >
                    <div className="core-app-nav-scrollbar-inner">
                        <div className="logo-wrapper">
                            <Header
                                className="logo"
                                color="static"
                                onClick={this.onLogoClick}
                                size="medium"
                                weight="semibold"
                            >
                                React-CM-UI
                            </Header>

                            <span className="text-xsmall text-semibold text-italics doc-version">{`DOCS V ${version}`}</span>
                        </div>

                        <Header size="small" style={{ marginTop: 0 }}>Getting Started</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/getting-started/installation' }} activeClassName={isActive}>Installation</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/getting-started/usage' }} activeClassName={isActive}>
                                    Usage
                                </Link>
                            </li>

                            <li>
                                <a href="https://github.com/saddlebackdev/react-cm-ui/blob/dev/CHANGELOG.md" target="_blank">
                                    Changelog

                                    <Icon
                                        color="static"
                                        inverse
                                        size={10}
                                        style={{
                                            marginLeft: '7px',
                                        }}
                                        type="link-external"
                                    />
                                </a>
                            </li>
                        </ul>

                        <Header size="small">Style Guide</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/style-guide/colors' }} activeClassName={isActive}>Colors</Link>
                            </li>
                        </ul>

                        <Header size="small">Atoms</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/activity-indicator' }} activeClassName={isActive}>Activity Indicator</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/button' }} activeClassName={isActive}>Button</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/checkbox' }} activeClassName={isActive}>Checkbox</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/divider' }} activeClassName={isActive}>Divider</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/dropdown' }} activeClassName={isActive}>Dropdown</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/header' }} activeClassName={isActive}>Header</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/icon' }} activeClassName={isActive}>Icon</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/image' }} activeClassName={isActive}>Image</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/input' }} activeClassName={isActive}>Input</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/label' }} activeClassName={isActive}>Label</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/list' }} activeClassName={isActive}>List</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/prompt' }} activeClassName={isActive}>Prompt</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/radio' }} activeClassName={isActive}>Radio</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/text-area' }} activeClassName={isActive}>Text Area</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/atoms/segmented-controls' }} activeClassName={isActive}>Segmented Controls</Link>
                            </li>
                        </ul>

                        <Header size="small">Molecules</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/banner' }} activeClassName={isActive}>Banner</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/comment' }} activeClassName={isActive}>Comment</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/date-picker-calendar' }} activeClassName={isActive}>Date Picker Calendar</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/date-picker-input' }} activeClassName={isActive}>Date Picker Input</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/duration-picker' }} activeClassName={isActive}>Duration Picker</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/phone-input' }} activeClassName={isActive}>Phone Input</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/molecules/time-picker' }} activeClassName={isActive}>Time Picker</Link>
                            </li>
                        </ul>

                        <Header size="small">Organisms</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/accordion' }} activeClassName={isActive}>Accordion</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/card' }} activeClassName={isActive}>Card</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/grid' }} activeClassName={isActive}>Grid</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/info-bar' }} activeClassName={isActive}>Info Bar</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/rail' }} activeClassName={isActive}>Rail</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/sub-navigation' }} activeClassName={isActive}>Sub Navigation</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/title-bar' }} activeClassName={isActive}>Title Bar</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/table' }} activeClassName={isActive}>Table</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/organisms/tabs' }} activeClassName={isActive}>Tabs</Link>
                            </li>
                        </ul>

                        <Header size="small">Templates</Header>

                        <ul>
                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/templates/drawer' }} activeClassName={isActive}>Drawer</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/templates/modal' }} activeClassName={isActive}>Modal</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName} to={{ pathname: '/templates/page' }} activeClassName={isActive}>Page</Link>
                            </li>
                        </ul>
                    </div>
                </ScrollBar>
            </nav>
        );
    }
}

CoreAppNavigation.propTypes = propTypes;

export default CoreAppNavigation;
