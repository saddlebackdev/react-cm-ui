import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../dataDisplay/icon';
import Input from '../../inputs/input';
import withStyles from '../../styles/withStyles';
import Grid from '../../layout/grid';

const propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }).isRequired,
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onClearClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    value: PropTypes.string,
};

const defaultProps = {
    id: undefined,
    isMobileSearch: false,
    isMobileSearchVisible: false,
    onClearClick: undefined,
    onKeyDown: undefined,
    style: {},
    value: '',
};

const styles = (theme) => ({
    actionsContainer: {
        display: 'flex',
        pointerEvents: 'none',
        height: 44,
        position: 'absolute',
        width: 'calc(100% - 16px)',
        zIndex: 2,
    },
    clearButton: {
        height: 16,
        width: 16,
    },
    clearButtonContainer: {
        alignItems: 'center',
        boxShadow: [[-1, 0, 0, 0, theme.palette.border.primary]],
        display: 'flex',
        height: 44,
        justifyContent: 'center',
        pointerEvents: 'auto',
        width: 44,
    },
    input: {
        zIndex: 1,
        '& input': {
            padding: [[0, 44, 0, 38]],
        },
    },
    magnifyingGlassIcon: {
        pointerEvents: 'auto',
    },
    magnifyingGlassIconContainer: {
        alignItems: 'center',
        display: 'flex',
        margin: [[0, 11]],
    },
    root: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: [[0, 10.5, 0, 5.5]],
        },
    },
});

class ActionBarSearch extends React.PureComponent {
    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onClearKeyDown = this.onClearKeyDown.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onMagnifyingGlassClick = this.onMagnifyingGlassClick.bind(this);
        this.onMagnifyingGlassKeyDown = this.onMagnifyingGlassKeyDown.bind(this);
    }

    onInputChange(value) {
        const { onChange } = this.props;

        onChange(value);
    }

    onClearClick() {
        const { onChange, onClearClick } = this.props;

        if (_.isFunction(onClearClick)) {
            onClearClick();
        } else {
            onChange('');
        }
    }

    onClearKeyDown(event) {
        if (event.keyCode === 13) {
            this.onClearClick();
        }
    }

    onInputKeyDown(event) {
        const { onKeyDown } = this.props;

        if (_.isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    onMagnifyingGlassClick() {}

    onMagnifyingGlassKeyDown() {}

    render() {
        const {
            classes,
            id,
            isMobileSearch,
            isMobileSearchVisible,
            style,
            value,
        } = this.props;

        const rootClasses = ClassNames(
            'action_bar--search',
            classes.root,
            {
                'action_bar--search-mobile': isMobileSearch,
                'action_bar--search-mobile-show': isMobileSearch && isMobileSearchVisible,
            },
        );

        let magnificationIcon = null;

        if (!isMobileSearch) {
            magnificationIcon = (
                <Icon
                    className={classes.magnifyingGlassIcon}
                    compact
                    title="Search"
                    type="search"
                />
            );
        }

        return (
            <div
                className={rootClasses}
            >
                <div
                    className={classes.actionsContainer}
                >
                    <Grid
                        alignItems="center"
                    >
                        <Grid.Column
                            sm
                        >
                            <div
                                className={classes.magnifyingGlassIconContainer}
                            >
                                <Icon
                                    className={classes.magnifyingGlassIcon}
                                    compact
                                    onClick={this.onMagnifyingGlassClick}
                                    onKeyDown={this.onMagnifyingGlassKeyDown}
                                    title="Search"
                                    type="search"
                                />
                            </div>
                        </Grid.Column>

                        <Grid.Column
                            sm="auto"
                        >
                            <div
                                className={classes.clearButtonContainer}
                            >
                                <div
                                    className={ClassNames(classes.clearButton)}
                                    onClick={this.onClearClick}
                                    onKeyDown={this.onClearKeyDown}
                                    role="button"
                                    tabIndex={-1}
                                >
                                    <Icon
                                        color={value ? 'alternate' : 'disable'}
                                        compact
                                        title="Clear Search"
                                        type="times-circle"
                                    />
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>

                <Input
                    className={ClassNames(
                        'action_bar--search_input',
                        classes.input,
                    )}
                    fluid
                    id={id}
                    onChange={this.onInputChange}
                    onKeyDown={this.onInputKeyDown}
                    placeholder="Search"
                    value={value}
                    style={style}
                />
            </div>
        );
    }
}

ActionBarSearch.propTypes = propTypes;
ActionBarSearch.defaultProps = defaultProps;

export default withStyles(styles)(ActionBarSearch);
