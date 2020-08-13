import {
    Card,
    Grid,
    Radio,
    Typography,
} from 'react-cm-ui';
import {
    map,
    toString,
} from 'lodash';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React, { useState } from 'react';

const ALIGN_ITEMS_TYPES = [
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
];

const DIRECTION_TYPES = [
    'row',
    'row-reverse',
    'column',
    'column-reverse',
];

const JUSTIFY_CONTENT_TYPES = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-envenly',
];

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useStyles = makeStyles((theme) => ({
    gridExample: {
        height: 264,
    },
    card: {
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
    },
}));

function GridInteractive() {
    const [alignItemsType, setAlignItemsType] = useState(ALIGN_ITEMS_TYPES[1]);
    const [directionType, setDirectionType] = useState(DIRECTION_TYPES[0]);
    const [justifyContentType, setJustifyContentType] = useState(JUSTIFY_CONTENT_TYPES[1]);
    const [spacingNumber, setSpacingNumber] = useState(2);

    const classes = useStyles();

    const onAlignItemsRadioChange = (id) => {
        setAlignItemsType(id);
    };

    const onDirectionRadioChange = (id) => {
        setDirectionType(id);
    };

    const onJustifyContentRadioChange = (id) => {
        setJustifyContentType(id);
    };

    const onSpacingRadioChange = (id) => {
        setSpacingNumber(id);
    };

    return (
        <div>
            <Grid
                alignItems={alignItemsType}
                classes={{
                    root: classes.gridExample,
                }}
                direction={directionType}
                justifyContent={justifyContentType}
                spacing={spacingNumber}
            >
                <Grid.Column>
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        column 1
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        column 2
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        column 3
                    </Card>
                </Grid.Column>
            </Grid>

            <Grid spacing={2}>
                <Grid.Column>
                    <Card>
                        <Grid spacing={2}>
                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    varient="h4"
                                >
                                    Align Items
                                </Typography>

                                <Grid>
                                    {map(ALIGN_ITEMS_TYPES, (type) => (
                                        <Grid.Column
                                            key={type}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={alignItemsType === type}
                                                id={type}
                                                label={type}
                                                name="alignItemsRadioGroup"
                                                onChange={onAlignItemsRadioChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    varient="h4"
                                >
                                    Direction
                                </Typography>

                                <Grid>
                                    {map(DIRECTION_TYPES, (type) => (
                                        <Grid.Column
                                            key={type}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={directionType === type}
                                                id={type}
                                                label={type}
                                                name="directionRadioGroup"
                                                onChange={onDirectionRadioChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    varient="h4"
                                >
                                    Justify Content
                                </Typography>

                                <Grid>
                                    {map(JUSTIFY_CONTENT_TYPES, (type) => (
                                        <Grid.Column
                                            key={type}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={justifyContentType === type}
                                                id={type}
                                                label={type}
                                                name="justifyContentRadioGroup"
                                                onChange={onJustifyContentRadioChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    varient="h4"
                                >
                                    Spacing
                                </Typography>

                                <Grid>
                                    {map(SPACINGS, (number) => (
                                        <Grid.Column
                                            key={number}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={spacingNumber === number}
                                                id={number}
                                                label={toString(number)}
                                                name="spacingRadioGroup"
                                                onChange={onSpacingRadioChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default GridInteractive;
