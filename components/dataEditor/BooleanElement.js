/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule BooleanElement
 */

import React ,{Component} from 'react';

export default class BooleanElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      field_value: this.props.field_value,
      field_type: this.props.field_type
    }
  }

  handleEdit(e) {
    this.setState({field_value: !this.state.field_value});      
    this.props.onUpdate(this.props.keyField, !this.state.field_value);      
  }

  renderview() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <p className="form-control-static">{this.state.field_value ? 'X' : 'O'}</p>
        </div>
      </div>
    );
  }

  renderEdit() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <div className="checkbox"> 
            <label className="checkbox-custom"> 
              <input onChange={(e)=>this.handleEdit(e)} type="checkbox" name="checkboxA" checked={this.state.field_value ? 'checked' : ''} /> 
            </label> 
          </div>
        </div>
      </div>
    );
  }

	render() {
		return this.renderEdit();
	}
}
