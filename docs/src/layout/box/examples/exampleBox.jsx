import {
    Box,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ExampleBox() {
    return (
        <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            m={1}
            mt={2}
        >
            <Typography>
                <Box
                    color="warning.main"
                >
                    Wowzers!
                </Box>
            </Typography>
        </Box>
    );
}

export default ExampleBox;
