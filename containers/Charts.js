/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Charts
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import ReduxOutlet from '../outlets/ReduxOutlet';
import moment from 'moment';
import ModalFactory from '../components/modals/factory';

let Factory = ModalFactory.modalFromFactory;

import LineChart from '../components/charts/LineChart';
import StackBarChart from '../components/charts/StackBarChart';
import BarChart from '../components/charts/BarChart';
import EasyPie from '../components/charts/EasyPie';
import ProgressBar from '../components/charts/ProgressBar';
import PieChart from '../components/charts/PieChart';

import {Panel} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';
var shallowCompare = require('react-addons-shallow-compare');


class Charts extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {

    const { dispatch } = this.props;
    let i = 0;

    return (
      <Page>
        <Row>
          <Col size={{md:6}}>
            <Panel title="Stacked Bar">
              <StackBarChart data={{
                labels: ['RPU 60', 'FPU 230', 'EPU 60', 'CE 220'],
                series: [
                  [800, 1200, 1400, 1300],
                  [200, 400, 500, 300],
                  [100, 200, 400, 600],
                  [50, 200, 400, 600]
                ]
              }} horizontal={false} />
            </Panel>
          </Col>
          <Col size={6}>
            <Panel title="Stacked Bar (Horizontal)">
              <StackBarChart data={{
                  labels: ['RPU 60', 'FPU 230', 'EPU 60', 'CE 220'],
                  series: [
                    [800, 1200, 1400, 1300],
                    [200, 400, 500, 300],
                    [100, 200, 400, 600],
                    [50, 200, 400, 600]
                  ]
                }} horizontal={true} />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Panel title="Multi-Line">
              <LineChart data={{labels: ['M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                series: [
                [30, 20, 50, 40, 45, 15, 25, 65, 70, 80],
                [5, 10, 20, 70, 85, 45, 15, 65, 20, 30],
                [15, 40, 10, 10, 5, 75, 65, 55, 10, 50]
                ]}} />
            </Panel>
          </Col>
        </Row>

       <Row>
          <Col size="12">
            <Panel title="Progress">
              <Col size="4" classes="text-center m-b-lg">
                <EasyPie 
                  size={150}
                  barColor={'#5fe4c3'}
                  trackColor={'#fbfbfb'}
                  lineWidth={5}
                  percent={40}
                  theme="honeycomb_light"
                />
              </Col>
              <Col size="4" classes="text-center m-b-lg">
                <EasyPie 
                  size={150}
                  barColor={'#8aceef'}
                  trackColor={'#fbfbfb'}
                  lineWidth={5}
                  percent={15}
                  theme="honeycomb_light"
                />
              </Col>
              <Col size="4" classes="text-center">
                <EasyPie 
                  size={150}
                  barColor={'#ffe06e'}
                  trackColor={'#fbfbfb'}
                  lineWidth={5}
                  percent={25}
                  theme="honeycomb_light"
                />
              </Col>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size="6">
            <Panel title="Progress Bar">
              <ProgressBar label="Warning" now={10} max={100} theme="progress-bar-warning" />
              <ProgressBar label="Danger" now={80} max={100} theme="progress-bar-danger" />
              <ProgressBar label="Info" now={50} max={100} theme="progress-bar-info" />
              <ProgressBar label="Success" now={50} max={100} theme="progress-bar-success" />
            </Panel>
          </Col>

        <Col size="6">
          <Panel title="Simple Bar">
            <BarChart data={{
              labels: ['RPU 60', 'FPU 230', 'EPU 60', 'CE 220'],
              series: [
                [800, 1200, 1400, 1300]
              ]
            }} horizontal={true} />
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <Panel title="Simple Pie">
            <PieChart data={{series:[5,6,4]}} width="100%" />
          </Panel>
        </Col>   

        <Col size="6">
          <Panel title="Simple Donut">    
            <PieChart donut={true} data={{series:[5,6,4]}} width="100%" />
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
    user: state.user,
    apps:state.apps,
    app:state.app
  };
}

export default connect(mapStateToProps)(Charts);

