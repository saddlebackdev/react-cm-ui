import PropTypes from 'prop-types';
import React from 'react';
import Divider from '../../dataDisplay/divider';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};

const defaultProps = {
    classes: undefined,
};

const useStyles = makeStyles(({
    spacing,
}) => ({
    root: {
        margin: [[spacing(1), spacing(2)]],
    },
}));

function DropdownMenuHeading(props) {
    const classes = useStyles(props);

    return (
        <Divider
            classes={{
                root: classes.root,
            }}
            designVersion={2}
        />
    );
}

DropdownMenuHeading.propTypes = propTypes;
DropdownMenuHeading.defaultProps = defaultProps;

export default DropdownMenuHeading;
