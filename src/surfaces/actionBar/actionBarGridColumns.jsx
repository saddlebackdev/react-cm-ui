import {
    map,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import {
    UI_CLASS_NAME,
    BEM_ACTION_BAR,
    BEM_ACTION_BAR_GRID_COLUMN,
} from '../../global/constants';
import { COLUMNS_PROP_TYPES } from './actionBarConstants';
// eslint-disable-next-line import/no-cycle
import ActionBarActionsButton from './actionBarActionsButton';
import ActionBarSearch from './actionBarSearch';
import Button from '../../inputs/button';
import DropdownButton from '../../inputs/dropdownButton';
import Grid from '../../layout/grid';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    columns: COLUMNS_PROP_TYPES,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onMobileSearchIconToggle: PropTypes.func.isRequired,
};

const defaultProps = {
    columns: [],
    isMobileSearch: false,
    isMobileSearchVisible: false,
    moduleType: null,
};

const useStyles = makeStyles((theme) => ({
    iconButtons: {},
    isIconButtonColumn: {},
    isDivided: {},
    notDivided: {},
    root: {
        paddingBottom: 0,
        paddingTop: 0,
        position: 'relative',
        '&$isDivided': {
            '&::after': {
                backgroundColor: theme.palette.border.primary,
                content: '""',
                height: 29,
                marginTop: -14.5,
                position: 'absolute',
                right: 0,
                top: '50%',
                width: 1,
            },
            '& + $notDivided:not($isIconButtonColumn)': {
                marginLeft: theme.spacing(0.5),
            },
        },
        '& $iconButtons': {
            margin: [[0, theme.spacing(0.5)]],
        },
        '&$isIconButtonColumn:first-child': {
            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(0.5),
            },
            [theme.breakpoints.up('md')]: {
                paddingLeft: 0,
            },
        },
    },
}));

function ActionBarGridColumn(props) {
    const {
        columns,
        isMobileSearch,
        isMobileSearchVisible,
        moduleType,
        onMobileSearchIconToggle,
    } = props;

    const [actionBarNode, setActionBarNode] = useState(null);

    const rootRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => {
            setActionBarNode(rootRef.current.closest(`.${UI_CLASS_NAME}.${BEM_ACTION_BAR}`));
        }, 100);
    }, []);

    let gridColumnKeyNum = 1;

    return map(columns, (column) => {
        const {
            actionsButton,
            button,
            dropdownButton,
            iconBack,
            iconFilter,
            iconGrid,
            iconSearch,
            iconSettings,
            iconTable,
            jsx,
            search,
        } = column;

        const isIconButtonColumn = iconBack ||
            iconFilter ||
            iconGrid ||
            iconSearch ||
            iconSettings ||
            iconTable;

        const rootClasses = ClassNames(
            BEM_ACTION_BAR_GRID_COLUMN,
            column.className,
            classes.root,
            {
                [classes.isIconButtonColumn]: isIconButtonColumn,
                [classes.isDivided]: column.divide,
                [classes.notDivided]: !column.divide,
            },
        );

        // eslint-disable-next-line no-plusplus
        const gridColumnKey = `${BEM_ACTION_BAR_GRID_COLUMN}-${gridColumnKeyNum++}`;

        if (
            !actionsButton &&
            !button &&
            !dropdownButton &&
            !iconBack &&
            !iconFilter &&
            !iconGrid &&
            !iconSearch &&
            !iconSettings &&
            !iconTable &&
            !jsx &&
            !search
        ) {
            console.warn( // eslint-disable-line no-console
                `${'<ActionsBar>\'s column object must have one of the ' +
                'following properties: actionsButton, button, dropdownButton, iconBack, iconFilter, iconGrid, iconSearch, iconSettings, iconTable, jsx, or search.' +
                'Please check this object '}${JSON.stringify(column)}`,
            );

            return null;
        }

        let dropdownButtonOptionKeyNum = 1;

        return (
            <Grid.Column
                className={rootClasses}
                key={gridColumnKey}
                lg={column.lg}
                md={column.md}
                ref={rootRef}
                sm={column.sm}
                xl={column.xl}
            >
                <div
                    className={classes.gridColumnInnerContainer}
                    style={{
                        ...column.style,
                    }}
                >
                    {actionsButton && (
                        <ActionBarActionsButton
                            actionBarNode={actionBarNode}
                            className={actionsButton.className}
                            drawerContainer={actionsButton.drawerContainer}
                            iconBackgroundColor={actionsButton.iconBackgroundColor}
                            iconBackgroundHighlightColor={
                                actionsButton.iconBackgroundHighlightColor
                            }
                            iconType={actionsButton.iconType}
                            id={actionsButton.id}
                            isMobileSearchVisible={isMobileSearchVisible}
                            header={actionsButton.header}
                            moduleType={moduleType}
                            options={actionsButton.options}
                            style={actionsButton.style}
                        />
                    )}

                    {button && (
                        <Button
                            className={button.className}
                            color={button.color}
                            disabled={!!button.disabled}
                            icon={button.iconType && !button.label}
                            id={button.id}
                            onClick={button.onClick}
                            style={button.style}
                            tabIndex={button.tabIndex}
                        >
                            {
                                button.iconType && (
                                    <Icon type={button.iconType} />
                                )
                            }

                            {
                                button.label && (
                                    <span>
                                        {button.label}
                                    </span>
                                )
                            }
                        </Button>
                    )}

                    {dropdownButton && (
                        <DropdownButton
                            className={dropdownButton.className}
                            color={dropdownButton.color}
                            disable={dropdownButton.disable}
                            iconType={dropdownButton.iconType}
                            id={dropdownButton.id}
                            label={dropdownButton.label}
                            onClick={dropdownButton.onClick}
                            style={dropdownButton.style}
                            tabIndex={dropdownButton.tabIndex}
                            title={dropdownButton.title}
                        >
                            {map(dropdownButton.options, (option) => {
                                dropdownButtonOptionKeyNum += 1;

                                return (
                                    <DropdownButton.Option
                                        className={option.className}
                                        disabled={!!option.disabled}
                                        id={option.id}
                                        key={`${BEM_ACTION_BAR}_dropdown_button_option-${dropdownButtonOptionKeyNum}`}
                                        label={option.label}
                                        onClick={option.onClick}
                                        onKeyDown={option.onKeyDown}
                                        style={option.style}
                                        tabIndex={option.tabIndex}
                                    />
                                );
                            })}
                        </DropdownButton>
                    )}

                    {iconBack && (
                        <Icon
                            className={ClassNames(
                                iconBack.className,
                                classes.iconButtons,
                            )}
                            color={
                                iconBack.selected ?
                                    'highlight' :
                                    null
                            }
                            id={iconBack.id}
                            onClick={iconBack.onClick}
                            tabIndex={0}
                            title={iconBack.title || 'Back'}
                            type="chevron-left"
                        />
                    )}

                    {iconFilter && (
                        <Icon
                            className={ClassNames(
                                iconFilter.className,
                                classes.iconButtons,
                            )}
                            color={
                                iconFilter.selected ||
                                iconFilter.isFiltering ?
                                    'highlight' :
                                    null
                            }
                            id={iconFilter.id}
                            onClick={iconFilter.onClick}
                            tabIndex={0}
                            title={iconFilter.title || 'Filter'}
                            type="filter"
                        />
                    )}

                    {iconGrid && (
                        <Icon
                            className={ClassNames(
                                iconGrid.className,
                                classes.iconButtons,
                            )}
                            color={
                                iconGrid.selected ?
                                    'highlight' :
                                    null
                            }
                            id={iconGrid.id}
                            onClick={iconGrid.onClick}
                            tabIndex={0}
                            title={iconGrid.title || 'Grid View'}
                            type="grid"
                        />
                    )}

                    {iconSearch && (
                        <Icon
                            className={ClassNames(
                                `${BEM_ACTION_BAR}--search_icon`,
                                iconSearch.className,
                                classes.iconButtons,
                            )}
                            color={
                                isMobileSearchVisible ?
                                    'highlight' :
                                    null
                            }
                            id={iconSearch.id}
                            onClick={onMobileSearchIconToggle}
                            tabIndex={0}
                            title={iconSearch.title || 'Search'}
                            type="search"
                        />
                    )}

                    {iconSettings && (
                        <Icon
                            className={ClassNames(
                                iconSettings.className,
                                classes.iconButtons,
                            )}
                            color={
                                iconSettings.selected ||
                                iconSettings.isCustom ?
                                    'highlight' :
                                    null
                            }
                            id={iconSettings.id}
                            onClick={iconSettings.onClick}
                            tabIndex={0}
                            title={iconSettings.title || 'Settings'}
                            type="settings"
                        />
                    )}

                    {iconTable && (
                        <Icon
                            className={ClassNames(
                                iconTable.className,
                                classes.iconButtons,
                            )}
                            color={
                                iconTable.selected ?
                                    'highlight' :
                                    null
                            }
                            id={iconTable.id}
                            onClick={iconTable.onClick}
                            tabIndex={0}
                            title={iconTable.title || 'Table View'}
                            type="list"
                        />
                    )}

                    {search && (
                        <ActionBarSearch
                            classes={search.classes}
                            id={search.id}
                            isMobileSearch={isMobileSearch}
                            isMobileSearchVisible={isMobileSearchVisible}
                            onChange={search.onChange}
                            onClearClick={search.onClearClick}
                            onKeyDown={search.onKeyDown}
                            onSearchClick={search.onSearchClick}
                            onSearchKeyDown={search.onSearchKeyDown}
                            value={search.value}
                        />
                    )}

                    {jsx}
                </div>
            </Grid.Column>
        );
    });
}

ActionBarGridColumn.propTypes = propTypes;
ActionBarGridColumn.defaultProps = defaultProps;

export default ActionBarGridColumn;
