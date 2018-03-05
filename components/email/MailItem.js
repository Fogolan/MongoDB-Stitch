import React, { Component } from 'react';

import moment from 'moment';

export default class MailItem extends Component {

	handleSelect(e) {
		this.props.emailSelected(this.props.email);
	}

	render() {
		let {from, from_avatar, subject, excerpt, dateCreated,  attachments, favorite, read} = this.props.email;
		let classes = 'mail-item clear';
		if (this.props.active) classes += ' active';
		return (
			<div className={classes} onClick={(e)=>this.handleSelect(e)}>
				<span className="thumb-sm avatar pull-left m-r-xs">
                  <img src={from_avatar} />
              	</span>
              	<div className="d-b"><a href={`user/@badRobot`}><strong className="">{from}</strong></a><span className="text-muted text-xs pull-right">{moment(dateCreated).fromNow()}</span></div>
                <div className="subject"><strong>{subject}</strong></div>
                <div className="body pull-left m-t-sm">{excerpt}</div>
			</div>
		);
	}
}
