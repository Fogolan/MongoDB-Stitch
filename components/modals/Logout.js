/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule logout
 */

import React, { Component } from 'react';

export default class logout extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4 text-center">
						<div className="avatar" style={{border:'none'}}>
		          <img className="img-circle" src={'/dist/images/5.png'} alt="" />
		        </div>
		        <a href="javascript:;"><h2 className="text-uppercase">Rocket Racoon</h2></a>
		        <p>info@microsoft.com</p>
	        </div>
				</div>
			</div>
		);
	}
}
