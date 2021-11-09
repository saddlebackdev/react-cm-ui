import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    onFocus: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    option: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
};

// NOTE: Not a function component because of stupid React Select trying to
//       assign a ref to it and this generates a console warning :-(
class CreatableOptionComponent extends React.PureComponent {
    render() {
        const {
            onFocus,
            onSelect,
            option,
        } = this.props;

        return (
            <div
                className="Select-option"
                key={option.label}
                onClick={() => onSelect(option)}
                onFocus={noop}
                onKeyDown={noop}
                onMouseOver={() => onFocus(option)}
                role="option"
                aria-selected="true"
                tabIndex={0}
                style={{
                    display: 'flex',
                }}
            >
                <span>
                    {option.label}
                </span>
            </div>
        );
    }
}

CreatableOptionComponent.propTypes = propTypes;
CreatableOptionComponent.displayName = 'TimePickerCreatableOptionComponent';

export default CreatableOptionComponent;
