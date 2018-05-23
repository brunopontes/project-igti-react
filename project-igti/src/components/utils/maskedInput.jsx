import React from 'react';
import classNames from 'classnames';
import { FormControl } from 'react-bootstrap';
import MaskedInput from 'react-maskedinput';

export default class MaskedInputField extends FormControl {

    _onChange(e) {
        var stateChange = {}
        stateChange[e.target.name] = e.target.value  
    }

    renderInput() {
        const className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
        return <MaskedInput {...this.props} className={classNames(this.props.className, className)} mask="(11) 11111-1111" ref="input" key="input" onChange={this._onChange} />;
    }
}
