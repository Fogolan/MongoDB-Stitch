/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ReferenceElement
 */

import React ,{Component} from 'react';

export default class ReferenceElement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field_value: this.props.field_value,
            field_type: this.props.field_type
        }
    }

    handlePick() {
        this.props.onPicker(this.props);
    }

    handleEdit(e) {
        this.setState({field_value: e.target.value});      
        this.props.onUpdate(this.props.keyField, e.target.value);      
    }

	render() {
        let {label, help, field_value} = this.props;

		return (
        <div className="form-group">
            <label className="col-sm-2 control-label">{label}</label>
            <div className="col-sm-10 text-left">
                <a onClick={()=>this.handlePick()} className="btn m-r-sm m-b-sm btn-rounded btn-sm btn-danger" href="javascript:;">{`${(field_value ? field_value : `select`)}`}</a>
                <span className="help-block m-b-none">{help}</span>
            </div>
        </div>
        );
	}
}
