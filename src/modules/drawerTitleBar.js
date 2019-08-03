import _ from 'lodash';
import ClassNames from 'classnames';
import Header from '../elements/header';
import PropTypes from 'prop-types';
import React from 'react';

const hasClassName = 'has-drawer--title_bar';

class DrawerTitleBar extends React.PureComponent {
    render() {
        const { className, closeButton, closeButtonStyle, style, title, titleStyle } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--title_bar', className);

        return (
            <header
                className={containerClasses}
                ref={ref => this._drawerTitleBarRef = ref}
                style={style}
            >
                <div>
                    {_.isObject(title) ? (
                        title
                    ) : _.isString(title) ? (
                        <Header as="h2" className="title" style={titleStyle}>
                            {title}
                        </Header>
                    ) : null}

                    {_.isObject(closeButton) ? (
                        <div className="close-button" style={closeButtonStyle}>
                            {closeButton}
                        </div>
                    ) : null}
                </div>
            </header>
        );
    }

    componentDidMount() {
        this._drawerTitleBarRef.closest('.ui.drawer').classList.add(hasClassName);
    }

    componentWillUnmount() {
        this._drawerTitleBarRef.closest('.ui.drawer').classList.remove(hasClassName);
    }
}

DrawerTitleBar.propTypes = {
    className: PropTypes.string,
    closeButton: PropTypes.object,
    closeButtonStyle: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    titleStyle: PropTypes.object,
};

export default DrawerTitleBar;
