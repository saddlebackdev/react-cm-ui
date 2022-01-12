/**
 * To run this test:
 * npx jest ./src/surfaces/modalDeprecated/__test__/modalDeprecated.test.js
 */
import React from 'react';
import {
    fireEvent,
    render,
    screen,
} from '../../../testUtils';
import ModalDeprecated from '../modalDeprecated.jsx';

const childContainerDataTestId = `foo_block--bar_modal_content`;
const closeButtonDataTestId = `foo_block--bar_modal_close_button`;
const rootElementDataTestId = `foo_block--bar_modal`;

const defaultProps = {
    childContainerDataTestId,
    closeButtonDataTestId,
    dataTestId: rootElementDataTestId,
    isOpen: false,
    onClose: jest.fn(),
};

const modalContentMessage = 'Hello World from inside the Modal!';
const modalContentJsx = (
    <div>
        {modalContentMessage}
    </div>
);

describe('<ModalDeprecated />', () => {
    describe('render()', () => {
        it('OK (all default props)', () => {
            render(
                <ModalDeprecated {...defaultProps}>
                    {modalContentJsx}
                </ModalDeprecated>
            );

            // There is _absolutely nothing_ there if the modal is not open
            expect(screen.queryByTestId(rootElementDataTestId)).not.toBeInTheDocument();
        });

        it('OK (modal is open)', () => {
            const props = {
                ...defaultProps,
                isOpen: true,
            };

            render(
                <ModalDeprecated {...props}>
                    {modalContentJsx}
                </ModalDeprecated>
            );

            // NOTE: Because there is no `title` and nothing specified for `closeButton`
            // the `<ModalDeprcatedHeader>` and the Close Button are not rendered in this case.

            expect(screen.queryByTestId(rootElementDataTestId)).toBeInTheDocument();
            expect(screen.queryByTestId(childContainerDataTestId)).toBeInTheDocument();
            expect(screen.queryByText(modalContentMessage)).toBeInTheDocument();
        });

        it('OK (modal is open with a title and a Close Button)', () => {
            const props = {
                ...defaultProps,
                closeButton: true,
                isOpen: true,
                title: 'Really Spiffy Modal Title'
            };

            render(
                <ModalDeprecated {...props}>
                    {modalContentJsx}
                </ModalDeprecated>
            );

            expect(screen.queryByTestId(rootElementDataTestId)).toBeInTheDocument();
            expect(screen.queryByTestId(childContainerDataTestId)).toBeInTheDocument();
            expect(screen.queryByTestId(closeButtonDataTestId)).toBeInTheDocument();
            expect(screen.queryByText(modalContentMessage)).toBeInTheDocument();
            expect(screen.queryByText(props.title)).toBeInTheDocument();
        });
    });

    describe('Close Button', () => {
        it('Works', () => {
            const props = {
                ...defaultProps,
                closeButton: true,
                isOpen: true,
            };

            render(
                <ModalDeprecated {...props}>
                    {modalContentJsx}
                </ModalDeprecated>
            );

            fireEvent.click(screen.getByTestId(closeButtonDataTestId));

            expect(props.onClose).toHaveBeenCalledTimes(1);
        });
    });
});
