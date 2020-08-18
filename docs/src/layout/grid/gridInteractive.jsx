import {
    Card,
    Grid,
    Input,
    Radio,
    Typography,
} from 'react-cm-ui';
import {
    map,
    times,
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

const WRAP_TYPES = [
    'nowrap',
    'wrap-reverse',
    'wrap',
];

const useStyles = makeStyles((theme) => ({
    gridExample: {
        minHeight: 264,
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
    const [numberOfColumns, setNumberOfColumns] = useState(3);
    const [spacingNumber, setSpacingNumber] = useState(2);
    const [wrapType, setWrapType] = useState(WRAP_TYPES[2]);

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

    const onNumberOfColumnsChange = (value) => {
        setNumberOfColumns(value);
    };

    const onSpacingRadioChange = (id) => {
        setSpacingNumber(id);
    };

    const onWrapRadioChange = (id) => {
        setWrapType(id);
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
                wrap={wrapType}
            >
                {times(numberOfColumns, (number) => (
                    <Grid.Column
                        key={number}
                    >
                        <Card
                            classes={{
                                root: classes.card,
                            }}
                        >
                            {`col ${number + 1}`}
                        </Card>
                    </Grid.Column>
                ))}
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
                                    variant="h4"
                                >
                                    Grid Props
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="h5"
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
                                    variant="h5"
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
                                    variant="h5"
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
                                    variant="h5"
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

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    Wrap
                                </Typography>

                                <Grid>
                                    {map(WRAP_TYPES, (type) => (
                                        <Grid.Column
                                            key={type}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={wrapType === type}
                                                id={type}
                                                label={type}
                                                name="wrapRadioGroup"
                                                onChange={onWrapRadioChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                >
                                    Grid Columns
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    Number of Columns
                                </Typography>

                                <Input
                                    max={36}
                                    min={1}
                                    onChange={onNumberOfColumnsChange}
                                    type="number"
                                    value={numberOfColumns}
                                    style={{
                                        width: 60,
                                    }}
                                />
                            </Grid.Column>
                        </Grid>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default GridInteractive;
