import { prism, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    customStyle: PropTypes.shape({}),
    language: PropTypes.string,
    showLineNumbers: PropTypes.bool,
    style: PropTypes.shape({}),
    theme: PropTypes.oneOf(['dark', 'light']),
    type: PropTypes.oneOf(['block', 'inline']),
};

const defaultProps = {
    className: undefined,
    customStyle: undefined,
    language: 'jsx',
    showLineNumbers: true,
    style: undefined,
    theme: 'dark',
    type: 'block',
};

const useStyles = makeStyles((theme) => ({
    block: {
        borderBottom: `1px solid ${theme.palette.border.primary}`,
        borderTop: `1px solid ${theme.palette.border.primary}`,
        '& > div': {
            borderRadius: 3,
        },
        '& pre': {
            fontSize: theme.typography.pxToRem(13.5),
            lineHeight: 20,
            padding: '22px 11px !important',
            margin: '0 !important',
        },
        '& code': {
            backgroundColor: 'transparent',
            color: 'inherit',
            fontSize: 'inherit',
            padding: 0,
        },
        '&:last-child': {
            marginBottom: '0 !important',
        },
        '& + .highlighter': {
            marginTop: 33,
        },
    },
    inline: {
        margin: '22px 22px 33px',
        '&:not($themeDark)': {
            backgroundColor: `${theme.palette.background.secondary} !important`,
        },
        '& pre': {
            border: 0,
            display: 'inline-block !important',
            fontSize: theme.typography.pxToRem(13.5),
            margin: '0 !important',
        },
        '& code': {
            backgroundColor: 'transparent',
            color: 'inherit',
            fontSize: 'inherit',
            padding: 0,
        },
    },
    root: {
        [theme.breakpoints.up('md')]: {
            margin: '44px 0',
        },
    },
    themeDark: {},
    themeLight: {},
}));

function Highlighter(props) {
    const {
        children,
        className,
        customStyle,
        language,
        showLineNumbers,
        style,
        theme,
        type,
    } = props;

    const classes = useStyles();

    const rootClasses = ClassNames(
        'highlighter',
        classes.root,
        className,
        {
            [classes.block]: type === 'block',
            [classes.inline]: type === 'inline',
            [classes.themeDark]: theme === 'dark',
            [classes.themeLight]: theme === 'light',
        },
    );

    const syntaxHighlighter = (
        <SyntaxHighlighter
            customStyle={customStyle}
            language={language}
            lineNumberContainerStyle={showLineNumbers && {
                color: '#97a4ab',
                float: 'left',
                marginLeft: '-22px',
                padding: '0 22px',
                textAlign: 'right',
                userSelect: 'none',
            }}
            showLineNumbers={showLineNumbers}
            style={theme === 'dark' ? tomorrow : prism}
            wrapLines
        >
            {children}
        </SyntaxHighlighter>
    );

    if (type === 'block') {
        return (
            <div
                className={rootClasses}
                style={style}
            >
                <ScrollBar
                    autoHeight
                    autoHeightMin={328}
                    autoHeightMax={600}
                    autoHide
                >
                    <div className="highlighter-inner-container">
                        {syntaxHighlighter}
                    </div>
                </ScrollBar>
            </div>
        );
    }

    return (
        <div className={rootClasses} style={style}>
            {syntaxHighlighter}
        </div>
    );
}

Highlighter.propTypes = propTypes;
Highlighter.defaultProps = defaultProps;

export default Highlighter;
