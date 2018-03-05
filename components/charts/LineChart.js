/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule LineChart
 */

import React from 'react';
import ReactChartist from 'react-chartist';
import moment from 'moment';

export default class LineChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let options = {
      high: 100,
      low: 0,
      showArea: true,
      height: '300px',
      fullWidth: true,
      chartPadding: {
        right: 50,
        top:50
      },
      axisX : {
        showGrid: true
      },
      axisY: {
        showGrid: false
      }
    };

    return (
      <ReactChartist type="Line" className={'ct-chart'}  data={this.props.data} options={options} />
    );
  }
}
