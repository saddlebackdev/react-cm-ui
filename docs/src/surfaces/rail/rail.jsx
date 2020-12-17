import {
    Card,
    Checkbox,
    Typography,
    Rail,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const positionSample = `import React from 'react';
import { Rail } from 'react-cm-ui';

export default class PositionSample extends React.Component {
    render() {
        return (
            <div>
                <Rail position="left">
                    <Typography weight="bold">Select an Option</Typography>

                    <Checkbox fluid label="Option 1" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                    <Checkbox fluid label="Option 2" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                    <Checkbox fluid label="Option 3" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                </Rail>

                <Rail position="right">
                    <Typography weight="bold">Select an Option</Typography>

                    <Checkbox fluid label="Option 1" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                    <Checkbox fluid label="Option 2" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                    <Checkbox fluid label="Option 3" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                </Rail>
            </div>
        );
    }
}`;

export default class ElementsRail extends React.PureComponent {
    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'position *',
                type: 'enum',
                default: '',
                description: 'A Rail can be on the left or right side.',
                allowedTypes: 'left, right'
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the radio input\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="rail">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Position */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        Position
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Position a Rail to either the left or right.
                    </Typography>

                    <Block style={{ height: '400px', position: 'relative' }}>
                        <Rail position="left">
                            <Typography weight="bold">Select an Option</Typography>

                            <Checkbox fluid label="Option 1" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                            <Checkbox fluid label="Option 2" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                            <Checkbox fluid label="Option 3" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                        </Rail>

                        <Rail position="right">
                            <Typography weight="bold">Select an Option</Typography>

                            <Checkbox fluid label="Option 1" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                            <Checkbox fluid label="Option 2" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                            <Checkbox fluid label="Option 3" labelWeight="semibold" size="small" style={{ marginBottom: '11px' }} />
                        </Rail>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {positionSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
