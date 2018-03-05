/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule addPin
 */

import React, {Component} from 'react';

import Input from '../ui/Input';

export default class addPin extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      url: '',
        errormessage: ''
	    };
	}

	handleURLChange(e) {
    	this.setState({ url: e.target.value });
  }
	
  renderButton() {
      return <button type="button" format={'url'} onClick={(e)=>this.handleCreate(e)} className="btn btn-info btn-block w-pad">Next</button>
  }

	render() {
    return (
			<section style={{marginBottom:0}}>
          <div className="panel-body m-b-none">
              <form role="form">
                  <div className="form-group">
                      <Input icon="fa fa-globe" onFieldChange={this.handleURLChange} placeholder={'http://...'} errorMessage="Please enter a valid URL" required={true} />
                  </div>
                  <div className="">
                    {this.renderButton()}
                  </div>
              </form>
          </div>
      </section>
		);

	}
}

function ytVidId(url) {
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(p)) ? RegExp.$1 : false;
}
