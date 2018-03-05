/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Settings
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Row, Col, Page} from '../components/ui/Layout';
import {Panel} from '../components/ui/';

import Switch from '../components/ui/Switch';
import Input from '../components/ui/Input';
import DropDownButton from '../components/ui/DropDownButton';
import Slider from 'rc-slider';


const tips = {
  0: ' Dial-up ',
  25: ' ISDN ',
  50: ' Cable MBit ',
  75: ' Fiber MBit ' ,
  100: ' Fiber GBit ',
};

var shallowCompare = require('react-addons-shallow-compare');


class Settings extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

	render() {
		const {params, app} = this.props;
		return (
       <Page height={1000}>
          <Row>
            <Col size="8" offset="2">
              <Panel title="Settings" classes={'m-b-xl'}>
                <form className="form-horizontal">
                  
                  <div className="form-group">
                      <label className="col-sm-3 control-label">Username</label>
                      <div className="col-sm-5">
                          <input type="text" onChange={(e)=>{}} value={'@username'} className="form-control" />
                      </div>
                  </div>

                  <div className="form-group">
                      <label className="col-sm-3 control-label">Newsletter</label>
                      <div className="col-sm-5">
                          <Switch />
                      </div>
                  </div>

                  <div className="form-group">
                      <label className="col-sm-3 control-label">Network Speed</label>
                      <div className="col-sm-7">
                        <Slider className={'slider-danger'} tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]} step={25} defaultValue={50} />
                      </div>
                  </div>

                  <div className="form-group">
                      <label className="col-sm-3 control-label">Background Image</label>
                      <div className="col-sm-6">
                        <Input icon="fa fa-globe" placeholder="http://..." />
                      </div>
                  </div>

                  <div className="form-group">
                      <label className="col-sm-3 control-label">Privacy</label>
                      <div className="col-sm-6">
                        <DropDownButton items={[
                          {id:0, name:'item 1'},
                          {id:1, name:'item 2'},
                          {id:2, name:'item 3'},
                          ]} selectedLabel="pick something..." />
                      </div>
                  </div>

                </form>
              </Panel>
            </Col>
          </Row>
       </Page>
		)
	}
}

function mapStateToProps(state) {
  return {
  	token: state.app.token,
  	app: state.app,
    user:state.user
  };
}

export default connect(mapStateToProps)(Settings);