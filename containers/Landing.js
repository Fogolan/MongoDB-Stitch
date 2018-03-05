/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Landing
 */

import React, { Component } from 'react';
import {Link} from 'react-router';

import ModalFactory from '../components/modals/factory';
import Login from '../components/modals/Login';
import Signup from '../components/modals/Signup';

import {Button, I} from '../components/ui/';

const LogoStyle = {
	display: 'inline',
    clear: 'both',
    width: 100,
    marginBottom:20
}
var shallowCompare = require('react-addons-shallow-compare');


export default class Landing extends Component {

	handleLoginPress(e) {
		e.preventDefault();
		ModalFactory.show('loginModal');
	}

	handleSignupPress(e) {
		e.preventDefault();
		ModalFactory.show('signupModal');
	}

	handleLogin(email,pass) {
		ModalFactory.hide('loginModal');
		this.props.onLogin(email, pass);
	}

	shouldComponentUpdate(nextProps, nextState) {
    	return shallowCompare(this, nextProps, nextState);
  	}

	render() {

		var Factory = ModalFactory.modalFromFactory;

		return (
			<section className="vbox scrollable" style={{backgroundColor:'#16181b'}}>

            <Factory modalref="loginModal" title="Sign in" factory={Login} />
            <Factory modalref="signupModal" title="Sign up" factory={Signup} />
		
			<header className="navbar m-b-none">
			<div className="container">
				<div className="navbar-header">
					<a href="/" id="top" className="navbar-brand"><span className="text-white">React Admin</span></a>
				</div>
				<div>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<div className="m-t-sm text-white">
							<a href="#" className="btn btn-dark btn-sm m-r-md" onClick={(e)=>this.handleLoginPress(e)}><strong>Sign-in</strong></a>
							<a href="#" className="btn btn-dark btn-sm" onClick={(e)=>this.handleSignupPress(e)}><strong>Sign-up</strong></a>

							</div>
						</li>
					</ul>
				</div>
			</div>
			</header>
			<section id="content" style={{backgroundColor:'#ffffff'}}>
				<div style={{height: 650, background:"rgb(22,24,27) url('/dist/images/grad_grid_overlay.png')", backgroundSize:'contain'}}>
					<div className="text-center wrapper">
						<div className="m-t-xl row m-b-xl">
							<div className="col-md-6 col-md-offset-3">
							<img src="/dist/images/react-logo-large.png" style={{opacity:'0.8'}} width="250" />
							<div className="h3 text-white m-b-md">Admin application template built with React and Redux</div>
							<div className="h4 text-muted m-b-xl">Customizable and extendable UI that allows you to focus on UX.</div>
							<div className="m-b-xl">
							<a href="/" target="_blank"><Button label="Live demo" color="btn-info" /></a>
							</div>
							<div className="p-r m-t-xl">
								<img style={{width:'100%'}} src="/dist/images/macbook.png" />
							</div>
							</div>
						</div>
					</div>
				</div>
				

				<div className="container">

					<div className="text-center wrapper">
						<div className="row m-t-lg m-b-xl" style={{paddingTop:250}}>
							<div className="col-md-12 text-center keepemseperated">
								<h1 className="text-300">Save time and money, get up and running quickly.</h1>
								<p style={{fontSize:'18px'}}>Focus on your product not plumbing.</p>

							</div>
						</div>
					</div>



			
					<div className="text-center wrapper m-b-xl m-t-xl">
						<div className="row row-padded row-bordered row-centered">
						    <div className="col-sm-5 text-left">
						    	<h1 className="m-t-xl text-300">Powerful admin application template built to extend and customize</h1>
						    	<p className="desc">Get up in running in minutes and start adding your own custom features. Static deploy your application s3 and your ready to go.</p>

						    </div>

							<div className="col-sm-6 col-sm-offset-1 text-left">
								<img style={{height:400}} src="/dist/images/mockup-1.png" />
						    </div>
						</div>
					</div>		


					<div className="text-center wrapper m-b-xl m-t-xl">
						<div className="row row-padded row-bordered row-centered">
						    
							<div className="col-sm-6 text-left">
								<img style={{height:400}} className="pull-right" src="/dist/images/mockup-2a.png" />
						    </div>

						    <div className="col-sm-5 col-sm-offset-1 text-left m-t-mega">
						    	<h1 className="text-300">Built on LESS and Bootstrap</h1>
						    	<p className="desc">Styles and Layouts are entirely managed by Bootstrap and LESS allowing you to easily change the look and feel of the entire app.</p>

						    </div>


						</div>
					</div>					    


					

					<div className="text-center wrapper m-b-xl m-t-xl">
						<div className="row row-padded row-bordered row-centered">
						    <div className="col-sm-5 text-left m-t-mega">
						    	<h1 className="text-300">The Best of the Modern Web</h1>
						    	<p className="desc">ES6, React, Redux, Webpack, Babel, Grunt (for LESS) and hot reloading.</p>

						    </div>

							<div className="col-sm-6 col-sm-offset-1 text-left">
								<img style={{height:400}} src="/dist/images/mockup-4.png" />
						    </div>
						</div>
					</div>	


					<div className="text-center wrapper m-b-xl m-t-xl">
						<div className="row row-padded row-bordered row-centered">
						    
							<div className="col-sm-6 text-left">
								<img style={{height:400}} className="pull-right" src="/dist/images/mockup-3.png" />
						    </div>

						    <div className="col-sm-5 col-sm-offset-1 text-left m-t-xl">
						    	<h1 className="text-300 m-t-xl">Components and Apps</h1>
						    	<p className="desc">Implement, customize and create new features with the react admin components. Pin Board app and Notes app are included.</p>

						    </div>


						</div>
					</div>	


					


					
				</div>
				

			<div className="text-center wrapper p-b-mega m-t-xl">
				<div className="row row-padded text-center">
				    <div className="col-sm-8 col-sm-offset-2 text-center">
				      <h3><strong>Free updates and support</strong></h3>
				      <h4 className="m-b-md">Our React apps all include free minor and patch updates, including compatibility upgrades. Need any help? Shoot us an email at <a href="mailto:help@lightsinthesky.io">help@lightsinthesky.io</a>.</h4>
				      <a className="btn btn-primary" href="mailto:help@lightsinthesky.io">Contact Us</a>
				    </div>
			     </div>
			  </div>


		
			

			</section>
			
			<footer id="footer">
				<div className="bg-dark dker wrapper"> 
					<div className="container text-center m-t-lg"> 
							<div className="m-t-xl m-b-xl"> 
								<h4>React Apps</h4>
								<p>&copy;Copyright 2016-present Lights in the Sky. All rights reserved.</p> 
                <p> 
                  <a href="#top" className="btn btn-icon btn-rounded btn-dark b-dark bg-empty m-sm text-muted">
                  <i className="fa fa-angle-up"></i></a> 
                </p> 
              </div> 
            </div> 
          </div>
			</footer>
			</section>
		);
	}
}
