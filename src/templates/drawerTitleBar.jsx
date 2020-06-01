import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../atoms/header';

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

const hasClassName = 'drawer-has_title_bar';
const hasWingClassName = 'drawer--wing-has_title_bar';

class DrawerTitleBar extends React.PureComponent {
    componentDidMount() {
        const closestDrawer = this.drawerTitleBarRef.closest('.ui.drawer');
        const closestWing = this.drawerTitleBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(hasWingClassName);

            return null;
        }

        closestDrawer.classList.add(hasClassName);

        return null;
    }

    componentWillUnmount() {
        const closestDrawer = this.drawerTitleBarRef.closest('.ui.drawer');
        const closestWing = this.drawerTitleBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.remove(hasWingClassName);

            return null;
        }

        closestDrawer.classList.remove(hasClassName);

        return null;
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
