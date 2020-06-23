import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
};

const useStyles = makeStyles(({
    root: {
        '& .description': {
            fontSize: '1.125rem',
            lineHeight: 1.35,
            margin: '44px 0',
        },
        '& h1': {},
        '& h2': {
            margin: '44px 0 8px',
        },
        '& h3': {
            margin: '44px 0 11px',
        },
        '& h4': {},
        '& h5': {},
        '& h6': {},
        '& p': {
            marginBottom: '16px',
        },
    },
}));

function MarkdownContainer(props) {
    const {
        children,
        className,
    } = props;
    const classes = useStyles();
    const rootClasses = ClassNames('markdown', classes.root, className);

    return (
        <div
            className={rootClasses}
        >
            {children}
        </div>
    );
}

MarkdownContainer.propTypes = propTypes;
MarkdownContainer.defaultProps = defaultProps;

export default MarkdownContainer;
