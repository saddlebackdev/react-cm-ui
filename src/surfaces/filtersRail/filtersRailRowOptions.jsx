import ClassNames from 'classnames';
import React from 'react';
import {
    PROP_TYPES_ROW_OPTIONS,
    PROP_TYPES_ROW_TYPE,
} from './constants';
import {
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import FiltersRailCheckbox from './filtersRailCheckbox';
import FiltersRailPill from './filtersRailPill';
import FiltersRailRadio from './filtersRailRadio';
import FiltersRailSelect from './filtersRailSelect';

const propTypes = {
    options: PROP_TYPES_ROW_OPTIONS,
    type: PROP_TYPES_ROW_TYPE.isRequired,
};

const defaultProps = {
    options: [],
};

function FiltersRailRowOptions(props) {
    const {
        options,
        type,
    } = props;

    const rootContainer = ClassNames(
        BEM_FILTERS_RAIL_ROW,
    );

    return (
        <div
            className={rootContainer}
        >
            {type === 'checkbox' && (
                <FiltersRailCheckbox />
            )}

            {type === 'pill' && (
                <FiltersRailPill />
            )}

            {type === 'radio' && (
                <FiltersRailRadio />
            )}

            {type === 'select' && (
                <FiltersRailSelect />
            )}
        </div>
    );
}

FiltersRailRowOptions.propTypes = propTypes;
FiltersRailRowOptions.defaultProps = defaultProps;

export default FiltersRailRowOptions;
