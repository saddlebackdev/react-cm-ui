import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import colorStyles from '../../styles/colorExports'; // eslint-disable-line import/extensions, import/no-unresolved
import Icon from '../icon';
import Utils from '../../utils/utils';

const asEnums = ['div', 'img'];
const typeEnums = ['person', 'user'];

const propTypes = {
    /**
     * Specify `alt` attribute content for an image rendered with element type <strong>&lt;img&gt;</strong>.
     */
    alt: PropTypes.string,
    /**
     * Specify the kind of element to use ( <strong>&lt;img&gt;</strong> or <strong>&lt;div&gt;</strong> with background image).
     *
     * Optional; defaults to <strong>&lt;img&gt;</strong>.
     */
    as: PropTypes.oneOf(asEnums),
    /**
     * Determines whether to addd a border to the image, and, if so, its width.
     *
     * If set to `true` then the image will have a border with width is set to 1.
     * If set to a number then the image will have a order with the specified width.
     */
    border: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    /**
     * If the image has a border, and this prop is set to `true` then the image's border color will be set to white.
     */
    borderInverse: PropTypes.bool,
    /**
     * Add additional class names to the image.
     */
    className: PropTypes.string,
    /**
     * Assign a `data-testid` attribute to the image to help find it during UI unit testing.
     *
     * Consider using the `alt` prop to assign alt text to the image, and `*ByAltText()` selector methods
     * instead of assigning a Test ID in order to find your image in unit tests.
     *
     * See:
     *
     * https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-query
     *
     * https://testing-library.com/docs/queries/about/#priority
     */
    dataTestId: PropTypes.string,
    /**
     * For avatar or photo images representing a User or Person, this is the user/person's name,
     * so his or her initials can be used as a fallback.
     */
    name: PropTypes.string,
    /**
     * Size of the image.
     */
    size: PropTypes.number,
    /**
     * Image source URL.
     */
    src: PropTypes.string,
    /**
     * Inline styles for the image.
     */
    style: PropTypes.shape({}),
    /**
     * For legacy reasons, we set the specified image url as a CSS background image on
     * <strong>&lt;img&gt;</strong> tags, as well as setting the `src` attribute.
     *
     * This prop allows that behavior to be suppressed.
     */
    suppressBackgroundImage: PropTypes.bool,
    /**
     * Sets the `title` attribute for the image (e.g. to show a tooltip on hover).
     */
    title: PropTypes.string,
    /**
     * For avatar images, determines whether to display a square image
     * (`type` = `'person'`) or a circular image (`type` = `'user'`).
     *
     * Also determine the kind of <strong>&lt;Icon&gt;</strong> to be used as a fallback if no `src` or `name` is provided.
     */
    type: PropTypes.oneOf(typeEnums),
};

const defaultProps = {
    alt: undefined,
    as: 'img',
    border: undefined,
    borderInverse: undefined,
    dataTestId: `${UI_CLASS_NAME}-image`,
    className: undefined,
    name: undefined,
    size: undefined,
    src: undefined,
    style: {},
    suppressBackgroundImage: false,
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
        suppressBackgroundImage,
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
        const shouldAddBackgroundImageStyle = !suppressBackgroundImage && !!src;

        newStyle = {
            ...style,
            backgroundImage: shouldAddBackgroundImageStyle ? `url(${src})` : undefined,
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
