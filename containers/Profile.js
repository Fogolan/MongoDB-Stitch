/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Profile
 */

import React, {Component} from 'react';
import { putMe, logout } from '../actions';
import PhotoElement from '../components/widgets/PhotoElement';
import {Row, Col, Page} from '../components/ui/Layout';
import {Panel} from '../components/ui/';

import { connect } from 'react-redux';
var shallowCompare = require('react-addons-shallow-compare');

class ProfileBig extends Component {
	
	constructor(props) {
		super(props);

		let {user} = props;
		this.state = {
			username : user.username,
			email : user.email,
			name : user.name,
      avatar : user.avatar
		}
	}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

	handleEmailEdit(e) {
    this.setState({email: e.target.value});
  }

  handleNameEdit(e) {
    this.setState({name: e.target.value});
  }

  handleAvatarEdit(url) {
    this.setState({avatar:url});
  }

  componentWillReceiveProps(nextProps) {
    let {user} = nextProps;
    this.setState({
      username : user.username,
      email : user.email,
      name : user.name,
      avatar : user.avatar
    });
  }

  saveProfile() {
    let {dispatch, token} = this.props;
    dispatch(putMe(this.state, token));
  }


	render() {
		return (
			<Page height={1000}>
          <Row>
            <Col size="12">
              <Panel title="Personal">
                  <div className="tab-content">
                    <div className="tab-pane active" id="general">
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label className="col-sm-2 control-label">Username</label>
                          <div className="col-sm-10">
                            <input type="text" name="sitename" onChange={(e)=>{}} value={this.state.username} className="form-control" />
                          </div>
                        </div>
                        <div className="line line-dashed line-lg pull-in"></div>
                          <div className="form-group">
                            <label className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                              <input type="text" name="tagline" value={this.state.email} onChange={(e)=>this.handleEmailEdit(e)} className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                              <input type="text" name="tagline" value={this.state.name} onChange={(e)=>this.handleNameEdit(e)} className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-2 control-label">Avatar</label>
                            <div className="col-sm-10 text-center">
                              <PhotoElement photoHelp="Update Profile Picture" image={this.props.user.avatar} handlePhotoChange={(url)=>this.handleAvatarEdit(url)} />
                            </div>
                          </div>
                          <div className="line line-dashed line-lg pull-in"></div>
                          <div className="form-group">
                            <label className="col-sm-2 control-label"></label>
                            <div className="col-sm-10">
                              <button type="button" className="btn btn-primary" onClick={()=>this.saveProfile()}>Save</button>
                            </div>
                          </div>
                      </form>
                      </div>
                  </div>
              </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Panel title="Organization">
                <div className="tab-content">
                  <div className="tab-pane active" id="general">
                    <form className="form-horizontal" action="/admin/settings" method="post">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                          <input type="text" name="sitename" onChange={(e)=>{}} value={this.state.orgname} className="form-control" />
                        </div>
                      </div>
                      <div className="line line-dashed line-lg pull-in"></div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label"></label>
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary" onClick={()=>this.saveOrgProfile()}>Save</button>
                        </div>
                      </div>
                  </form>
                </div>
            </div>
          </Panel>
      </Col>
    </Row>
  </Page>
	);
	}
}

function mapStateToProps(state) {
  return {
  	token: state.app.token,
    user: state.user
  };
}

export default connect(mapStateToProps)(ProfileBig);
