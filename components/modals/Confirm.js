import React, {Component} from 'react';

export default class Confirm extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      email: '',
        error:''
	    };
	}

	handleEmailChange(e) {
    	this.setState({ email: e.target.value });
  }

  handleSend(e) {
  		this.props.onSend(this.state.email);
  }

	render() {
		return (
			<section className="panel" style={{marginBottom:0}}>
        <div className="panel-body">
          <form role="form">
            <div className="form-group">
            <p>Enter your email and we will reset your password and send it to you.</p>
            </div>
            <div className="form-group">
              <div className="iconic-input">
                <i className="icon-user"></i>
                <input type="text" className="form-control" value={this.state.email} placeholder={'email'} onChange={(e)=>this.handleEmailChange(e)}/>
              </div>
            </div>
            
            <div className="form-group">
              <button type="button" onClick={(e)=>this.handleSend(e)} className="btn btn-info btn-block w-pad">Send</button>
            </div>

            <div className="form-group">
            <p>{this.state.error}</p>
            </div>
          </form>
        </div>
        <div className="panel-footer w-foot">
          <a href="javascript:;">
            <i className="fa fa-google-plus"></i>
            Login with Google
          </a>
        </div>
    </section>
		)
	}
}
