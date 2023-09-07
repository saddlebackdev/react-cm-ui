import React from 'react';
import { ColorType } from './models';

export interface IconPropTypes {
    /**
     * Changes the margin from left or right.
     */
    align?: 'left' | 'right';
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Color of the icon.
     */
    color?: ColorType,
    /**
     * If `true`, removes the margin.
     */
    compact?: boolean;
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    /**
     * If `true`, an icon can be disabled.
     */
    disable?: boolean;
    /**
     * If defined, `color` will be overriden and the `gradient.linearGradient` will be used.
     * Note: `id` needs to be defined on the `<linearGradient>` element.
     */
    gradient?: React.ReactNode;
    /**
     * The `id` of the icon.
     */
    id?: string;
    /**
     * If `true`, a icon can be formatted to appear on dark backgrounds.
     */
    inverse?: boolean;
    /**
     * Event handler for onClick
     */
    onClick?: () => void;
    /**
     * Event handler for onKeyDown
     */
    onKeyDown?: (event) => void;
    /**
     * Transforms the rotation of the icon with the given number.
     */
    rotate?: number;
    /**
     * Changes the height and width of the icon with the given number.
     */
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | number;
    /**
     * If `true`, endlessly spins the icon counter-clockwise
     */
    spin?: boolean;
    /**
     * Supply any inline styles to the icon.
     */
    style?: React.CSSProperties;
    /**
     * Indicates whether or not the Icon can be focused.
     */
    tabIndex?: number;
    /**
     * Provides a human-readable title for the element that contains it.
     */
    title?: string | boolean;
    /**
     * The string for the icon you want to display.
     */
    type: string;
}

declare const Icon: React.ComponentType<IconPropTypes>;

export default Icon;
