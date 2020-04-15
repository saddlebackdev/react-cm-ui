import {
    Divider,
    Header,
    Icon,
} from 'react-cm-ui';
import {
    backgroundColorInverse,
    borderColorQuaternary,
    color,
    colorInverse,
    colorStatic,
} from 'react-cm-ui/styles/colorExports';
import { domUtils } from 'react-cm-ui/utils';
import { withStyles } from 'react-cm-ui/styles';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';

const propTypes = {
    classes: PropTypes.shape({
        divider: PropTypes.shape({}),
    }).isRequired,
    toggleNavigation: PropTypes.func.isRequired,
};

const useStyles = (theme) => ({
    root: {
        backgroundColor: backgroundColorInverse,
        color: colorInverse,
        height: '100%',
        left: 0,
        opacity: 0,
        position: 'fixed',
        top: 0,
        transitionDelay: '750ms',
        transitionProperty: 'opacity',
        width: '250px',
        '&.pushed-right': {
            opacity: 1,
            transitionDelay: '.1ms',
        },
        '& .ui.header': {
            zIndex: -1,
        },
        [theme.breakpoints.up('md')]: {
            opacity: 1,
            transition: 'none',
            zIndex: 7000,
        },
    },
    logoContainer: {
        alignItems: 'flex-start',
        backgroundColor: backgroundColorInverse,
        borderBottom: `1px solid ${borderColorQuaternary}`,
        boxShadow: `0 10px 24px ${backgroundColorInverse}`,
        clipPath: 'inset(0 0 -26px 0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        left: 0,
        margin: '0 16px',
        padding: '11px 0 16px',
        position: 'fixed',
        top: 0,
        width: `${250 - 32}px`,
        '& + .ui.header': {
            marginTop: '0 !important',
        },
    },
    logo: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    packageVersion: {
        color: colorStatic,
        fontSize: '12px',
        fontStyle: 'italic',
        margin: '11px 0 0',
    },
    scrollBarInner: {
        padding: '104px 16px 22px',
        position: 'relative',
        '& > *': {
            marginTop: 0,
        },
    },
    divider: {
        '& + .ui.header': {
            marginTop: '22px',
        },
    },
    headerSection: {
        marginTop: '22px !important',
    },
    headerSubSection: {
        margin: '16px 0 5px !important',
    },
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    ulLink: {
        color: colorStatic,
        fontSize: '14px',
        transition: `${color} 300ms ease-out`,
        '&.is-active': {
            color: colorInverse,
        },
    },
});

class CoreAppNavigation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onLogoClick = this.onLogoClick.bind(this);
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.toggleNavigation);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.toggleNavigation);
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
        const {
            classes,
        } = this.props;
        const navItemClassName = 'core-app-nav-item';
        const isActive = 'is-active';
        const version = __UI_PACKAGE_VERSION__; // eslint-disable-line no-undef

        return (
            <nav
                className={classes.root}
                ref={(ref) => { this.coreAppNavRef = ref; }}
            >
                <ScrollBar
                    autoHide
                    className="core-app-nav-scrollbar"
                >
                    <div className={classes.scrollBarInner}>
                        <div className={classes.logoContainer}>
                            <Link to={{ pathname: '/' }}>
                                <Header
                                    className={classes.logo}
                                    inverse
                                    onClick={this.onLogoClick}
                                    size="medium"
                                    weight="semibold"
                                >
                                    React-CM-UI
                                </Header>
                            </Link>

                            <div className={`text-xsmall text-semibold text-italics ${classes.packageVersion}`}>{`v${version}`}</div>
                        </div>

                        <Header
                            className={classes.header, classes.headerSection}
                            inverse
                            size="medium"
                            style={{ marginTop: 0 }}
                        >
                            Getting Started
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link className={navItemClassName, classes.ulLink} to={{ pathname: '/getting-started/installation' }} activeClassName={isActive}>Installation</Link>
                            </li>

                            <li>
                                <Link className={navItemClassName, classes.ulLink} to={{ pathname: '/getting-started/usage' }} activeClassName={isActive}>
                                    Usage
                                </Link>
                            </li>

                            <li>
                                <a
                                    className={classes.ulLink}
                                    href="https://github.com/saddlebackdev/react-cm-ui/blob/dev/CHANGELOG.md"
                                    target="_blank"
                                >
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

                        <Divider
                            className={classes.divider}
                            color="inverse"
                            inverse
                            relaxed
                        />

                        <Header
                            className={classes.header, classes.headerSection}
                            inverse
                            size="medium"
                        >
                            Style Guide
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/style-guide/colors' }}
                                    activeClassName={isActive}
                                >
                                    Colors
                                </Link>
                            </li>
                        </ul>

                        <Divider
                            className={classes.divider}
                            color="inverse"
                            inverse
                            relaxed
                        />

                        <Header
                            className={classes.header, classes.headerSection}
                            inverse
                            size="medium"
                        >
                            Components
                        </Header>

                        <Header
                            className={classes.header, classes.headerSubSection}
                            inverse
                            size="small"
                        >
                            Data Display
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/banner' }}
                                    activeClassName={isActive}
                                >
                                    Banner
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/divider' }}
                                    activeClassName={isActive}
                                >
                                    Divider
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/icon' }}
                                    activeClassName={isActive}
                                >
                                    Icon
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/image' }}
                                    activeClassName={isActive}
                                >
                                    Image
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/list' }}
                                    activeClassName={isActive}
                                >
                                    List
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/data-display/table' }}
                                    activeClassName={isActive}
                                >
                                    Table
                                </Link>
                            </li>
                        </ul>

                        <Header
                            className={classes.header, classes.headerSubSection}
                            inverse
                            size="small"
                        >
                            Atoms
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/activity-indicator' }}
                                    activeClassName={isActive}
                                >
                                    Activity Indicator
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/button' }}
                                    activeClassName={isActive}
                                >
                                    Button
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/checkbox' }}
                                    activeClassName={isActive}
                                >
                                    Checkbox
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/dropdown' }}
                                    activeClassName={isActive}
                                >
                                    Dropdown
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/header' }}
                                    activeClassName={isActive}
                                >
                                    Header
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/input' }}
                                    activeClassName={isActive}
                                >
                                    Input
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/label' }}
                                    activeClassName={isActive}
                                >
                                    Label
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/prompt' }}
                                    activeClassName={isActive}
                                >
                                    Prompt
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/radio' }}
                                    activeClassName={isActive}
                                >
                                    Radio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/text-area' }}
                                    activeClassName={isActive}
                                >
                                    Text Area
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/atoms/segmented-controls' }}
                                    activeClassName={isActive}
                                >
                                    Segmented Controls
                                </Link>
                            </li>
                        </ul>

                        <Header
                            className={classes.header, classes.headerSubSection}
                            inverse
                            size="small"
                        >
                            Molecules
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/comment' }}
                                    activeClassName={isActive}
                                >
                                    Comment
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/date-picker-calendar' }}
                                    activeClassName={isActive}
                                >
                                    Date Picker Calendar
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/date-picker-input' }}
                                    activeClassName={isActive}
                                >
                                    Date Picker Input
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/dropdown-button' }}
                                    activeClassName={isActive}
                                >
                                    Dropdown Button
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/duration-picker' }}
                                    activeClassName={isActive}
                                >
                                    Duration Picker
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/phone-input' }}
                                    activeClassName={isActive}
                                >
                                    Phone Input
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/molecules/time-picker' }}
                                    activeClassName={isActive}
                                >
                                    Time Picker
                                </Link>
                            </li>
                        </ul>

                        <Header
                            className={classes.header, classes.headerSubSection}
                            inverse
                            size="small"
                        >
                            Organisms
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/accordion' }}
                                    activeClassName={isActive}
                                >
                                    Accordion
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/card' }}
                                    activeClassName={isActive}
                                >
                                    Card
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/grid' }}
                                    activeClassName={isActive}
                                >
                                    Grid
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/info-bar' }}
                                    activeClassName={isActive}
                                >
                                    Info Bar
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/rail' }}
                                    activeClassName={isActive}
                                >
                                    Rail
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/sub-navigation' }}
                                    activeClassName={isActive}
                                >
                                    Sub Navigation
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/title-bar' }}
                                    activeClassName={isActive}
                                >
                                    Title Bar
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/organisms/tabs' }}
                                    activeClassName={isActive}
                                >
                                    Tabs
                                </Link>
                            </li>
                        </ul>

                        <Header
                            className={classes.header, classes.headerSubSection}
                            inverse
                            size="small"
                        >
                            Templates
                        </Header>

                        <ul
                            className={classes.ul}
                        >
                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/templates/drawer' }}
                                    activeClassName={isActive}
                                >
                                    Drawer
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/templates/modal' }}
                                    activeClassName={isActive}
                                >
                                    Modal
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={navItemClassName, classes.ulLink}
                                    to={{ pathname: '/templates/page' }}
                                    activeClassName={isActive}
                                >
                                    Page
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ScrollBar>
            </nav>
        );
    }
}

CoreAppNavigation.propTypes = propTypes;

export default withStyles(useStyles)(CoreAppNavigation);
