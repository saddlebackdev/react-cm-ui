import PropTypes from 'prop-types';
import { GRID_SIZES } from '../../layout/grid/gridConstants';
import Utils from '../../utils/utils';

export const SM_HEIGHT = 50;

export const MD_HEIGHT = 70;

export const COLUMNS_PROP_TYPES = PropTypes.arrayOf(PropTypes.shape({
    button: PropTypes.shape({}),
    dropdownButton: PropTypes.shape({
        className: PropTypes.string,
        color: PropTypes.oneOf(Utils.colorEnums()),
        disable: PropTypes.bool,
        iconType: PropTypes.oneOf(['chevron-down', 'plus']),
        id: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.shape({}),
        title: PropTypes.string,
    }),
    jsx: PropTypes.node,
    lg: PropTypes.oneOf(GRID_SIZES),
    list: PropTypes.arrayOf(PropTypes.shape({
        actionsButton: PropTypes.shape({}),
        drawerContainer: PropTypes.node,
        jsx: PropTypes.node,
        iconBack: PropTypes.shape({}),
        iconFilter: PropTypes.shape({}),
        iconGrid: PropTypes.shape({}),
        iconSearch: PropTypes.shape({}),
        iconSettings: PropTypes.shape({}),
        iconTable: PropTypes.shape({}),
    })),
    md: PropTypes.oneOf(GRID_SIZES),
    search: PropTypes.shape({
        id: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onClearClick: PropTypes.func.isRequired,
        onKeyDown: PropTypes.func.isRequired,
        onSearchClick: PropTypes.func,
        onSearchKeyDown: PropTypes.func,
        value: PropTypes.string,
    }),
    sm: PropTypes.oneOf(GRID_SIZES),
    xl: PropTypes.oneOf(GRID_SIZES),
}));
