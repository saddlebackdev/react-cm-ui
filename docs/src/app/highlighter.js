import './Highlighter.scss';

import { prism, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default class Highlighter extends React.Component {
    render() {
        const { children, className, customStyle, showLineNumbers, theme, type } = this.props;
        const containerClasses = ClassNames('highlighter', className, {
            'block': type === 'block',
            'inline': type === 'inline',
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
                <div className={containerClasses}>
                    <ScrollBar
                        autoHide
                    >
                        <div className="highlighter-inner-container">
                            {syntaxHighlighter}
                        </div>
                    </ScrollBar>
                </div>
            );
        } else {
            return (
                <div className={containerClasses}>
                    {syntaxHighlighter}
                </div>
            );
        }
    }
}

Highlighter.defaultProps = {
    showLineNumbers: true,
    theme: 'light',
    type: 'block',
};

Highlighter.propTypes = {
    customStyle: PropTypes.object,
    language: PropTypes.string,
    showLineNumbers: PropTypes.bool,
    theme: PropTypes.oneOf([ 'dark', 'light' ]),
    type: PropTypes.oneOf([ 'block', 'inline' ]),
};
