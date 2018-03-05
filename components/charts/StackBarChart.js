/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule StackBarChart
 */

import React from 'react';
import ReactChartist from 'react-chartist';
import moment from 'moment';

export default class StackBarChart extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {

    let horizontal = this.props.horizontal || false;

    let options = {
      // high: 200,
      low: 0,
      height: '300px',
      stackBars: true,
      horizontalBars:horizontal,
      fullWidth: true,
      chartPadding: {
        right: 50,
        top:50
      },
      axisY: {
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    };

    return (
      <ReactChartist type="Bar" className={'ct-chart'}  data={this.props.data} options={options} />
    );
  }
}
