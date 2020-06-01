/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import { buttonDocProps } from './buttonConstants';
import ButtonColorExample from './ButtonColorExample';
import ButtonCompactExample from './buttonCompactExample';
import ButtonDisableExample from './buttonDisableExample';
import ButtonExample from './buttonExample';
import ButtonFluidExample from './buttonFluidExample';
import ButtonIconExample from './buttonIconExample';
import ButtonIdExample from './buttonIdExample';
import ButtonInverseExample from './buttonInverseExample';
import ButtonOutlineExample from './buttonOutlineExample';
import ButtonRelaxExample from './buttonRelaxExample';
import ButtonWidthExample from './buttonWidthExample';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

function ElementsButton() {
    return (
        <Main page="headers">
            <TitleBar title="Button" />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={buttonDocProps} />
                </Card>

                {/* Button */}
                <Header anchor="button" size="large" style={{ marginTop: '55px' }} sub>
                    Button
                    <Header.Subheader>
                        A standard button.
                    </Header.Subheader>
                </Header>

                <ButtonExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonExample').default}
                </Highlighter>

                {/* Color */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                    Color
                    <Header.Subheader>
                        Buttons can have different colors.
                    </Header.Subheader>
                </Header>

                <ButtonColorExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonColorExample').default}
                </Highlighter>

                {/* Compact */}
                <Header anchor="compact" size="large" style={{ marginTop: '55px' }} sub>
                    Compact
                    <Header.Subheader>
                        A button can have reduced padding.
                    </Header.Subheader>
                </Header>

                <ButtonCompactExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonCompactExample').default}
                </Highlighter>

                {/* Disabled */}
                <Header anchor="disabled" size="large" style={{ marginTop: '55px' }} sub>
                    Disabled
                    <Header.Subheader>
                        A disabled Button.
                    </Header.Subheader>
                </Header>

                <ButtonDisableExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonDisableExample').default}
                </Highlighter>

                {/* Fluid */}
                <Header anchor="fluid" size="large" style={{ marginTop: '55px' }} sub>
                    Fluid
                    <Header.Subheader>
                        A button can take on the width of the container.
                    </Header.Subheader>
                </Header>

                <ButtonFluidExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonFluidExample').default}
                </Highlighter>

                {/* Icon */}
                <Header anchor="icon" size="large" style={{ marginTop: '55px' }} sub>
                    Icon
                    <Header.Subheader>
                        A button can contain an icon.
                    </Header.Subheader>
                </Header>

                <ButtonIconExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonIconExample').default}
                </Highlighter>

                {/* Id */}
                <Header anchor="icon" size="large" style={{ marginTop: '55px' }} sub>
                    Id
                    <Header.Subheader>
                        A button can contain an id.
                    </Header.Subheader>
                </Header>

                <ButtonIdExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonIdExample').default}
                </Highlighter>

                {/* Inverse */}
                <Header anchor="color-inverted" size="large" style={{ marginTop: '55px' }} sub>
                    Inverse
                    <Header.Subheader>
                        Button colors can be inverted.
                    </Header.Subheader>
                </Header>

                <ButtonInverseExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonInverseExample').default}
                </Highlighter>

                {/* Outlined */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                Outlined
                    <Header.Subheader>
                        Buttons can have different border colors.
                    </Header.Subheader>
                </Header>

                <ButtonOutlineExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonOutlineExample').default}
                </Highlighter>

                {/* Relax */}
                <Header anchor="relax" size="large" style={{ marginTop: '55px' }} sub>
                    Relax
                    <Header.Subheader>
                        A button can have relaxed padding.
                    </Header.Subheader>
                </Header>

                <ButtonRelaxExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonRelaxExample').default}
                </Highlighter>

                {/* Width */}
                <Header anchor="width" size="large" style={{ marginTop: '55px' }} sub>
                    Width
                    <Header.Subheader>
                        A button can have a fixed width.
                    </Header.Subheader>
                </Header>

                <ButtonWidthExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./buttonWidthExample').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}

export default ElementsButton;
