import {
    Button,
    Grid,
    Popover,
    Select,
} from 'react-cm-ui';
import {
    upperCase,
} from 'lodash';
import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';

function PopoverSamplePlacement() {
    const [placementValue, setPlacementValue] = useState(null);

    const placementOptions = [
        {
            label: 'bottom-end',
            value: 'bottom-end',
        },
        {
            label: 'bottom-start',
            value: 'bottom-start',
        },
        {
            label: 'bottom',
            value: 'bottom',
        },
        {
            label: 'left-end',
            value: 'left-end',
        },
        {
            label: 'left-start',
            value: 'left-start',
        },
        {
            label: 'left',
            value: 'left',
        },
        {
            label: 'right-end',
            value: 'right-end',
        },
        {
            label: 'right-start',
            value: 'right-start',
        },
        {
            label: 'right',
            value: 'right',
        },
        {
            label: 'top-end',
            value: 'top-end',
        },
        {
            label: 'top-start',
            value: 'top-start',
        },
        {
            label: 'top',
            value: 'top',
        },
    ];

    useEffect(() => {
        setPlacementValue(placementOptions[2]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSelectChange = useCallback((selectedOption) => {
        setPlacementValue(selectedOption);
    }, []);

    return (
        <Grid>
            <Grid.Column sm={12}>
                <Popover
                    content={(
                        <div>
                            Some cool tooltip content
                        </div>
                    )}
                    placement={placementValue?.value}
                >
                    <Button>
                        {upperCase(placementValue?.label)}
                    </Button>
                </Popover>
            </Grid.Column>

            <Grid.Column sm={12}>
                <Select
                    label="Placement"
                    onChange={onSelectChange}
                    options={[
                        {
                            label: 'bottom-end',
                            value: 'bottom-end',
                        },
                        {
                            label: 'bottom-start',
                            value: 'bottom-start',
                        },
                        {
                            label: 'bottom',
                            value: 'bottom',
                        },
                        {
                            label: 'left-end',
                            value: 'left-end',
                        },
                        {
                            label: 'left-start',
                            value: 'left-start',
                        },
                        {
                            label: 'left',
                            value: 'left',
                        },
                        {
                            label: 'right-end',
                            value: 'right-end',
                        },
                        {
                            label: 'right-start',
                            value: 'right-start',
                        },
                        {
                            label: 'right',
                            value: 'right',
                        },
                        {
                            label: 'top-end',
                            value: 'top-end',
                        },
                        {
                            label: 'top-start',
                            value: 'top-start',
                        },
                        {
                            label: 'top',
                            value: 'top',
                        },
                    ]}
                    value={placementValue}
                />
            </Grid.Column>
        </Grid>
    );
}

export default PopoverSamplePlacement;
