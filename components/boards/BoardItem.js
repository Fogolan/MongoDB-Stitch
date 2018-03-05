/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule BoardItem
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import CompositePoster from './CompositePoster';


export default class BoardItem extends Component {

  onDelete(e) {
    let {board} = this.props;
    e.preventDefault();
    this.props.onDelete(board._id);
  }

  render() {
    let {board, index} = this.props;
    return (
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
        <section className="panel panel-default m-b-lg">
          <header className="panel-heading text-uc">{board.name}<strong> {board.description}</strong>
            <button onClick={(e)=>this.onDelete(e)} style={{top: 9,right: 27, position: 'absolute'}} type="button" className="text-muted close">×</button>
            <hr />
          </header>
          <section className="panel-body">
            <Link to={`/apps/boards/${board._id}`}>
              <CompositePoster />
            </Link>
          </section>
          <footer className="panel-footer text-center"/>
        </section>
      </div>
    );
  }
}