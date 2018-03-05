/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule BarChart
 */

import React from 'react';
import ReactChartist from 'react-chartist';
import moment from 'moment';

export default class BarChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let horizontal = this.props.horizontal || false;

    let options = {
      low: 0,
      height: '300px',
      stackBars: false,
      horizontalBars:horizontal,
      fullWidth: true,
      chartPadding: {
        right: 50,
        top:0
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
