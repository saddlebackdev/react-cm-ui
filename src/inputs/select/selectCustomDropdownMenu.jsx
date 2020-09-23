import React from 'react';

function SelectCustomDropdownMenu() {
    renderHiddenField(valueArray) {
        const options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
        const menu = this.renderMenu(options, valueArray);
        const styles = Object.assign({}, this.props.menuContainerStyle, {visibility: 'hidden'});

        return (
            <div className="Select-menu-outer" style={styles}>
                <div
                    role="listbox"
                    tabIndex={-1}
                    className="Select-menu"
                    id={this._instancePrefix + '-list'}
                    style={this.props.menuStyle}
                >
                    {menu}
                </div>
            </div>
        );
    }
}

export default SelectCustomDropdownMenu;
