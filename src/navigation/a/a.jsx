import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
    useCallback,
} from 'react';
import { ENTER_KEY_CODE } from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    disable: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    disable: false,
    id: null,
    onClick: null,
    onKeyDown: null,
    tabIndex: -1,
};

const useStyles = makeStyles(({
    palette,
    typography,
}) => ({
    isDisabled: {},
    root: {
        color: palette.cyan[500],
        cursor: 'pointer',
        fontWeight: typography.fontWeightMedium,
        textDecoration: 'none',
        '&$isDisabled': {
            color: palette.text.disable,
            cursor: 'default',
        },
        '&:focus': {
            boxShadow: `0 0 0 1px ${palette.active.main}`,
        },
    },
}));

function A(props) {
    const {
        children,
        className,
        id,
        disable: isDisabled,
        onClick: onClickProp,
        onKeyDown: onKeyDownProp,
        style,
        tabIndex,
    } = props;

    const classes = useStyles(props);

    const onClick = useCallback((event) => {
        if (isFunction(onClickProp) && !isDisabled) {
            onClickProp(event);
        }
    }, [
        onClickProp,
        isDisabled,
    ]);

    const onKeyDown = useCallback((event) => {
        if (!isDisabled) {
            if (isFunction(onKeyDownProp)) {
                onKeyDownProp(event);
            } else if (event.keyCode === ENTER_KEY_CODE) {
                onClick();
            }
        }
    }, [
        isDisabled,
        onClick,
        onKeyDownProp,
    ]);

    const onMouseDown = useCallback((event) => {
        event.preventDefault();
    }, []);

    const bemBlockName = 'a';

    const rootClasses = ClassNames(
        'ui',
        bemBlockName,
        classes.root,
        className,
        {
            [classes.isDisabled]: isDisabled,
        },
    );

    return (
        <span
            className={rootClasses}
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
            role="button"
            style={style}
            tabIndex={tabIndex}
        >
            {children}
        </span>
    );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;

export default A;
