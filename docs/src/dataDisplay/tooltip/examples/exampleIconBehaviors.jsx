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
    const classes = useStyles();

    let triggered = false;

    const onMouseEnter = useCallback(() => {
        if (triggered) {
            setIsOpen(true);
        }
    }, [setIsOpen]);

    const onMouseLeave = useCallback(() => {
        triggered = true;

        setIsOpen(false);
    }, [setIsOpen]);

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
