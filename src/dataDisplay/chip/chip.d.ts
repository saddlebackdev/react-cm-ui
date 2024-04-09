import React from 'react';

export interface ChipPropTypes {
    children?: React.ReactNode;
    className?: string;
    /* eslint-disable @typescript-eslint/indent */
    color?: 'active' | 'action' | 'alert' |
        'alternate' | 'bright' | 'condition' |
        'configuration' | 'disable' | 'highlight' |
        'inverse' | 'inverse-alternate' | 'light' |
        'nest' | 'outline' | 'primary' |
        'secondary' | 'static' | 'subject' |
        'success' | 'transparent' | 'warning',
    /* eslint-enable @typescript-eslint/indent */
    fluid?: boolean;
    inverse?: boolean;
    label?: string;
    onClearClick?: Function;
    onClearKeyDown?: Function;
    onClick?: Function;
    onDelete?: Function;
    onKeyDown?: Function;
    style?: React.CSSProperties;
    tabIndex?: number;
}

declare const Chip: React.ComponentType<ChipPropTypes>;

export default Chip;
