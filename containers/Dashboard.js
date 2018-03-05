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
import Profile from '../components/widgets/Profile';

import { selectApp, logout } from '../actions';

import ReduxOutlet from '../outlets/ReduxOutlet';
import moment from 'moment';
import ModalFactory from '../components/modals/factory';

let Factory = ModalFactory.modalFromFactory;

import LineChart from '../components/charts/LineChart';
import EasyPie from '../components/charts/EasyPie';
import ProgressBar from '../components/charts/ProgressBar';


import {I, Panel, Button} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

var shallowCompare = require('react-addons-shallow-compare');

class Dashboard extends Component {

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
            <Panel classes={'no-padder'}>
              <div className="col-md-3 summaryItem">
                <h1>85</h1>
                <p>CUSTOMERS</p>
              </div>

              <div className="col-md-3 summaryItem">
                <h1>565</h1>
                <p>USERS</p>
              </div>

              <div className="col-md-3 summaryItem">
                <h1 style={{color:'#28dbec'}}>$112,375</h1>
                <p>DAILY REVENUE</p>
              </div>

              <div className="col-md-3 summaryItem">
                <h1 style={{color:'#a48ad4'}}>45%</h1>
                <p>GOALS MET</p>
              </div>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col size={9}>
            <Panel title="Performance">
              <LineChart data={{labels: ['M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                series: [
                [30, 20, 50, 40, 45, 15, 25, 65, 70, 80],
                [5, 10, 20, 70, 85, 45, 15, 65, 20, 30]
                ]}} />
            </Panel>
          </Col>

          <Col size={3}>
            <Panel title="Users" scrollHeight={315}>
              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/5.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Andrew Wilson</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/7.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Noah Wilson</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/8.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Heather Smith</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/img3.jpg" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Erin Vieira</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/avatar.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Mia Vieira</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/5.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Andrew Wilson</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/7.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Noah Wilson</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/8.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Heather Smith</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/img3.jpg" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Erin Vieira</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <article className="comment-item"> 
                <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/avatar.png" className="img-circle" /></a> 
                <section className="comment-body"> 
                  <header> <a href="#"><strong>Mia Vieira</strong></a></header> 
                  <div className="text-muted">UI / UX Developer</div> 
                </section> 
              </article>

              <footer className="text-center">
                <hr/>
                  <Button color="btn-info" label="Show More" />
              </footer>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#F06292'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={30}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Proposals</h4>
              <small>Total proposals</small>
            </Panel>
          </Col>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#3949AB'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={80}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Reports</h4>
              <small>Total reports</small>
            </Panel>
          </Col>
          <Col size={4}>
            <Panel classes={'text-center'}>
              <EasyPie 
                  size={150}
                  barColor={'#F4511E'}
                  trackColor={'rgba(0,0,0,0.1)'}
                  lineWidth={5}
                  percent={70}
                  theme="honeycomb_light"
                />
              <h4 className="m-b-none">Sales</h4>
              <small>Total Sales</small>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={9}>
            <Panel>
              <table className="table"> 
                <thead> 
                  <tr> 
                    <th>Device</th> 
                    <th className="hidden-xs">Consumed</th> 
                    <th className="hidden-xs">Potential</th> 
                    <th>Distribution</th> 
                    <th></th>
                  </tr> 
                </thead> 
                <tbody> 
                  <tr> 
                    <td>Heating - House</td> 
                    <td className="hidden-xs">45 kW</td> 
                    <td className="hidden-xs">30 kW</td> 
                    <td> 
                      <ProgressBar style={{backgroundColor:'#f77373'}} now={30} max={100} theme="progress-bar-warning" />
                    </td> 
                    <td className="text-right">
                      <a href="javascript:;" className="m-r-sm"><i className="fa text-muted fa-trash-o"></i></a>
                      <a href="javascript:;"><i className="fa text-muted fa-edit"></i></a>
                    </td>
                  </tr> 
                  <tr> 
                    <td>Heating - House</td> 
                    <td className="hidden-xs">45 kW</td> 
                    <td className="hidden-xs">30 kW</td> 
                    <td> 
                      <ProgressBar style={{backgroundColor:'#f77373'}} now={80} max={100} theme="progress-bar-success" />
                    </td> 
                    <td className="text-right">
                    
                      <a href="javascript:;" className="m-r-sm"><i className="fa text-muted fa-trash-o"></i></a>
                      <a href="javascript:;"><i className="fa text-muted fa-edit"></i></a>
                    </td>
                  </tr> 
                  <tr> 
                    <td>Heating - House</td> 
                    <td className="hidden-xs">45 kW</td> 
                    <td className="hidden-xs">30 kW</td> 
                    <td> 
                      <ProgressBar style={{backgroundColor:'#f77373'}} now={10} max={100} theme="progress-bar-danger" />
                    </td> 
                    <td className="text-right">
                      <a href="javascript:;" className="m-r-sm"><i className="fa text-muted fa-trash-o"></i></a>
                      <a href="javascript:;"><i className="fa text-muted fa-edit"></i></a>
                    </td>
                  </tr> 
                  <tr> 
                    <td>Heating - House</td> 
                    <td className="hidden-xs">45 kW</td> 
                    <td className="hidden-xs">30 kW</td> 
                    <td> 
                      <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-info" />
                    </td> 
                    <td className="text-right">
                      <a href="javascript:;" className="m-r-sm"><i className="fa text-muted fa-trash-o"></i></a>
                      <a href="javascript:;"><i className="fa text-muted fa-edit"></i></a>
                    </td>
                  </tr> 
                  <tr> 
                    <td>Heating - House</td> 
                    <td className="hidden-xs">45 kW</td> 
                    <td className="hidden-xs">30 kW</td> 
                    <td> 
                      <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" />
                    </td> 
                    <td className="text-right">
                      <a href="javascript:;" className="m-r-sm"><i className="fa text-muted fa-trash-o"></i></a>
                      <a href="javascript:;"><i className="fa text-muted fa-edit"></i></a>
                    </td>
                  </tr> 
                </tbody> 
              </table>
            </Panel>
          </Col>
          <Col size={3}>
            <Panel>
              <Button icon="fa-facebook" color="bg-info" classes={'w100'} label="Find us on facebook" />
              <Button icon="fa-envelope-o" color="bg-danger" classes={'w100 m-t-sm'} label="Send us an email" />
              <Button icon="fa-sign-out" color="bg-success" classes={'w100 m-t-sm'} label="Sign out" />
              <h5 className="m-t-md"><I icon="assignment_turned_in" classes={'m-r-xs'} size={13} />Link to this site</h5>
              <p>There is a simple form with a button below this.</p>
              <Button color="bg-dark" classes={'w100 m-t-sm'} label="Send to me" />
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
    user: state.user,
    app:state.app
  };
}

export default connect(mapStateToProps)(Dashboard);

