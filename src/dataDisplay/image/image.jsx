import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
// eslint-disable-next-line import/extensions
import colorStyles from '../../styles/colorExports';
import Icon from '../icon';
import Utils from '../../utils/utils';

const asEnums = ['div', 'img'];
const typeEnums = ['person', 'user'];

const propTypes = {
    as: PropTypes.oneOf(asEnums),
    border: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    borderInverse: PropTypes.bool,
    className: PropTypes.string,
    dataTestId: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.string,
    type: PropTypes.oneOf(typeEnums),
};

const defaultProps = {
    as: 'img',
    border: undefined,
    borderInverse: undefined,
    dataTestId: `${UI_CLASS_NAME}-image`,
    className: undefined,
    name: undefined,
    size: undefined,
    src: undefined,
    style: {},
    title: undefined,
    type: undefined,
};

function Image(props) {
    const {
        as,
        border,
        borderInverse,
        className,
        dataTestId,
        name,
        size,
        src,
        style,
        title,
        type,
        ...otherProps
    } = props;

    let newStyle = style;

    const ElementType = Utils.getElementType(!type ? as : 'div', props);

    const rootClasses = ClassNames(
        'ui',
        'image',
        className,
        {
            'image-avatar': type === 'person' || type === 'user',
            'image-avatar-person': type === 'person',
            'image-avatar-user': type === 'user',
        },
    );

    if (ElementType === 'img') {
        newStyle = {
            ...style,
            backgroundImage: src ? `url(${src})` : null,
            width: size,
        };

        return (
            <ElementType
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
                className={rootClasses}
                data-testid={dataTestId}
                src={src}
                style={newStyle}
                title={title}
            />
        );
    }

    let newInitials;
    let avatarSize = 'xsmall';

    if (type) {
        let boxShadowStyle;

        if (src) {
            boxShadowStyle = 'none';
        } else {
            boxShadowStyle = !border ? `inset 0 0 0 1px ${colorStyles.borderColor}` : null;
        }

        const borderColorStyle = borderInverse ?
            colorStyles.borderColorInverse :
            colorStyles.borderColor;

        const borderWidth = border === true ? '1' : border;

        newStyle = {
            backgroundImage: src ? `url(${src})` : null,
            border: border ? `${borderWidth}px solid ${borderColorStyle}` : null,
            boxShadow: boxShadowStyle,
            fontSize: !size || size < 44 ? '.75rem' : '1.125rem',
            height: size,
            width: size,
            ...style,
        };

        if (name) {
            newInitials = name.match(/\b\w/g) || [];
            newInitials = ((newInitials.shift() || '') + (newInitials.pop() || '')).toUpperCase();
        }

        if (size >= 88) {
            avatarSize = 'xxlarge';
        } else if (size >= 66) {
            avatarSize = 'large';
        } else if (size >= 44) {
            avatarSize = 'small';
        }
    }

    return (
        <ElementType
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            className={rootClasses}
            data-testid={dataTestId}
            src={!type ? src : null}
            style={newStyle}
            title={title}
        >
            {type && !src && name && newInitials}

            {type && !src && !name && (
                <Icon
                    color="static"
                    compact
                    size={avatarSize}
                    title={`This ${type} has no image`}
                    type={type}
                />
            )}
        </ElementType>
    );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
