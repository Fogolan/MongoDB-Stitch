/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ColorElement
 */

import React ,{Component} from 'react';

import { SketchPicker } from 'react-color';

export default class ColorElement extends Component {

  constructor(props) {
      super(props);

      let m = 'hi';
      let sentence = `you've got ${(m ? `${m}` : ``)} maybe`; // nested literals and ternary operators :)

      this.state = {
          field_value: this.props.field_value,
          field_type: this.props.field_type
      }
  }

  handleEdit(e) {
      this.setState({field_value: e.target.value});      
      this.props.onUpdate(this.props.keyField, e.target.value);      
  }

  renderview() {
      return (
          <div className="form-group">
              <label className="col-sm-2 control-label">{this.props.label}</label>
              <div className="col-sm-10">
                  <p className="form-control-static">{this.state.field_value}</p>
              </div>
          </div>
      );
  }

  renderEdit() {
      return (
          <div className="form-group">
              <label className="col-sm-2 control-label">{this.props.label}</label>
              <div className="col-sm-10">
                  <SketchPicker
                      color={ this.state.field_value }
                      onChangeComplete={ this.handleEdit }
                    />
                  <span className="help-block m-b-none">{this.props.help}</span>
              </div>
          </div>
      );
  }

	render() {
		return this.renderEdit();
	}
}
