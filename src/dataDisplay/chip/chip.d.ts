import React from 'react';

export interface ChipPropTypes {
    children?: React.ReactNode;
    className?: string;
    color?: 'active' | 'action' | 'alert' |
        'alternate' | 'bright' | 'condition' |
        'configuration' | 'disable' | 'highlight' |
        'inverse' | 'inverse-alternate' | 'light' |
        'nest' | 'outline' | 'primary' |
        'secondary' | 'static' | 'subject' |
        'success' | 'transparent' | 'warning',
    fluid?: boolean;
    inverse?: boolean;
    onClearClick?: Function;
    onClearKeyDown?: Function;
    onClick?: Function;
    onKeyDown?: Function;
    style?: object;
    tabIndex?: number;
}

declare const Chip: React.ComponentType<ChipPropTypes>;

export default Chip;
