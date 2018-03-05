import React, { Component } from 'react';

import moment from 'moment';

export default class MailBody extends Component {

	render() {
    
    let {from, from_avatar, dateCreated, subject} = this.props.email;

		return (
			<div className="mail-body">
				<div className="clear p-r">
				  <div className="pull-left clear w100">
					  <span className="thumb-sm avatar pull-left m-r-xs" style={{paddingTop:4}}>
              <img src={from_avatar} />
	          </span>
            <h1 className="m-t-none" style={{textTransformation:'capitalize'}}>{subject}</h1>
	          <div className="d-b" style={{padding:'0px 0px 0px 43px', lineHeight:'18px'}}><a href={`user/@elonmusk`}><strong className="">{from}</strong></a> to you, John and Paul</div>
            
				  </div>
          <div className="p-a" style={{top:5, right:0}}><span className="text-muted text-xs"><i className="fa fa-clock-o m-r-xs"></i>{moment(dateCreated).fromNow()}</span></div>
				</div>
				<hr/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex leo, euismod nec consequat at, dapibus et ipsum. Cras auctor dui maximus mi commodo volutpat. Duis egestas molestie tincidunt. Mauris ornare ipsum eros, non condimentum magna scelerisque tempor. Duis imperdiet tellus sit amet dolor scelerisque, a dapibus libero imperdiet. Proin imperdiet laoreet massa eu gravida. Vivamus tempus elit enim, eget malesuada mi pharetra sed. Praesent semper vel nisl ac aliquam. Curabitur et est nisi. Sed at suscipit risus. Sed vulputate mollis dapibus. Curabitur sed purus mattis, finibus leo eget, maximus ante. Suspendisse id tortor sit amet sem eleifend rhoncus. Proin vulputate arcu quis rutrum mattis.</p>
				<img className="thumbnail m-b-none" width="100%" src="https://d13yacurqjgara.cloudfront.net/users/747748/screenshots/2962627/dribble-shot.png" alt=""/>
				<div className="caption">Source : https://dribbble.com/shots/2962627-An-Event-Directory-for-Professionals on Dribbble</div>
				<p>Suspendisse lobortis, augue eget dapibus pellentesque, diam enim consequat velit, condimentum imperdiet turpis nisi nec est. Sed maximus ipsum non nisl tristique tincidunt. Fusce nec eros dapibus, laoreet justo vitae, bibendum erat. Cras tellus ante, dapibus in elementum sit amet, viverra et ligula. Aenean metus urna, aliquam sit amet dignissim vitae, accumsan vitae massa. Praesent eget elit ac orci auctor maximus. Morbi dictum purus ac lorem fringilla sollicitudin.</p>
			</div>
		);
	}
}
