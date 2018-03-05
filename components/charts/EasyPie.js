/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule EasyPie
 */

import React, {Component} from 'react';


const SpanStyle = {
  default : {
    background: '#90d7ed',
    width: 60,
    height: 60,
    lineHeight: '50px',
    borderRadius: '50%',
    display: 'inline-block',
    color: '#ffffff',
    border: '5px solid #e9f7fb',
    textAlign: 'center'
  },
  honeycomb_dark: {
    fontSize: 40,
    width: 70,
    height: 80,
    display: 'inline-block',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  honeycomb_light : {
    fontSize: 40,
    width: 70,
    height: 80,
    display: 'inline-block',
    color: '#1d1d1d',
    textAlign: 'center',
    fontWeight: 'bold'
  }
}


export default class EasyPie extends Component {
  renderArc() {
    const {size, percent, lineWidth} = this.props;
    const radius = (size - lineWidth) / 2;

    var deg = 3.6 * percent;
    var rad = deg * Math.PI / 180;
    var x = size / 2 + radius * Math.sin(rad);
    var y = size / 2 - radius * Math.cos(rad);
    var offsetTop = lineWidth / 2;

    if (percent === 0) {
      var path = [];
    } else {
      var path = [
        'M',
        size / 2,
        offsetTop,
        'A',
        radius,
        radius,
        0,
        +(deg > 180),
        1,
        x,
        y
      ];
    }
    return path.join(' ');
  }

  render() {
    let {size, lineWidth, percent, barColor, fontSize, trackColor, theme} = this.props;
    const radius = (size - lineWidth) / 2;

    const hidelabel = this.props.hidelabel || false;

    if (theme == '') {
      theme = 'default'
    }

    if (fontSize == null) {
      fontSize = 40;
    }

    let centerLabel = hidelabel ? <span style={Object.assign({},SpanStyle[theme],{fontSize:fontSize})}>&nbsp;</span> : <span style={Object.assign({},SpanStyle[theme],{fontSize:fontSize})}>{percent+'%'}</span>
    return (
      <div className="dib">
        <div style={{width:size, height:size, lineHeight:size+'px', position: 'relative', textAlign: 'center'}}>
          {centerLabel}
          <svg version="1.1" width={size} height={size} style={{position:'absolute', top:0, left:0}}>
            <circle cx={size/2} cy={size/2} r={radius} stroke={trackColor} strokeWidth={lineWidth} fill="none"></circle>
            <path stroke={barColor} strokeWidth={lineWidth} strokeLinecap="round" fill="none" d={this.renderArc()}></path>
          </svg>
        </div>
      </div>
    );
  }
}
