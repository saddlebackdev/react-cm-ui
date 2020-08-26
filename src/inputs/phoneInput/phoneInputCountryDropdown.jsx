import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
import PhoneInputCountryDropdownItem from './phoneInputCountryDropdownItem';
import PhoneInputCountryDropdownValue from './phoneInputCountryDropdownValue';

const propTypes = {
    /**
     * A PhoneInputCountryDropdown can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

const defaultProps = {
    disable: false,
    disabled: false,
    options: [],
    value: '',
};

class PhoneInputCountryDropdown extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: _.find(props.options, (o) => !o.divider && o.value && o.value === props.value),
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            disabled,
            onChange,
            options,
            value,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('PhoneInputCountryDropdown (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        if (prevProps.value !== value && prevState.selectedOption.value !== value) {
            this.setState({
                selectedOption: _.find(options, (o) => !o.divider && o.value && o.value === value),
            }, () => {
                onChange(value);
            });
        }
    }

    onChange(selectedOption) {

        if (selectedOption) {
            const { onChange } = this.props;

            this.setState({
                selectedOption,
            }, () => {
                onChange(selectedOption.value);
            });
        }
    }

    render() {
        const {
            disable,
            disabled,
            options,
        } = this.props;
        const { selectedOption } = this.state;

        return (
            <Dropdown
                clearable={false}
                disable={disable || disabled}
                iconSize={10}
                iconType="caret-down"
                onChange={this.onChange}
                options={options}
                selection
                selectionMenuContainerStyle={{ width: 'auto' }}
                selectionOptionComponent={PhoneInputCountryDropdownItem}
                selectionValueComponent={() => PhoneInputCountryDropdownValue(selectedOption)}
                value={selectedOption}
            />
        );
    }
}

PhoneInputCountryDropdown.propTypes = propTypes;
PhoneInputCountryDropdown.defaultProps = defaultProps;

export default PhoneInputCountryDropdown;
