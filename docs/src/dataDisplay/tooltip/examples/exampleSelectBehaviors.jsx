import {
    Select,
    Tooltip,
} from 'react-cm-ui';
import React, {
    useCallback,
    useState,
} from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 80,
    },
}));

function ExampleSelectBehaviors() {
    const [isOpen, setIsOpen] = useState(true);
    const classes = useStyles();

    let selectMenuIsOpen = false;
    let triggered = false;

    const onSelectMouseEnter = useCallback(() => {
        if (triggered && !selectMenuIsOpen) {
            setIsOpen(true);
        }
    }, [setIsOpen]);

    const onSelectMouseLeave = useCallback(() => {
        triggered = true;

        setIsOpen(false);
    }, [setIsOpen]);

    const onSelectOpen = useCallback(() => {
        selectMenuIsOpen = true;

        setIsOpen(false);
    }, [setIsOpen]);

    const onSelectClose = useCallback(() => {
        selectMenuIsOpen = false;

        setIsOpen(false);
    }, [setIsOpen]);

    const options = [
        {
            label: 'In Training',
            value: 1,
        },
        {
            label: 'Not In Training',
            value: 2,
        },
    ];

    return (
        <div
            className={classes.root}
        >
            <Tooltip
                open={isOpen}
                title="Ministry Member Status"
            >
                <Select
                    onClose={onSelectClose}
                    onOpen={onSelectOpen}
                    onMouseEnter={onSelectMouseEnter}
                    onMouseLeave={onSelectMouseLeave}
                    options={options}
                    value={options[0]}
                />
            </Tooltip>
        </div>
    );
}

export default ExampleSelectBehaviors;
