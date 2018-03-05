/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule PinItem
 */

import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export default class PinItem extends Component {
  onView() {
    let {pin} = this.props;
    this.props.onSelect(pin._id);
  }

  onDelete(e) {
    e.preventDefault();
    let {pin} = this.props;
    this.props.onDelete(pin._id);
  }

  render() {
    let {pin, index} = this.props;
    return (
      <div className="pin">
        <section className="panel panel-default m-b-lg">
          <header className="panel-heading text-uc p-r">{pin.title}<strong> {pin.description}</strong>
            <button onClick={(e)=>this.onDelete(e)} style={{top: 0,right: 0, position: 'absolute'}} type="button" className="text-muted close">×</button>
            <hr />
          </header>
          <section className="panel-body">
          <a href="#" onClick={()=>this.onView()}>
            <img style={{width:'100%'}} src={pin.image_url} />
            </a>
          </section>
          <footer className="panel-footer">
            <span className="thumb-sm avatar pull-left m-r-xs">
              <img src={pin.author.avatar ? pin.author.avatar : ''} />
            </span>
            <strong className="d-b">{pin.author.name}</strong>
            <span className="text-muted text-xs">{moment(pin.dateCreated).fromNow()}</span>
          </footer>
        </section>
      </div>
    );
  }
}
