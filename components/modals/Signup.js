/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule signup
 */

import React, {Component} from 'react';

import Input from '../ui/Input';

export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
        name: '',
	      email: '',
	      password: '',
        password2 : '',
	      error:''
	    };
	}

	handleEmailChange(e) {
    	this.setState({ email: e.target.value });
  	}
	
	handlePassChange(e) {
    	this.setState({ password: e.target.value });
  	}

  handlePass2Change(e) {
      this.setState({ password2: e.target.value });
    }

	handleLogin(e) {
		this.props.onLogin(this.state.email, this.state.password);
	}

	render() {
		return (
			<section className="wrapper-md animated fadeInUp">
        <form role="form">
            <div className="form-group"><Input ref="emailRef" autoComplete={'off'} format="email" icon="fa fa-user" required={true} errorMessage="Please verify your email" placeholder="email" value={this.state.email} onFieldChange={(e)=>this.handleEmailChange(e)} /></div>
            <div className="form-group"><Input ref="loginRef" autoComplete={'off'} format="password" icon="fa fa-lock" required={true} errorMessage="Password is required" placeholder="password" value={this.state.password} onFieldChange={(e)=>this.handlePassChange(e)} /></div>
            <div className="form-group"><Input ref="loginRef" autoComplete={'off'} format="password" icon="fa fa-lock" required={true} errorMessage="Passwords must match" placeholder="re-enter password" value={this.state.password2} onFieldChange={(e)=>this.handlePass2Change(e)} /></div>
            <p className="help-block">{this.props.errorMessage ? this.props.errorMessage.message : ''}</p>
            <div className="form-group">
                <button type="button" onClick={(e)=>this.handleLogin(e)} className="btn btn-info btn-block w-pad">Login</button>
            </div>
            <div className="form-group">
              <p>{this.state.error}</p>
            </div>
            <div className="text-center">
              <a href="javascript:;" onClick={()=>this.props.onForgot()} className="w-login">Forgot your password?</a>
            </div>
        </form>
      </section>
		);
	}
}
