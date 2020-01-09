import './Highlighter.scss';

import { prism, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    customStyle: PropTypes.shape({}),
    showLineNumbers: PropTypes.bool,
    style: PropTypes.shape({}),
    theme: PropTypes.oneOf(['dark', 'light']),
    type: PropTypes.oneOf(['block', 'inline']),
};

const defaultProps = {
    className: undefined,
    customStyle: undefined,
    showLineNumbers: true,
    style: undefined,
    theme: 'light',
    type: 'block',
};

function Highlighter(props) {
    const {
        children,
        className,
        customStyle,
        showLineNumbers,
        style,
        theme,
        type,
    } = props;
    const containerClasses = ClassNames('highlighter', className, {
        'block': type === 'block',
        'inline': type === 'inline',
        'theme_dark': theme === 'dark',
        'theme_light': theme === 'light',
    });
    const syntaxHighlighter = (
        <SyntaxHighlighter
            customStyle={customStyle}
            language="javascript"
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
            <div className={containerClasses} style={style}>
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
        <div className={containerClasses} style={style}>
            {syntaxHighlighter}
        </div>
    );
}

Highlighter.propTypes = propTypes;
Highlighter.defaultProps = defaultProps;

export default Highlighter;
