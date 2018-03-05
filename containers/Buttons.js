/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Buttons
 */


import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';
import ModalFactory from '../components/modals/factory';

import {Panel, Button} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');

class Buttons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Page height={1000}>
        <Row>
          <Col size="6" className="pin">
            <Panel title="Buttons">
              <Button label="Default Button" size="btn-sm" color="btn-default" classes={'m-r-sm m-b-sm'} />
              <Button label="Primary Button" size="btn-sm" color="btn-primary" classes={'m-r-sm m-b-sm'}  />
              <Button label="Success Button" size="btn-sm" color="btn-success" classes={'m-r-sm m-b-sm'}  />
              <Button label="Info Button" size="btn-sm" color="btn-info" classes={'m-r-sm  m-b-sm'}  />
              <Button label="Warning Button" size="btn-sm" color="btn-warning" classes={'m-r-sm m-b-sm'}  />
              <Button label="Danger Button" size="btn-sm" color="btn-danger" classes={'m-r-sm m-b-sm'}  />
              <Button label="Dark Button" size="btn-sm" color="btn-dark" classes={'m-r-sm m-b-sm'}  />
            </Panel>
          </Col>
          <Col size="6" className="pin">
            <Panel title="Buttons (rounded)">
              <Button label="Default Button" size="btn-sm" color="btn-default" rounded={true} classes={'m-r-sm m-b-sm'} />
              <Button label="Primary Button" size="btn-sm" color="btn-primary" rounded={true} classes={'m-r-sm m-b-sm'}  />
              <Button label="Success Button" size="btn-sm" color="btn-success" rounded={true} classes={'m-r-sm m-b-sm'}  />
              <Button label="Info Button" size="btn-sm" color="btn-info" rounded={true} classes={'m-r-sm  m-b-sm'}  />
              <Button label="Warning Button" size="btn-sm" color="btn-warning" rounded={true} classes={'m-r-sm m-b-sm'}  />
              <Button label="Danger Button" size="btn-sm" color="btn-danger" rounded={true} classes={'m-r-sm m-b-sm'}  />
              <Button label="Dark Button" size="btn-sm" color="btn-dark" rounded={true} classes={'m-r-sm m-b-sm'}  />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="6" className="pin">
            <Panel title="Buttons (sizes)">
              <Button label="Extra Small Button" size="btn-xs" color="btn-info" rounded={false} classes={'m-r-sm  m-b-sm'}  />
              <Button label="Small Button" size="btn-sm" color="btn-default" rounded={false} classes={'m-r-sm m-b-sm'} />
              <Button label="Default Button" size="btn-default" color="btn-primary" rounded={false} classes={'m-r-sm m-b-sm'}  />
              <Button label="Large Button" size="btn-lg" color="btn-success" rounded={false} classes={'m-r-sm m-b-sm'}  />
            </Panel>
          </Col>
          <Col size="6" className="pin">
            <Panel title="Buttons (icons)">
              <Button label="Default Button" icon="fa-rocket" size="btn-default" color="btn-primary" rounded={false} classes={'m-r-sm m-b-sm'}  />
              <Button label="" icon="fa-user" size="btn-default" color="btn-info" rounded={false} classes={'m-r-sm m-b-sm'}  />
              <Button label="" icon="fa-facebook" size="btn-default" color="btn-default" rounded={true} classes={'m-r-sm m-b-sm'}  />
              <Button label="" icon="fa-sign-out" size="btn-default" color="btn-danger" rounded={true} classes={'m-b-sm'} style={{padding: '6px 9px 6px 10px'}} />
            </Panel>
          </Col>
        </Row>
        <Row>
           <Col size="6" className="pin">
            <Panel title="Buttons (groups)">
              <div className="btn-group">
                <Button label="1" size="btn-sm" color="btn-default" rounded={false} classes={'m-b-sm'} />
                <Button label="2" size="btn-sm" color="btn-default" rounded={false} classes={'m-b-sm'} />
                <Button label="3" size="btn-sm" color="btn-default" rounded={false} classes={'m-b-sm'} />
              </div>
            </Panel>
          </Col>
          <Col size="6" className="pin">
            <Panel title="Buttons (groups vertical)">
              <div className="btn-group-vertical">
                <Button label="1" size="btn-sm" color="btn-default" rounded={false} />
                <Button label="2" size="btn-sm" color="btn-default" rounded={false} />
                <Button label="3" size="btn-sm" color="btn-default" rounded={false} />
              </div>
            </Panel>
          </Col>
        </Row>
      </Page>
		);
	}
}

export default Buttons;

