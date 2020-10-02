import React from 'react';
import {
    Button,
    Popover,
    Grid,
} from 'react-cm-ui';

function PopoverSample() {
    const popoverContent = (
        <div>
            Some cool tooltip content
        </div>
    );
    return (
        <Grid columns={4}>
            <Grid.Row>
                <Grid.Column>
                    <Popover
                        content={popoverContent}
                        placement="top"
                    >
                        <Button>Top</Button>
                    </Popover>
                </Grid.Column>

                <Grid.Column>
                    <Popover
                        content={popoverContent}
                        placement="right"
                    >
                        <Button>Right</Button>
                    </Popover>
                </Grid.Column>

                <Grid.Column>
                    <Popover
                        content={popoverContent}
                        placement="bottom"
                    >
                        <Button>Bottom</Button>
                    </Popover>
                </Grid.Column>

                <Grid.Column>
                    <Popover
                        content={popoverContent}
                        placement="left"
                    >
                        <Button>Left</Button>
                    </Popover>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default PopoverSample;
