/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ArrayElement
 */

import React ,{Component} from 'react';

export default class ArrayElement extends Component {

  constructor(props) {
    super(props);

    this.state = {
      field_value: this.props.field_value || [],
      field_type: this.props.field_type
    }
  }

  handleEdit(e) {
    this.setState({field_value: eval(e.target.value)});
    this.props.onUpdate(this.props.keyField, e.target.value);      
  }

  render() {
    var rendereredValue = JSON.stringify(this.state.field_value);
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          {this.state.field_value.map(item => {
            return <a className="btn m-r-sm m-b-sm btn-rounded btn-sm btn-dark" href="#">{item}</a>
          })}
          <span className="help-block m-b-none">{this.props.help}</span>
        </div>
      </div>
    );
	}
}
