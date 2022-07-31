import React from 'react';
import ModalActions from './modalActions';
import ModalContent from './ModalContent';

export interface ModalPropTypes {
    /**
     * If `true`, Modal's height will adjust to the content.
     */
    autoHeight?: boolean;
    /**
     * The content of the Modal
     */
    children?: React.ReactNode | null;
    /**
     * Override or extend the styles applied to Modal.
     */
    classes?: {
        closeButton?: string;
        dimmer?: string;
        innerContainerClasses?: string;
        padding?: string;
        root?: string;
        scrollContainer?: string;
    } | null;
    /**
     * Assign additional class names to Modal.
     */
    className?: string | null;
    /**
     * Add a `data-testid` attribute to the Modal's Close Button.
     * Used for DOM Testing.
     * See https://testing-library.com/docs/queries/bytestid/.
     */
    closeButtonDataTestId?: string;
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    /**
     * The `height` of the Modal.
     */
    height?: number | string;
    /**
     * The `id` of the Modal.
     */
    id?: string | null;
    /**
     * If `true`, Modal is open.
     */
    isOpen: boolean;
    /**
     * The `maxHeight` of the Modal.
     */
    maxHeight?: number | string;
    /**
     * The `maxWidth` of the Modal.
     */
    maxWidth?: number | string;
    /**
     * The `minHeight` of the Modal.
     */
    minHeight?: number | string;
    /**
     * The `minWidth` of the Modal.
     */
    minWidth?: number | string;
    /**
     * Boolean indicating whether or not the Modal can be closed when the user clicks outside of it.
     */
    onClickOutside?: boolean;
    /**
     * Event handler for closing the Modal.
     * Only used when Modal needs a close button in the top right.
     */
    onClose?: Function | null;
    /**
     * Event handler called after close animation has completed.
     */
    onCloseComplete?: Function;
    /**
     * Event handler called after open animation has completed.
     */
    onOpenComplete?: Function;
    /**
     * HC's theme.
     */
    theme?: {
        zIndex: {
            modal: number;
        },
    };
    /**
     * The `width` of the Modal.
     */
    width?: number | string;
}

export interface ModalComponent extends React.FC<ModalPropTypes> {
    Actions: typeof ModalActions;
    Content: typeof ModalContent;
}

declare const Modal: ModalComponent;

export default Modal;
