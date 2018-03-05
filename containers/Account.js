/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Account
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Row, Col, Page} from '../components/ui/Layout';
import {Panel, Button} from '../components/ui/';

import ModalFactory from '../components/modals/factory';
import ChangePlan from '../components/modals/ChangePlan';
import ReportBilling from '../components/modals/ReportBilling';

var shallowCompare = require('react-addons-shallow-compare');


class Account extends Component {

  handleChangePlan() {
    ModalFactory.show('changePlanModal');    
  }

  handleReportBilling() {
    ModalFactory.show('reportModal');    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

	render() {
    var Factory = ModalFactory.modalFromFactory;

		return (
			<Page height={1000}>
        <Factory modalref="changePlanModal" title="Upgrade your plan" large={true} factory={ChangePlan} />
        <Factory modalref="reportModal" title="Report a billing problem" factory={ReportBilling} />
        <Row classes={'m-b-xl'}>
          <Col size="8" offset="2">
            <Panel title="Account">
              <h4>Your Plan</h4>
              <h2>Free</h2>
              <p className="text-muted">1 project (public)</p>
              <a href="javascript:;" onClick={(e)=>this.handleChangePlan(e)} className="m-t-lg btn btn-s-md btn-primary">Upgrade Plan</a>
              <hr />
              <h4>Invoice History</h4>
              <table className="table m-b-none m-t-xl">
                <tbody>
                  <tr><td className="border-none"><b>July 2014</b></td><td className="border-none">$345.65</td> 
                  <td className="text-danger border-none">
                    <Button label="pay now" size="btn-sm" color="btn-success" />
                  </td></tr>
                  <tr><td className="border-none"><b>June 2014</b></td><td className="border-none">$345.65</td><td className="text-success text-bold border-none">Paid</td></tr>
                  <tr><td className="border-none"><b>May 2014</b></td><td className="border-none">$99.50</td><td className="text-success text-bold border-none">Paid</td></tr>
                  <tr><td className="border-none"><b>Apr 2014</b></td><td className="border-none">$413.90</td><td className="text-success text-bold border-none">Paid</td></tr>
                  <tr><td className="border-none"><b>Mar 2014</b></td><td className="border-none">$390.90</td><td className="text-success text-bold border-none">Paid</td></tr>
                </tbody>
              </table>
              <hr />
              <button type="button" onClick={(e)=>this.handleReportBilling(e)} className="btn btn-warning m-t-md">Report a Billing Problem</button>
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

export default connect(mapStateToProps)(Account);