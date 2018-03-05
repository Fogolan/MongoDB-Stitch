/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Notes
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import LineChart from '../components/charts/LineChart';

import { selectApp, logout } from '../actions';
import moment from 'moment';

import ReduxOutlet from '../outlets/ReduxOutlet';
import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

import ModalFactory from '../components/modals/factory';
import AddNote from '../components/modals/AddNote';

import {Row, Col, Page} from '../components/ui/Layout';


let Factory = ModalFactory.modalFromFactory;

let noteActions = LocalReduxOutlet('note', '576a87c1e0b944000054d234').actions;
var shallowCompare = require('react-addons-shallow-compare');

class Notes extends Component {

    componentDidMount() {
        const { dispatch, app, apps, token } = this.props;
        dispatch(noteActions.fetch(token, {}));
    }

    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }

    handleNewNote(name,description) {

        let {dispatch, app, user, token} = this.props;

        dispatch(noteActions.create(token, {
            _id: '4m4km34k3m43k4m3',
            name: name, 
            description: description,
            app: '343k34jk34j34k3j43k4',
            dateCreated : Date.now(), 
            dateUpdated : Date.now(), 
            excerpt : 'New Note',
            author : {_id : user._id, name:user.name, avatar:user.avatar}
        }));

        ModalFactory.hide('addnoteModal');
    }

    newNoteClick(e) {
        e.preventDefault();
        ModalFactory.show('addnoteModal');
    }

    deleteItem(id) {
        let {token, user, dispatch, params} = this.props;
        dispatch(noteActions.delete(token, {_id:id}));
    }

	render() {
    const { dispatch, notes } = this.props;
    let i = 0;

    return (
			<Page height={900}>
        <Factory modalref="addnoteModal" title="Add Note" factory={AddNote} onCreate={(name,desc) => this.handleNewNote(name,desc)} />
          <Row>
          <div className="pull-right w50 text-right m-r-lg">
            <button className="btn btn-dark" onClick={(e)=>this.newNoteClick(e)}> 
              <i className="fa fa-plus-square"></i>
              <span className="btn-text">New Note</span> 
            </button>
          </div>
        </Row>
        <Row>
          {notes.list.map(note => {
              return <NoteItem key={i} index={i++} onDelete={(id)=>this.deleteItem(id)} onSelect={(index) => this.selectItem(index)} note={note} />
          })}
        </Row>
      </Page>
		);
	}
}

class NoteItem extends Component {

    onDelete(e) {
        let {note} = this.props;
        e.preventDefault();
        this.props.onDelete(note._id);
    }

    render() {
      let {note, index} = this.props;
      return (
        <div className="col-md-4 col-sm-6">
          <section className="panel panel-default m-b-lg">
            <header className="panel-heading text-uc">{note.name}<strong> {note.description}</strong>
            <button onClick={(e)=>this.onDelete(e)} style={{top: 9,right: 27, position: 'absolute'}} type="button" className="text-muted close">×</button>
              <hr />
            </header>
            <Link to={`/apps/notes/${note._id}`}>
              <section className="panel-body" style={{paddingLeft:10}}>{note.excerpt}</section>
            </Link>
            <footer className="panel-footer">
              <span className="thumb-sm avatar pull-left m-r-xs">
                <img src={note.author.avatar ? note.author.avatar : ''} />
              </span>
              <strong className="d-b">{note.author.name}</strong>
              <span className="text-muted text-xs">{moment(note.dateCreated).fromNow()}</span>
            </footer>
          </section>
        </div>
      );
    }
}



function mapStateToProps(state) {
  return {
    token: state.app.token,
    user: state.user,
    app:state.app,
    notes: state.notes
  };
}

export default connect(mapStateToProps)(Notes);

