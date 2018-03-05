/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Header
 */

import React, { Component } from 'react';

import Profile from '../components/widgets/Profile';
var shallowCompare = require('react-addons-shallow-compare');

export default class Header extends Component {

  constructor(props) {
      super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleOnScreen() {
      $("#nav").toggleClass('nav-off-screen');
  }

	render() {
    const {route} = this.props;
	  return (
      <div className="lock-header subheader m-b-lg"> 
        <div className="container full"> 
          <div className="m-b-lg"> 
            <div className="pull-left w50 m-t-xs">
              <h3 className="m-b-none">{route.pageName}</h3> 
              <small className="text-muted">{route.pageDescription}</small> 
            </div>
            <div className="pull-right w50 text-right m-t-lg">
              <ul style={{verticalAlign: 'top',marginTop: -8,marginLeft: 10}} className="nav navbar-nav navbar-right  nav-user">
                <Profile onLogout={this.props.onLogout} profile={this.props.user} />
              </ul>
            </div>
          </div> 
        </div> 
      </div>
		);
	}
}
