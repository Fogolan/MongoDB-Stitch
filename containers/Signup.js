/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Signup
 */

import React, {Component} from 'react';
var shallowCompare = require('react-addons-shallow-compare');


export default class Signup extends Component {

	// api/signupUser (user details, nothing so far :))

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			companyName :'',
			setup: false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
	  return shallowCompare(this, nextProps, nextState);
	}

	handleEmailChange(e) {
    	this.setState({ email: e.target.value });
  	}

	handleCompanyNameChange(e) {
    	this.setState({ companyName: e.target.value });
  	}

	handleSignup(e) {
		this.props.onSignup(this.state.email, this.state.companyName);
	}

	render() {
		if (!this.state.setup) {
			return (
				<section className="panel panel-default m-t-lg bg-white"> 
					<header className="panel-heading text-center"> <strong>Sign up</strong> </header> 
					<form action="index.html" class="panel-body wrapper-lg"> 
						<div className="form-group"> <label className="control-label">Email</label> 
							<input type="text" placeholder="test@example.com" onChange={(e)=>this.handleEmailChange(e)} value={this.state.email} className="form-control input-lg"/> 
						</div> 
						<div className="form-group"> <label className="control-label">Company Name</label> 
							<input type="email" placeholder="eg. Your name or company"  onChange={(e)=>this.handleCompanyNameChange(e)} value={this.state.companyName} className="form-control input-lg"/> 
						</div> 
						<button type="submit" onClick={(e)=>this.handleSignup(e)} className="btn btn-primary">Sign up</button>  
					</form> 
				</section>
			);
		} else {
			return (
				<section className="panel panel-default m-t-lg bg-white"> 
				<h1>Congrats</h1>
				
				</section>
			);
		}
	}
}
