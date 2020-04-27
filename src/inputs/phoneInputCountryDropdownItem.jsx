import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Divider from '../dataDisplay/divider';

const propTypes = {
    onFocus: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    option: PropTypes.shape({
        divider: PropTypes.bool,
        icon: PropTypes.node,
        label: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
};

class PhoneInputCountryDropdownItem extends React.Component {
    constructor() {
        super();

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const { option } = this.props;

        return option.value !== nextProps.option.value;
    }

    onMouseDown(event) {
        const { onSelect, option } = this.props;

        event.preventDefault();
        event.stopPropagation();

        onSelect(option, event);
    }

    onMouseEnter(event) {
        const { onFocus, option } = this.props;

        onFocus(option, event);
    }

    onMouseMove(event) {
        const { onFocus, option } = this.props;

        onFocus(option, event);
    }

    render() {
        const { option } = this.props;
        const isDivider = option && option.divider;

        if (isDivider) {
            return (
                <Divider />
            );
        }

        const {
            icon: FlagIcon,
            label: title,
            value: countryCode,
        } = option;
        const containerClasses = ClassNames('Select-option');

        return (
            <div
                className={containerClasses}
                onMouseDown={this.onMouseDown}
                onMouseEnter={this.onMouseEnter}
                onMouseMove={this.onMouseMove}
                role="menuitem"
                style={{ padding: '7px 11px' }}
                title={title}
                tabIndex={-1}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    <FlagIcon value={countryCode} />

                    <span
                        className="country-name"
                        style={{ display: 'inline-block', flex: '0 1 auto', margin: '0 11px' }}
                    >
                        {title}
                    </span>

                    <span
                        className="phone color-static"
                        style={{ display: 'inline-block', flex: '0 1 1px' }}
                    >
                        {/*{`+${option.dialCode}`}*/}
                    </span>
                </div>
            </div>
        );
    }
}

PhoneInputCountryDropdownItem.propTypes = propTypes;

export default PhoneInputCountryDropdownItem;
