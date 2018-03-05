/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule GeoPointElement
 */

import React ,{Component} from 'react';

export default class GeoPointElement extends Component {

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
        let labelField = '';

        if (this.state.field_value) {
            let {lat, lng} = this.state.field_value;
            labelField = lat + ', ' + lng;
        } 

        return (
            <div className="form-group">
                <label className="col-sm-2 control-label">{this.props.label}</label>
                <div className="col-sm-10">
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={(e)=>this.handleEdit(e)} placeholder={this.props.placeholder} value={labelField} />
                        <span className="input-group-btn"> 
                            <button className="btn btn-info" type="button">
                                <i className="fa fa-map-marker"></i>
                            </button> 
                        </span>
                    </div>
                </div>
            </div>
        );
    }

	render() {
		return this.renderEdit();
	}
}
