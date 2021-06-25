import {
    Button,
    Icon,
    Snackbar,
} from 'react-cm-ui';
import React from 'react';

function ExampleSnackbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClick = () => {
        setIsOpen(true);
    };

    const onCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    return (
        <div>
            <Button
                onClick={onClick}
            >
                Open snackbar
            </Button>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={isOpen}
                autoHideDuration={6000}
                onClose={onCloseSnackbar}
                message={(
                    <React.Fragment>
                        <Icon
                            color="success"
                            inverse
                            style={{
                                marginRight: 5,
                            }}
                            type="check"
                        />

                        Acknowledgement Notification
                    </React.Fragment>
                )}
            />
        </div>
    );
}

export default ExampleSnackbar;
