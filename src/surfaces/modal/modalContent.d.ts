import React from 'react';

export interface ModalContentPropTypes {
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
    /**
     * The content of the ModalContent
     */
    children?: React.ReactNode | null;
    /**
     * Override or extend the styles applied to ModalContent.
     */
    classes?: {
        root: string;
    } | null;
    /**
     * Assign additional class names to ModalContent.
     */
    className?: string | null;
    /**
     * The `id` of the ModalContent.
     */
    id?: string | null;
}

declare const ModalContent: React.ComponentType<ModalContentPropTypes>;

export default ModalContent;
