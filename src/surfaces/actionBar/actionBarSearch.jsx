import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_ACTION_BAR_SEARCH,
    ENTER_KEY_CODE,
} from '../../global/constants';
import Icon from '../../dataDisplay/icon';
import Input from '../../inputs/input';
import withStyles from '../../styles/withStyles';

const propTypes = {
    classes: PropTypes.shape({
        clearButtonContainer: PropTypes.string,
        input: PropTypes.string,
        isMdBreakpoint: PropTypes.string,
        isSmBreakpoint: PropTypes.string,
        magnifyingGlassIconContainer: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onClearClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func,
    onSearchKeyDown: PropTypes.func,
    value: PropTypes.string,
};

const defaultProps = {
    id: undefined,
    isMobileSearch: false,
    isMobileSearchVisible: false,
    onSearchClick: null,
    onSearchKeyDown: null,
    value: '',
};

const styles = (theme) => ({
    clearButtonContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 44,
        justifyContent: 'center',
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
        transform: 'translateY(2.5px)',
        width: 44,
        zIndex: 2,
        '&$isSmBreakpoint': {
            paddingTop: 2.5,
        },
        '&$isMdBreakpoint': {
            boxShadow: [[-1, 0, 0, 0, theme.palette.border.primary]],
        },
    },
    input: {
        zIndex: 1,
        '&$isMdBreakpoint': {
            '& input': {
                padding: [[0, 44, 0, 38]],
            },
        },
    },
    isMdBreakpoint: {},
    isSmBreakpoint: {},
    magnifyingGlassIconContainer: {
        alignItems: 'center',
        display: 'flex',
        height: 44,
        left: 0,
        margin: [[0, theme.spacing(1)]],
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    root: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            margin: [[0, theme.spacing(1), 0, theme.spacing(0.5)]],
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
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onSearchKeyDown = this.onSearchKeyDown.bind(this);

        this.rootRef = React.createRef();
    }

    onInputChange(value) {
        const { onChange } = this.props;

        onChange(value);
    }

    onClearClick(event) {
        const { onChange, onClearClick } = this.props;

        if (isFunction(onClearClick)) {
            onClearClick(event);
        } else {
            onChange('');
        }
    }

    onClearKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.onClearClick(event);
        }
    }

    onInputKeyDown(event) {
        const { onKeyDown } = this.props;

        if (isFunction(onKeyDown) && event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();

            onKeyDown(event);
        }
    }

    onSearchClick(event) {
        const { onSearchClick } = this.props;

        if (isFunction(onSearchClick)) {
            onSearchClick(event);
        }
    }

    onSearchKeyDown(event) {
        const { onSearchKeyDown } = this.props;

        if (isFunction(onSearchKeyDown) && event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();

            onSearchKeyDown(event);
        }
    }

    render() {
        const {
            classes,
            id,
            isMobileSearch,
            isMobileSearchVisible,
            value,
        } = this.props;

        const rootClasses = ClassNames(
            BEM_ACTION_BAR_SEARCH,
            classes.root,
            {
                [`${BEM_ACTION_BAR_SEARCH}-mobile`]: isMobileSearch,
                [`${BEM_ACTION_BAR_SEARCH}-mobile-show`]: isMobileSearch && isMobileSearchVisible,
            },
        );

        return (
            <div
                className={rootClasses}
                ref={this.rootRef}
            >
                {!isMobileSearch && (
                    <div
                        className={classes.magnifyingGlassIconContainer}
                    >
                        <Icon
                            compact
                            onClick={this.onSearchClick}
                            onKeyDown={this.onSearchKeyDown}
                            title="Search"
                            type="search"
                            tabIndex={0}
                        />
                    </div>
                )}

                <Input
                    className={ClassNames(
                        `${BEM_ACTION_BAR_SEARCH}_input`,
                        classes.input,
                        {
                            [classes.isMdBreakpoint]: !isMobileSearch,
                        },
                    )}
                    fluid
                    id={id}
                    onChange={this.onInputChange}
                    onKeyDown={this.onInputKeyDown}
                    placeholder="Search"
                    tabIndex={0}
                    value={value}
                />

                <div
                    className={ClassNames(
                        classes.clearButtonContainer,
                        {
                            [classes.isMdBreakpoint]: !isMobileSearch,
                            [classes.isSmBreakpoint]: isMobileSearch,
                        },
                    )}
                >
                    <Icon
                        color={value ? 'primary' : 'disable'}
                        compact
                        onClick={this.onClearClick}
                        onKeyDown={this.onClearKeyDown}
                        tabIndex={0}
                        title="Clear Search"
                        type="times-circle"
                    />
                </div>
            </div>
        );
    }
}

ActionBarSearch.propTypes = propTypes;
ActionBarSearch.defaultProps = defaultProps;

export default withStyles(styles)(ActionBarSearch);
