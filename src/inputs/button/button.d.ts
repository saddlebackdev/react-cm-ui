import React from 'react';
import {
    AsType,
    ColorType,
    Type,
    VariantType,
} from './models';

export interface ButtonPropTypes {
    as?: AsType;
    /**
     * Primary content.
     */
    children: React.ReactNode;
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Override or extend the styles applied to ButtonDropdown.
     */
    classes?: {
        colorActive?: string;
        colorDefault?: string;
        colorError?: string;
        colorLink?: string;
        colorPrimary?: string;
        colorSecondary?: string;
        colorSuccess?: string;
        colorWarning?: string;
        compact?: string;
        contained?: string;
        disabled?: string;
        fixedWidth?: string;
        fullWidth?: string;
        icon?: string;
        innerContainer?: string;
        inverse?: string;
        outlined?: string;
        pill?: string;
        relax?: string;
        root?: string;
        text?: string;
        transparent?: string;
    };
    /**
     * Color of the button.
     */
    color?: ColorType;
    /**
     * A button can reduce its padding.
     */
    compact?: boolean;
    /**
     * A button can be disabled.
     */
    disabled?: boolean;
    /**
     * The Button will be resized to its parent container's width.
     */
    fullWidth?: boolean;
    /**
     * The URL that the hyperlink points to.
     */
    href?: string;
    /**
     * If `true`, the button will be a square, housing the icon child.
     */
    icon?: boolean;
    /**
     * Assign the button an id attribute value.
     */
    id?: string;
    /**
     * Allows for style overrides of the Button's inner container.
     */
    innerStyle?: React.CSSProperties;
    /**
     * A button can be formatted to appear on dark backgrounds better.
     */
    inverse?: boolean;
    /**
     * The onClick event handler.
     */
    onClick?: (event: React.MouseEvent<any>) => void;
    /**
     * A button can be outlined.
     */
    outline?: boolean;
    /**
     * Set a button with a pill like form.
     */
    pill?: boolean;
    /**
     * A button can relax its padding.
     */
    relax?: boolean;
    /**
     * A button can relax its padding.
     */
    style?: React.CSSProperties;
    /**
     * Where to display the linked URL.
     */
    target?: '_blank';
    /**
     * If `true`, only the button's text is shown.
     */
    text?: boolean;
    /**
     * The title attribute.
     */
    title?: string;
    /**
     * Set transparent styles.
     */
    transparent?: boolean;
    /**
     * Set transparent styles.
     */
    type?: Type;
    /**
     * The variant to use.
     */
    variant?: VariantType;
    /**
     * Set a fixed width.
     */
    width?: number | string;
}

declare const Button: React.ComponentType<ButtonPropTypes>;

export default Button;
