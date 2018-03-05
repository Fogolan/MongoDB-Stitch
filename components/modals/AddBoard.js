/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule addBoard
 */

import React, {Component} from 'react';

export default class addBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      name: '',
	      description: '',
          errormessage: ''
	    };
	}

	handleNameChange(e) {
  	this.setState({ name: e.target.value });
	}
	
	handleDescriptionChange(e) {
  	this.setState({ description: e.target.value });
	}

	handleCreate(e) {
 		this.props.onCreate(this.state.name, this.state.description);
	}

	render() {
		return (
			<section style={{marginBottom:0}}>
        <div className="panel-body m-b-none">
          <form role="form">
            <div className="form-group">
              <input type="text" className="form-control has-error" value={this.state.name} placeholder={'name'} onChange={(e)=>this.handleNameChange(e)}/>
              <span className="text-muted help-block m-b-none">{this.state.errormessage}</span>
            </div>
            <div className="form-group">
              <input type="text" className="form-control has-error" value={this.state.description} placeholder={'description'} onChange={(e)=>this.handleDescriptionChange(e)}/>
            </div>
            <div className="">
              <button type="button" onClick={(e)=>this.handleCreate(e)} className="btn btn-info btn-block w-pad">Create</button>
            </div>
          </form>
        </div>
      </section>
		);
	}
}
