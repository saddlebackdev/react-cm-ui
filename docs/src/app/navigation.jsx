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
import _ from 'lodash';
import { domUtils } from 'react-cm-ui/utils';
import { Link } from 'react-router';
import { withStyles } from 'react-cm-ui/styles';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import { navigationItems } from './navigationConstants';

const propTypes = {
    classes: PropTypes.shape({
        divider: PropTypes.string,
        header: PropTypes.string,
        headerSection: PropTypes.string,
        headerSubSection: PropTypes.string,
        logo: PropTypes.string,
        logoContainer: PropTypes.string,
        packageVersion: PropTypes.string,
        root: PropTypes.string,
        scrollBarInner: PropTypes.string,
        ul: PropTypes.string,
        ulLink: PropTypes.string,
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
        this.renderLevelOneJsx = this.renderLevelOneJsx();
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

    renderLevelOneJsx() {
        const {
            classes,
        } = this.props;
        let levelOneKeyNum = 0;
        let levelTwoKeyNum = 0;
        let levelThreeKeyNum = 0;

        return _.map(navigationItems, (levelOne, index) => {
            levelOneKeyNum += 1;

            return (
                <React.Fragment key={`section-${levelOneKeyNum}`}>
                    {index > 0 && (
                        <Divider
                            className={classes.divider}
                            color="inverse"
                            inverse
                            relaxed
                        />
                    )}

                    <Header
                        className={ClassNames(classes.header, classes.headerSection)}
                        inverse
                        size="medium"
                        style={{ marginTop: 0 }}
                    >
                        {levelOne.label}
                    </Header>

                    <ul
                        className={classes.ul}
                    >
                        {_.map(levelOne.levelTwo, (levelTwo) => {
                            levelTwoKeyNum += 1;

                            if (!levelTwo.levelThree) {
                                const path = levelTwo.path && `/${levelOne.path}/${levelTwo.path}`;

                                return this.renderListItem(
                                    levelTwo,
                                    path,
                                    levelTwoKeyNum,
                                );
                            }

                            return (
                                <li key={`level_two-${levelTwoKeyNum}`}>
                                    <Header
                                        className={ClassNames(
                                            classes.header,
                                            classes.headerSubSection,
                                        )}
                                        inverse
                                        size="small"
                                    >
                                        {levelTwo.label}
                                    </Header>

                                    <ul
                                        className={classes.ul}
                                    >
                                        {_.map(levelTwo.levelThree, (levelThree) => {
                                            levelThreeKeyNum += 1;
                                            const path = levelThree.path && `/${levelOne.path}/${levelTwo.path}/${levelThree.path}`;
                                            const key = `sub_section--item-${levelThreeKeyNum}`;

                                            return this.renderListItem(
                                                levelThree,
                                                path,
                                                key,
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </React.Fragment>
            );
        });
    }

    renderListItem(item, route, key) {
        const {
            classes,
        } = this.props;

        if (item.href) {
            return (
                <li key={key}>
                    <a
                        className={classes.ulLink}
                        href={item.href}
                        // eslint-disable-next-line react/jsx-no-target-blank
                        target="_blank"
                    >
                        {item.label}

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
            );
        }

        return (
            <li key={key}>
                <Link
                    activeClassName="is-active"
                    className={ClassNames('core-app-nav-item', classes.ulLink)}
                    to={{ pathname: route }}
                >
                    {item.label}
                </Link>
            </li>
        );
    }

    render() {
        const {
            classes,
        } = this.props;
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

                        {this.renderLevelOneJsx}
                    </div>
                </ScrollBar>
            </nav>
        );
    }
}

CoreAppNavigation.propTypes = propTypes;

export default withStyles(useStyles)(CoreAppNavigation);
