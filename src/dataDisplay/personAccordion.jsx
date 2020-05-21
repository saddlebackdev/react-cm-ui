import React from 'react';
import { makeStyles, withTheme } from 'react-cm-ui/styles';
// import Collapse from '../utils/collapse';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
    },
}));

function PersonAccordion(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const onChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <div
                onClick={onChange}
            >
                toggle
            </div>

            <Collapse in={checked}>
                <div style={{ height: '200px' }}>test</div>
            </Collapse>
        </div>
    );
}

export default withTheme(PersonAccordion);
