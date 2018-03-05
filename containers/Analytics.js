/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Dashboard
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import ReduxOutlet from '../outlets/ReduxOutlet';
import moment from 'moment';
import ModalFactory from '../components/modals/factory';

import LineChart from '../components/charts/LineChart';
import EasyPie from '../components/charts/EasyPie';
import ProgressBar from '../components/charts/ProgressBar';
import DropDownButton from '../components/ui/DropDownButton';

import {I, Panel, Button} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');


class Analytics extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    const { dispatch } = this.props;
    let i = 0;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel title="Consumption">
              <Row>
                <Col size={12} classes="text-right">
                  <Button color="btn-info" label="All"  classes={'m-r-sm'}/>
                  <DropDownButton items={[
                    {id:0, name:'item 1'},
                    {id:1, name:'item 2'},
                    {id:2, name:'item 3'},
                    ]} selectedLabel="By product" />
                </Col>
              </Row>
              <Row classes="m-t-lg">
                
                <Col size={3} classes={'text-center'}>
                  <EasyPie 
                    size={90}
                    barColor={'#f4b936'}
                    trackColor={'#fbfbfb'}
                    lineWidth={15}
                    percent={30}
                    fontSize='16px'
                    theme="honeycomb_light"
                  />
                  <h4 className="m-b-none">Read</h4>
                  <small>Total reads</small>
                </Col>

                <Col size={3} classes={'text-center'}>
                  <EasyPie 
                    size={90}
                    barColor={'#f27f6d'}
                    trackColor={'#fbfbfb'}
                    lineWidth={15}
                    percent={0}
                    fontSize='16px'
                    theme="honeycomb_light"
                  />
                  <h4 className="m-b-none">Watch</h4>
                  <small>Total reads</small>
                </Col>

                <Col size={3} classes={'text-center'}>
                  <EasyPie 
                    size={90}
                    barColor={'#fbfbfb'}
                    trackColor={'#fbfbfb'}
                    lineWidth={15}
                    percent={0}
                    fontSize='16px'
                    theme="honeycomb_light"
                  />
                  <h4 className="m-b-none">Download</h4>
                  <small>Total reads</small>
                </Col>

                <Col size={3} classes={'text-center'}>
                  <EasyPie 
                    size={90}
                    barColor={'#36a9ae'}
                    trackColor={'#fbfbfb'}
                    lineWidth={15}
                    percent={90}
                    fontSize='16px'
                    theme="honeycomb_light"
                  />
                  <h4 className="m-b-none">Listen</h4>
                  <small>Total reads</small>
                </Col>
              
              </Row>
              <LineChart data={{labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                series: [
                [30, 20, 50, 40, 45, 15, 25, 65, 70, 80]
                ]}} />

                <Row classes={'m-t-lg'}>
                <Col size={12}>
                      <table className="table"> 
                        <thead> 
                          <tr> 
                            <th>Device</th> 
                            <th>Consumed</th> 
                            <th>Potential</th> 
                            <th>Distribution</th> 
                          </tr> 
                        </thead> 
                        <tbody> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-default" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-danger" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-success" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-info" />
                            </td> 
                          </tr> 
                        </tbody> 
                      </table>
                  </Col>
                </Row>
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

export default connect(mapStateToProps)(Analytics);

