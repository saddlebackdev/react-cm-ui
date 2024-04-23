import React from 'react';

export interface ChipPropTypes {
    children?: React.ReactNode;
    className?: string;
    /* eslint-disable @typescript-eslint/indent */
    color?: 'cyan'
        | 'green'
        | 'orange'
        | 'pink'
        | 'purple'
        | 'red'
        | 'redOrange'
        | 'sky'
        | 'teal',
    /* eslint-enable @typescript-eslint/indent */
    disabled?: boolean;
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
