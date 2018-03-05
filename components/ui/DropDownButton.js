/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DropDownButton
 */

import React, {Component} from 'react';
import ActionLink from './ActionLink';

export default class DropDownButton extends Component {

	handleItemSelected(e) {
		if (this.props.onItemSelect) {
      this.props.onItemSelect(e);
    }
	}

	render() {

		var buttonClassName = 'btn-group ' + this.props.classes;

		if (this.props.isVisible) {
      buttonClassName += ' open';
    }

		let items = this.props.items.map(item => {
      return (<li key={item.id}><ActionLink itemSelected={(e)=>this.handleItemSelected(e)} dataid={item.id}>{item.name || item}</ActionLink></li>);
    });

		return (
			<div className={buttonClassName}>
  		<button type="button" className="btn btn-default" tabIndex="-1">{this.props.selectedLabel}</button>
  		<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
  			<span className="caret"></span>
  		</button> 
  		<ul className="dropdown-menu"> 
        {items}
  		</ul> 
  	</div> 
		);
	}
}
