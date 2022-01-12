import React from 'react';

export interface ModalActionsPropTypes {
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start';

    /**
     * The content of the ModalActions
     */
    children?: React.ReactNode | null;
    /**
     * Override or extend the styles applied to ModalActions.
     */
    classes?: {
        margin: string;
        root: string;
    } | null;
    /**
     * Assign additional class names to ModalActions.
     */
    className?: string | null;
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     */
    direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
    /**
     * The `id` of the ModalActions.
     */
    id?: string | null;
}

declare const ModalActions: React.ComponentType<ModalActionsPropTypes>;

export default ModalActions;
