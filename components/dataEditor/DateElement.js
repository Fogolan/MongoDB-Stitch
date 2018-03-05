
/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DateElement
 */

import React ,{Component} from 'react';

import moment from "moment";

export default class DateElement extends Component {

    constructor(props) {
        super(props);
    }

    handleEdit(newDate) {
            // this.setState({field_value: e.target.value});      
            // this.props.onUpdate(this.props.keyField, e.target.value);      
    }

    componentDidMount() {
        $(".datepicker-input").each(function(){ $(this).datepicker();});
    }

	render() {
        var day = moment(this.props.value);
		return (
        <div className="form-group">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-10">
                <input className="input-sm input-s datepicker-input form-control" onChange={(e)=>{}} size="16" type="text" value={day.format('DD-MM-YYYY')} data-date-format="DD-MM-YYYY" />
                <span className="help-block m-b-none">{this.props.help}</span>
            </div>
        </div>
        );
	}
}
