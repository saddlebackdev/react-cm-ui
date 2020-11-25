import {
    Icon,
    Tooltip,
} from 'react-cm-ui';
import React, {
    useCallback,
    useState,
} from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 67,
        padding: [[0, 18]],
    },
}));

function ExampleIconBehaviors() {
    const [isOpen, setIsOpen] = useState(true);
    const [isTriggered, setIsTriggered] = useState(false);

    const classes = useStyles();

    const onMouseEnter = useCallback(() => {
        if (isTriggered) {
            setIsOpen(true);
        }
    }, [isTriggered, setIsOpen]);

    const onMouseLeave = useCallback(() => {
        setIsTriggered(true);
        setIsOpen(false);
    }, [setIsOpen, setIsTriggered]);

    return (
        <div
            className={classes.root}
        >
            <Tooltip
                open={isOpen}
                title="Expand"
            >
                <Icon
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    size={24}
                    type="expand"
                />
            </Tooltip>
        </div>
    );
}

export default ExampleIconBehaviors;
