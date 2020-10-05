import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { BEM_FILTERS_RAIL } from '../../global/constants';
import A from '../../navigation/a';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    disable: PropTypes.bool,
    id: PropTypes.string,
    onClear: PropTypes.func,
};

const defaultProps = {
    classes: null,
    disable: false,
    id: null,
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
        id,
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
            id={id ? `${id}--clear_button` : null}
            onClick={onClear}
        >
            Clear Filters
        </A>
    );
}

FiltersRailClear.propTypes = propTypes;
FiltersRailClear.defaultProps = defaultProps;

export default FiltersRailClear;
