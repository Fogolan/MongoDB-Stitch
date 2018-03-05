/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Bootstrap
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';
import ModalFactory from '../components/modals/factory';

import {Alert, Button, Label, Panel} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

import ProgressBar from '../components/charts/ProgressBar';
import Slider from 'rc-slider';

import DatePicker from 'react-datepicker';
var shallowCompare = require('react-addons-shallow-compare');

const tips = {
  0: ' Strongly Disagree ',
  25: ' Disagree ',
  50: ' Impartial ',
  75: ' Agree ' ,
  100: ' Strongly Agree ',
};

class Bootstrap extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
      <Page>
        <Row>
          <Col size={4}> 
            <Panel title="Alerts">
              <Alert color="alert-info" title="This is the title">This is a <b>html</b> body</Alert>
              <Alert color="alert-danger">This is a <b>html</b> body</Alert>
              <Alert color="alert-warning">This is a <b>html</b> body</Alert>
              <Alert color="alert-success" persistant={true}>This is a <b>html</b> body</Alert>
            </Panel>
          </Col>
          <Col size={4}> 
            <Panel title="Progress">
              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" />
              <ProgressBar style={{backgroundColor:'#f77373'}} now={20} max={100} theme="progress-bar-danger" />
              <ProgressBar style={{backgroundColor:'#f77373'}} now={10} max={100} theme="progress-bar-info" />
              <ProgressBar style={{backgroundColor:'#f77373'}} now={70} max={100} theme="progress-bar-success" />
              <ProgressBar label={'With Label'} style={{backgroundColor:'#f77373', marginTop:10}} now={40} max={100} theme="progress-bar-warning"  />
            </Panel>
          </Col>
          <Col size={4}> 
            <Panel title="Slider">
              <div style={{width:'100%'}}>
                <Slider tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]}  step={25} defaultValue={50} />
              </div>
              <div className={'m-t-lg'} style={{width:'100%'}}>
                <Slider className={'slider-danger'} tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]}  step={25} defaultValue={50} />
              </div>
              <div className={'m-t-lg'} style={{width:'100%'}}>
                <Slider className={'slider-warning'} tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]}  step={25} defaultValue={50} />
              </div>
              <div className={'m-t-lg'} style={{width:'100%'}}>
                <Slider className={'slider-success'} tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]} step={25} defaultValue={50} />
              </div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={4}> 
            <Panel title="Labels">
              <Label title="bg-warning" color="bg-warning" classes={'m-r-sm m-b-sm pull-left'} />
              <Label title="bg-success" color="bg-success" classes={'m-r-sm m-b-sm pull-left'} />
              <Label title="bg-info" color="bg-info" classes={'m-r-sm m-b-sm pull-left'} />
              <Label title="bg-danger" color="bg-danger" classes={'m-r-sm m-b-sm pull-left'} />
              <Label title="bg-primary" color="bg-primary" classes={'m-r-sm m-b-sm pull-left'} />
              <Label title="bg-dark" color="bg-dark" classes={'m-r-sm m-b-sm pull-left'} />
            </Panel>
          </Col>
          <Col size={4}> 
            <Panel title="Tooltip">
              <button className="btn btn-success w100 m-b-md" data-balloon="Whats up!" data-balloon-pos="up">Button with Tooltip</button>
              <a href="#" data-balloon="Whats up!" data-balloon-pos="up">Link with Tooltip</a><br />
              <button className="btn btn-danger m-r-md m-t-lg" data-balloon="Whats up!" data-balloon-pos="up">Up</button>
              <button className="btn btn-warning m-r-md m-t-lg" data-balloon="Whats up!" data-balloon-pos="down">Down</button>
              <button className="btn btn-info m-r-md m-t-lg" data-balloon="Whats up!" data-balloon-pos="left">Left</button>
              <button className="btn btn-dark m-r-md m-t-lg" data-balloon="Whats up!" data-balloon-pos="right">Right</button><br />
              <Button icon="fa-facebook" classes={'m-t-lg'} rounded={true} color="btn-default" tooltip="Log in with facebook" />
            </Panel>
          </Col>
          <Col size={4}> 
            <Panel title="Date Picker">
              <DatePicker selected={moment()}/><br/><br/>
              <DatePicker inline selected={moment()} />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h3>Responsive Grid</h3>
          </Col>
        </Row>
        <Row>
          <Col size="12"><Panel>12</Panel></Col>
        </Row>
        <Row>
          <Col size="6"><Panel>6</Panel></Col><Col size="6"><Panel>6</Panel></Col>
        </Row>
        <Row>
          <Col size="4"><Panel>4</Panel></Col><Col size="4"><Panel>4</Panel></Col><Col size="4"><Panel>4</Panel></Col>
        </Row>
        <Row>
          <Col size="2"><Panel>2</Panel></Col><Col size="2"><Panel>2</Panel></Col><Col size="2"><Panel>2</Panel></Col><Col size="2"><Panel>2</Panel></Col><Col size="2"><Panel>2</Panel></Col><Col size="2"><Panel>2</Panel></Col>
        </Row>
        <Row>
          <Col size="12">
            <h3>Masonry Grid</h3>
          </Col>
        </Row>
        <Row mason={true}>
          <Col size="2" classes="pin m-b-sm"><Panel><div style={{height:300}}>A</div></Panel></Col>
          <Col size="4" classes="pin m-b-sm"><Panel>B</Panel></Col>
          <Col size="3" classes="pin m-b-sm"><Panel>C</Panel></Col>
          <Col size="6" classes="pin m-b-sm"><Panel>D</Panel></Col>
          <Col size="3" classes="pin m-b-sm"><Panel>E</Panel></Col>
          <Col size="8" classes="pin m-b-sm"><Panel><div style={{height:150}}>F</div></Panel></Col>
          <Col size="3" classes="pin m-b-sm"><Panel><div style={{height:250}}>G</div></Panel></Col>
          <Col size="4" classes="pin m-b-sm"><Panel>H</Panel></Col>
          <Col size="9" classes="pin m-b-sm"><Panel>I</Panel></Col>
          <Col size="10" classes="pin m-b-sm"><Panel>J</Panel></Col>
          <Col size="1" classes="pin m-b-sm"><Panel>K</Panel></Col>
        </Row>

      </Page>
		);
	}
}

export default Bootstrap;

