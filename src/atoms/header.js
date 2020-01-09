import ClassNames from 'classnames';
import HeaderSubheader from './headerSubheader';
import Icon from './icon';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../utils/utils';

class Header extends React.PureComponent {
    render() {
        const {
            anchor,
            as,
            children,
            className,
            color,
            icon,
            inverse,
            size,
            style,
            sub,
            title,
            weight,
        } = this.props;
        const ElementType = Utils.getElementType(as);
        const containerClasses = ClassNames('ui', 'header', className, {
            'header-anchor': anchor,
            'header-color-inverse': inverse,
            'header-color-static': color === 'static',
            'header-color-text': color === 'text',
            'header-icon': icon,
            'header-size-large': size === 'large',
            'header-size-medium': size === 'medium',
            'header-size-small': size === 'small',
            'header-size-xlarge': size === 'xlarge',
            'header-size-xsmall': size === 'xsmall',
            'header-size-xxsmall': size === 'xxsmall',
            'header-subheader': sub,
            'header-weight-bold': weight === 'bold',
            'header-weight-normal': weight === 'normal',
            'header-weight-semibold': weight === 'semibold',
        });
        let anchorIcon;

        if (anchor) {
            anchorIcon = (
                <Icon
                    className="header-anchor-icon"
                    color="static"
                    compact
                    onClick={this._onAnchorClick.bind(this)}
                    size="small"
                    type="link"
                />
            );
        }

        if (icon && sub) {
            return (
                <ElementType className={containerClasses} id={anchor} style={style}>
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                        }}
                    >
                        {children[0]}

                        {anchorIcon}
                    </span>

                    <div>
                        {children[1]}

                        {children[2]}
                    </div>
                </ElementType>
            );
        }

        return (
            <ElementType className={containerClasses} id={anchor} style={style} title={title}>
                {anchor ? (
                    <span>
                        {React.Children.map(children, (child, index) => {
                            if (index === 0) {
                                return (
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {child}

                                        {anchorIcon}
                                    </span>
                                );
                            } else {
                                return child;
                            }
                        })}
                    </span>
                ) : children}
            </ElementType>
        );
    }

    _onAnchorClick() {
        window.location.hash = this.props.anchor;
    }
}

Header.Subheader = HeaderSubheader;

const asEnums = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
const colorEnums = [ 'static', 'text' ];
const weightEnums = [ 'bold', 'normal', 'semibold' ];

Header.propTypes = {
    anchor: PropTypes.string,
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    icon: PropTypes.bool,
    inverse: PropTypes.bool,
    size: PropTypes.oneOf(Utils.sizeEnums()),
    style: PropTypes.object,
    sub: PropTypes.bool,
    title: PropTypes.string,
    weight: PropTypes.oneOf(weightEnums),
};

Header.defaultTypes = {
    anchor: undefined,
    as: undefined,
    className: undefined,
    color: 'text',
    icon: false,
    inverse: false,
    size: undefined,
    style: {},
    sub: false,
    title: undefined,
    weight: undefined,
};

export default Header;
