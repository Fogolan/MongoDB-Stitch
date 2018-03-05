/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ReportBilling
 */

import React, {Component} from 'react';

import Input from '../ui/Input';

export default class ReportBilling extends Component {
	constructor(props) {
		super(props);
		this.state = {
      email: '',
      message: ''
    };
	}

	handleNameChange(e) {
  	this.setState({ email: e.target.value });
	}
	
	handleMessageChange(e) {
  	this.setState({ message: e.target.value });
	}

	handleCreate(e) {
	  this.props.onCreate(this.state.name, this.state.message);
	}

	render() {
		return (
		<section style={{marginBottom:0}}>
        <form role="form">
          <div className="form-group">
            <Input placeholder={'email'} icon={'fa fa-envelope'} />
          </div>
          <div className="form-group">
            <Input placeholder={'message'} icon={'fa fa-comment'} />
          </div>
          <div className="form-group">
            <button type="button" onClick={(e)=>this.handleCreate(e)} className="btn btn-info btn-block w-pad">Send</button>
          </div>
        </form>
      </section>
		);
	}
}
