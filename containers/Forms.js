/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Forms
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';

import {Button, Panel} from '../components/ui';
import {Row, Col, Page} from '../components/ui/Layout';


import Input from '../components/ui/Input';

import DraftEditor from '../components/ui/DraftEditor';

var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/monokai.css');

const sourceCode = `import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';

import {Button} from '../components/ui';
import Input from '../components/ui/Input';`;

var shallowCompare = require('react-addons-shallow-compare');

class Forms extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    var options = {
      mode: 'javascript',
      theme:'monokai'
    };
    return (
  		<Page>
        <Row>
          <Col size={6}>
            <Panel title="Simple">
              <form role="form">
                <div className="form-group">
                  <label>Email</label>
                  <Input placeholder="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Input placeholder="password" errorMessage="required" format="password" />
                </div>
                <div className="checkbox"> 
                  <label> <input type="checkbox" /> Remember me </label> 
                </div>
                <Button label="login" color="btn-info" />
              </form>
            </Panel>
          </Col>
          <Col size={6}>
            <Panel title="Simple (horizontal)">
              <form role="form" className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-lg-2">Email</label>
                  <Input classes={'col-lg-10'} placeholder="email" />
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-2">Password</label>
                  <Input classes={'col-lg-10'} placeholder="password" errorMessage="required" format="password" onFieldChange={()=>{}} />
                </div>
                <div className="form-group">
                  <div className="checkbox col-lg-offset-2 col-lg-10"> 
                    <label> <input type="checkbox" /> Remember me </label> 
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                    <Button label="login" color="btn-danger" />
                  </div>
                </div>
              </form>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={6}>
            <Panel title="Simple (with icons)">
              <form role="form">
                <div className="form-group">
                  <label>Email</label>
                  <Input icon="fa fa-user" placeholder="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Input icon="fa fa-key" placeholder="password" errorMessage="required" format="password" />
                </div>
                <div className="checkbox"> 
                  <label> <input type="checkbox" /> Remember me </label> 
                </div>
                <Button label="login" color="btn-success" />
              </form>
            </Panel>
          </Col>
          <Col size={6}>
            <Panel title="Simple (validation)">
              <form role="form">
                <div className="form-group">
                  <label>Email</label>
                  <Input icon="fa fa-user" format="email" errorMessage="please verify your email." placeholder="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Input icon="fa fa-key" required={true} placeholder="password" errorMessage="password is required" format="password" />
                </div>
                <div className="checkbox"> 
                  <label> <input type="checkbox" /> Remember me </label> 
                </div>
                <Button label="login" color="btn-warning" />
              </form>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <Panel title="Simple (Inline)">
              <form role="form" className="form-inline">
                <div className="form-group m-r-sm">
                  <Input icon="fa fa-user" placeholder="email" />
                </div>
                <div className="form-group m-r-sm">
                  <Input icon="fa fa-key" placeholder="password" errorMessage="required" format="password" />
                </div>
                <div className="checkbox m-r-sm"> 
                  <label> <input type="checkbox" /> Remember me </label> 
                </div>
                <Button label="login" color="btn-dark" />
              </form>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <Panel title="Elements">
              <form role="form">
                <div className="form-group">
                  <label>Basic</label>
                  <Input />
                </div>
                <div className="form-group">
                  <label>Icon</label>
                  <Input icon="fa fa-rocket" />
                </div>
                <div className="form-group">
                  <label>Placeholder</label>
                  <Input placeholder="write something..." />
                </div>

                 <div className="form-group">
                  <label>Rounded</label>
                  <Input rounded={true} placeholder="write something..." />
                </div>

                <div className="form-group">
                  <label>Text Area</label>
                  <textarea className="form-control" rows="10" />
                </div>

                <div className="form-group">
                  <label>Draft JS</label>
                  <DraftEditor style={{height:300}} onFieldChange={()=>{}} />
                </div>
                <div className="form-group">
                  <label>Syntax</label>
                  <div>
                    <Codemirror value={sourceCode} options={options} />
                  </div>
                </div>
              </form>
            </Panel>
          </Col>
        </Row>
      </Page>
		);
	}
}

export default Forms;

