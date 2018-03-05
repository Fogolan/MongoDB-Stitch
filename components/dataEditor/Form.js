/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Form
 */

import React,{Component} from 'react';
import ElementTypes from './ElementTypes';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row : this.props.rowdata
    }
  }

	handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
	}

	handleSave(e) {
    e.preventDefault();
    this.props.onSave(this.state.row);
	}

	changeHandler(key, value) {
    var oldData = this.state.row;
    oldData[key] = value;
    this.state.row = oldData;
	}

	render() {

		let {rowschema, rowdata} = this.props;

		let elements = Object.keys(rowschema.fields).reverse().map((key,j) => {
      let FormElement = ElementTypes[rowschema.fields[key].type].reactClass;
  		return (
        <div key={'form-element-'+key+'-'+j}>
  				<FormElement label={key}
             keyField={key}
             field_type={rowschema.fields[key].type}
             help=""
             field_value={rowdata[key]}
             placeholder=""
             reference={rowschema.fields[key].reference}
             onPicker={(element)=>this.props.onPicker(element)}
             reference_id={rowschema.fields[key].reference_id}
             onUpdate={(field_key, field_value)=>this.changeHandler(field_key, field_value)}
           />
          <div className="line line-dashed line-lg pull-in"></div>
  			</div>);
		});

		return (
		  <section className="panel panel-default m-t-md">
        <div className="panel-body">
          <form className="form-horizontal">
            {elements}
              <div className="form-group">
                <div className="col-sm-4 col-sm-offset-2">
                  <button type="submit" className="btn btn-default m-r-sm" onClick={(e)=>this.handleCancel(e)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" onClick={(e)=>this.handleSave(e)}>Save changes</button>
                </div>
              </div>
          </form>
        </div>
      </section>
		);
	}
}
