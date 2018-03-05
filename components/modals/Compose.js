/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule addNote
 */

import React, {Component} from 'react';
import DraftEditor from '../ui/DraftEditor';

export default class Compose extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      subject: '',
	      body: '',
	      to:'',
	      cc:'',
          errormessage: ''
	    };
	}

	handleSubjectChange(e) {
  		this.setState({ subject: e.target.value });
	}

	handleBodyChange(body) {
		this.setState({ body: body });
	}
	
	handleToChange(e) {
  		this.setState({ to: e.target.value });
	}

	handleCCChange(e) {
  		this.setState({ cc: e.target.value });
	}

	handleCreate(e) {
 		this.props.onCompose(this.state.subject, this.state.body);
	}

	render() {
		return (
			<section style={{marginBottom:0}}>
		        <div className="panel-body m-b-none">
		          <form role="form">
		          	<div className="form-group">
		              <input type="text" className="form-control has-error" value={this.state.to} placeholder={'To'} onChange={(e)=>this.handleToChange(e)}/>
		            </div>
		          	<div className="form-group">
		              <input type="text" className="form-control has-error" value={this.state.cc} placeholder={'cc'} onChange={(e)=>this.handleCCChange(e)}/>
		            </div>
		            <div className="form-group">
		              <input type="text" className="form-control has-error" value={this.state.subject} placeholder={'Subject'} onChange={(e)=>this.handleSubjectChange(e)}/>
		              <span className="text-muted help-block m-b-none">{this.state.errormessage}</span>
		            </div>
		            <div className="form-group">
		              <DraftEditor style={{height:300}} onFieldChange={(body)=>this.handleBodyChange(body)} />
		            </div>
		            <div className="">
		              <button type="button" onClick={(e)=>this.handleCreate(e)} className="btn btn-info btn-block w-pad">Send</button>
		            </div>
		          </form>
		        </div>
	      	</section>
		);
	}
}
