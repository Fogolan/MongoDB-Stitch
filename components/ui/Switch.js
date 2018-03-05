/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Switch
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

var update = require("react-addons-update");

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.on
    };
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(!this.state.on);
    }
    this.setState({ on: !this.state.on });
  }

  render() {
    var switchStyleOn = {
      borderColor: "rgb(121, 212, 167)",
      boxShadow: "rgb(121, 212, 167) 0px 0px 0px 0px inset",
      transition: "border 0.4s, box-shadow 0.4s, background-color 1.2s",
      WebkitTransition: "border 0.4s, box-shadow 0.4s, background-color 1.2s",
      backgroundColor: "rgb(121, 212, 167)"
    };

    var switchStyleOff = {
      borderColor: "rgb(232, 232, 232)",
      boxShadow: "rgb(232, 232, 232) 0px 0px 0px 0px inset",
      backgroundColor: "rgb(232, 232, 232)"
    };

    var buttonStyleOn = {
      left: 13,
      transition: "left 0.2s",
      WebkitTransition: "left 0.2s",
      backgroundColor: "rgb(255, 255, 255)"
    };

    var buttonStyleOff = {
      left: 0
    };

    return (
      <div className={this.props.classes} onClick={e => this.handleChange(e)}>
        <input type="checkbox" className="js-switch-small" style={{ display: "none" }} />
        <span
          className="switchery switchery-small"
          style={update(switchStyleOn, { $merge: !this.state.on ? switchStyleOff : {} })}
        >
          <small style={update(buttonStyleOn, { $merge: !this.state.on ? buttonStyleOff : {} })} />
        </span>
      </div>
    );
  }
}

Switch.propTypes = {
  onChange: PropTypes.func,
  on: PropTypes.bool,
  classes: PropTypes.string
};

Switch.defaultProps = {
  on: false
};

export default Switch;
