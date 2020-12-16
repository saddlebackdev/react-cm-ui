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
    const [isTriggered, setIsTriggered] = useState(false);
    const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);

    const classes = useStyles();

    const onSelectMouseEnter = useCallback(() => {
        if (isTriggered && !selectMenuIsOpen) {
            setIsOpen(true);
        }
    }, [
        isTriggered,
        selectMenuIsOpen,
        setIsOpen,
    ]);

    const onSelectMouseLeave = useCallback(() => {
        setIsTriggered(true);
        setIsOpen(false);
    }, [setIsOpen]);

    const onSelectOpen = useCallback(() => {
        setSelectMenuIsOpen(true);
        setIsOpen(false);
    }, [setIsOpen, setSelectMenuIsOpen]);

    const onSelectClose = useCallback(() => {
        setSelectMenuIsOpen(false);
        setIsOpen(false);
    }, [setIsOpen, setSelectMenuIsOpen]);

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
