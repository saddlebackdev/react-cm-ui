import PropTypes from 'prop-types';
import React from 'react';
import A from '../../navigation/a';
import makeStyles from '../../styles/makeStyles';
import { isFunction } from 'lodash';

const propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    disable: PropTypes.bool,
    onClear: PropTypes.func,
};

const defaultProps = {
    classes: null,
    disable: false,
    onClear: null,
};

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: theme.typography.fontSize,
    },
}));

function FiltersRailClear(props) {
    const {
        disable,
        onClear,
    } = props;

    const classes = useStyles();

    if (!isFunction(onClear)) {
        return null;
    }

    return (
        <A
            classes={{
                root: classes.root,
            }}
            disable={disable}
            onClick={onClear}
        >
            Clear Filters
        </A>
    );
}

FiltersRailClear.propTypes = propTypes;
FiltersRailClear.defaultProps = defaultProps;

export default FiltersRailClear;
