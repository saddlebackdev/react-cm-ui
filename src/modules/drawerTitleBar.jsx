import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header';

const propTypes = {
    className: PropTypes.string,
    closeButton: PropTypes.shape({}),
    closeButtonStyle: PropTypes.shape({}),
    style: PropTypes.shape({}),
    title: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    titleStyle: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    closeButton: undefined,
    closeButtonStyle: {},
    style: {},
    title: undefined,
    titleStyle: {},
};

const hasClassName = 'has-drawer--title_bar';
const hasWingClassName = 'has-drawer--wing--title_bar';

class DrawerTitleBar extends React.PureComponent {
    componentDidMount() {
        const closestDrawer = this.drawerTitleBarRef.closest('.ui.drawer');
        const closestWing = this.drawerTitleBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(hasWingClassName);
        } else {
            closestDrawer.classList.add(hasClassName);
        }
    }

    componentWillUnmount() {
        this.drawerTitleBarRef.closest('.ui.drawer').classList.remove(hasClassName);
    }

    render() {
        const { 
            className,
            closeButton,
            closeButtonStyle,
            style,
            title,
            titleStyle,
        } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--title_bar', className);

        return (
            <header
                className={containerClasses}
                ref={(ref) => { this.drawerTitleBarRef = ref; }}
                style={style}
            >
                <div
                    className="drawer--title_bar_inner"
                >
                    {_.isObject(title) && title}

                    {_.isString(title) && (
                        <Header as="h2" className="title" style={titleStyle}>
                            {title}
                        </Header>
                    )}

                    {_.isObject(closeButton) ? (
                        <div className="close-button" style={closeButtonStyle}>
                            {closeButton}
                        </div>
                    ) : null}
                </div>
            </header>
        );
    }
}

DrawerTitleBar.propTypes = propTypes;
DrawerTitleBar.defaultProps = defaultProps;

export default DrawerTitleBar;
