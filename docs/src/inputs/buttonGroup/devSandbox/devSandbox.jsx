import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ButtonGroupDefault from '../examples/buttonGroupDefault';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/inputs/buttonGroup/buttonGroup';
/* eslint-enable import/no-named-default, import/extensions */

function ButtonGroupDevSandbox() {
    const {
        description: componentDescription,
        displayName: componentName,
    } = componentDoc;

    return (
        <Main page={camelCase(componentName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {componentDescription}
                    </Typography>

                    <Heading
                        anchorLink="auto-complete"
                        variant="h2"
                    >
                        Button Group
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The ButtonGroup component can be used to group related buttons.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/buttonGroupDefault').default}
                >
                    <ButtonGroupDefault />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default ButtonGroupDevSandbox;
