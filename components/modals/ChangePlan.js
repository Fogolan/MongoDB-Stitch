/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule changePlan
 */

import React, {Component} from 'react';

export default class changePlan extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section style={{marginBottom:0}}>
        <div className="clearfix"> 
        <div className="row m-b-xl"> 
        <div className="col-sm-4"><section className="panel b-light text-center m-t"><header className="panel-heading bg-white b-light"><h3 className="m-t-sm">Free</h3> <p>for developers and prototypers</p> </header><ul className="list-group"> <li className="list-group-item text-center bg-light lt m-b-lg"> <span className="text-muted font-bold h1">FREE</span></li> <li className="list-group-item"> 1 project </li> <li className="list-group-item"> 5 req/s </li> <li className="list-group-item"> Max 1 user </li> <li className="list-group-item">developer stack</li> <li className="list-group-item"> </li> </ul> <footer className="panel-footer m-t-lg p-b-none"> <a href="#" className="btn btn-primary m-t m-b">Get Started</a></footer></section></div> 
        <div className="col-sm-4"><section className="panel b-primary text-center"><header className="panel-heading bg-white"><h3 className="m-t-sm">Team</h3> <p>for small teams</p> </header><ul className="list-group"> <li className="list-group-item text-center bg-light lt m-b-lg"> <div className="padder-v"> <span className="text-danger font-bold h1">$49</span> / month </div> </li> <li className="list-group-item"> Max 5 projects </li> <li className="list-group-item"> 20 req/s </li> <li className="list-group-item"> Max 10 users </li> <li className="list-group-item">developer stack</li> <li className="list-group-item"> 7*24 free support </li> </ul> <footer className="panel-footer m-t-lg p-b-none"> <a href="#" className="btn btn-primary m-t m-b">Get Started</a></footer></section></div> 
        <div className="col-sm-4"><section className="panel b-light text-center m-t"><header className="panel-heading bg-white b-light"><h3 className="m-t-sm">Business</h3> <p>for enterprise and companies</p> </header><ul className="list-group"> <li className="list-group-item text-center bg-light lt m-b-lg"> <span className="text-danger font-bold h1">$199</span> / month </li> <li className="list-group-item"> Max 20 projects </li> <li className="list-group-item"> 50 req/s </li> <li className="list-group-item"> Unlimited users </li> <li className="list-group-item">production stack</li> <li className="list-group-item"> 7*24 free support </li> </ul> <footer className="panel-footer m-t-lg p-b-none"> <a href="#" className="btn btn-primary m-t m-b">Get Started</a></footer></section></div></div></div>
      </section>
		);
	}
}
