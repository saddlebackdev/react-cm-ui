import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import RadioItem from './radioItem';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    pill: PropTypes.bool,
    style: PropTypes.shape({}),
    value: PropTypes.string,
};

const isCheckedSingle = (c, i, isChecked) => (
    c.id ? c.id === isChecked : i === isChecked
);

const isCheckedMulti = (c, i, isChecked) => {
    const id = c.id ? c.id : i;
    return _.includes(isChecked, id);
};

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked };

        this.onClick = this.onClick.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.checked, prevProps.checked)) {
            this.setState({ isChecked: this.props.checked });
        }
    }

    onClick(idArg) {
        const { disabled, id, onChange, pill, multi } = this.props;
        let newValue = _.clone(this.state.isChecked);

        if (multi) {
            if (_.includes(newValue, idArg)) {
                _.remove(newValue, v => v === idArg);
            } else {
                if (_.isArray(newValue)) {
                    newValue.push(idArg);
                } else {
                    newValue = [ idArg ];
                }
            }
        } else if (pill) {
            newValue = idArg;
        } else {
            newValue = true;
        }

        if (!disabled) {
            if (!_.isUndefined(onChange)) {
                onChange(pill ? idArg : id, newValue);
            } else {
                this.setState({ isChecked: newValue });
            }
        }
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (!_.isUndefined(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }

    render() {
        const { align, children, className, disabled, fluid, id, label,
            labelClick, multi, name, pill, style, value } = this.props;
        const { isChecked } = this.state;
        const containerClasses = ClassNames('ui', 'radio', className, {
            'radio-align-left': align === 'left',
            'radio-align-right': align === 'right',
            'radio-disabled': disabled,
            'radio-full-width': fluid,
            'radio-is-checked': isChecked && !pill,
            'radio-pill': pill,
        });
        const labelClasses = ClassNames('label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false
        });

        if (pill) {
            const isCheckedItem = multi ? isCheckedMulti : isCheckedSingle;
            return (
                <div className={containerClasses} style={style}>
                    {React.Children.map(children, (c, i) => React.cloneElement(c, {
                        index: i,
                        checked: isCheckedItem(c, i, isChecked),
                        name: multi ? null : name,
                        onClick: this.onClick
                    }))}
                </div>
            );
        } else {
            return (
                <div
                    className={containerClasses}
                    onClick={this.onClick}
                    style={style}
                >
                    <input
                        checked={isChecked}
                        className="input"
                        disabled={disabled}
                        id={id}
                        name={name}
                        readOnly
                        type="radio"
                        value={value}
                    />

                    <label className={labelClasses}>
                        {label ? (
                            <span onClick={this.onLabelClick}>{label}</span>
                        ) : null}
                    </label>
                </div>
            );
        }
    }
}

Radio.Item = RadioItem;

Radio.propTypes = propTypes;

export default Radio;
