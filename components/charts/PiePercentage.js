/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule PiePercentage
 */

import React, {Component} from 'react';

export default class PiePercentage extends Component {

  componentDidMount() {
    $('.percentage-light-1').easyPieChart({
      barColor: function(percent) {
          percent /= 100;
          return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
      },
      trackColor: '#eeeeee',
      barColor:'#90d7ed',
      scaleColor: false,
      lineCap: 'butt',
      lineWidth: 15,
      animate: 1000,
      size: 150
    });
  }

  componentWillReceiveProps(nextProps) {
     $('.percentage-light-1').easyPieChart({
      barColor: function(percent) {
          percent /= 100;
          return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
      },
      trackColor: '#eeeeee',
      barColor:'#90d7ed',
      scaleColor: false,
      lineCap: 'butt',
      lineWidth: 15,
      animate: 1000,
      size: 150
    });
  }

  render() {
    let {pct} = this.props;
    return (
      <div className="easy-pie-chart">
        <div className="percentage-light-1" data-percent={pct}><span>{pct+'%'}</span></div>
      </div>
    );
  }
}
