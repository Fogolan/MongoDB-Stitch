import React, { Component } from 'react';

import {I} from '../ui/';

export default class MailFolder extends Component {

	handleSelected(e) {
		this.props.onSelect(this.props.index);
	}

	render() {
		let {name, items, icon, color, active} = this.props;

		let badge = items ? <span className="label label-danger pull-right" style={{marginTop:16}}>{items}</span> : null;
		return (
			<li className={active ? 'active' : ''}>
				<a href="#" onClick={(e)=>this.handleSelected(e)}>
					<I icon={icon} color={'#c1c1c1'} /> {name} {badge}
				</a>
			</li>
		);
	}
}
