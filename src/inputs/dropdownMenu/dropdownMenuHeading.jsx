import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';
import Typography from '../../dataDisplay/typography';

const propTypes = {
    children: PropTypes.node.isRequired,
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
        padding: [[spacing(1), spacing(2), spacing(1)]],
        '&:first-child': {
            paddingTop: spacing(2),
        },
    },
}));

function DropdownMenuHeading(props) {
    const {
        children,
    } = props;

    const classes = useStyles(props);

    return (
        <Typography
            classes={{
                root: classes.root,
            }}
            color="textSecondary"
            component="div"
            variant="body1"
        >
            {children}
        </Typography>
    );
}

DropdownMenuHeading.propTypes = propTypes;
DropdownMenuHeading.defaultProps = defaultProps;

export default DropdownMenuHeading;
