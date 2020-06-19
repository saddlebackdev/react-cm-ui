
import './Swatch.scss';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default class Main extends React.Component {
    render() {
        const { color, name } = this.props;
        const containerClasses = ClassNames('ui', 'swatch', {
            'swatch-border': this.props.border,
            'swatch-text-inverse': this.props.textInverse,
        });

        return (
            <div
                className={containerClasses}
                style={{ backgroundColor: color }}
            >
                {name ? (
                    <div>{name}</div>
                ) : null}

                {color ? (
                    <div>{color}</div>
                ) : null}
            </div>
        );
    }
}

Main.propTypes = {
    border: PropTypes.bool,
    color: PropTypes.string.isRequired,
    name: PropTypes.string,
    textInverse: PropTypes.bool,
};
