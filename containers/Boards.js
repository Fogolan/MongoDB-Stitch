/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Boards
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

import ModalFactory from '../components/modals/factory';
import AddBoard from '../components/modals/AddBoard';
import {Row, Col, Page} from '../components/ui/Layout';
import {Button} from '../components/ui/';

import BoardItem from '../components/boards/BoardItem';

let Factory = ModalFactory.modalFromFactory;

let boardActions = LocalReduxOutlet('board').actions;
var shallowCompare = require('react-addons-shallow-compare');


class Boards extends Component {
    selectItem(index, appId) {
      let {dispatch} = this.props;
    }

    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }

    handleNewBoard(name,description) {
      let {dispatch, app, user, apps, token} = this.props;
      dispatch(boardActions.create(token, {
          _id : '3k2l3jk43lj43k2l4j32l',
          name: name, 
          description: description,
          app: 'k4j2kj423kj23klj2l23kl',
          dateCreated : Date.now(), 
          dateUpdated : Date.now(), 
          owner : {_id : user._id, name:user.name, avatar:user.avatar},
          private: false,
          collaborators :[]
      }));

      ModalFactory.hide('addboardModal');
    }

    newBoardClick(e) {
      e.preventDefault();
      ModalFactory.show('addboardModal');
    }

    deleteItem(id) {
      let {token, user, dispatch, params} = this.props;
      console.log('delete : ' + id);
      dispatch(boardActions.delete(token, {id:id}));
    }

	render() {
    const { dispatch, boards } = this.props;
    let i = 0;

    return (
			<Page height={800}>
        <Factory modalref="addboardModal" title="Add Board" factory={AddBoard} onCreate={(name,desc) => this.handleNewBoard(name,desc)} />
          <Row classes="pull-right text-right">
            <Button icon="fa fa-plus-square" color="btn-dark" label="New Board" onClick={(e)=>this.newBoardClick(e)} classes={'m-r-lg'} />
          </Row>
          <Row>
            {boards.list.map(board => {
                return <BoardItem key={i} index={i++} onDelete={(id)=>this.deleteItem(id)} onSelect={(index) => this.selectItem(index)} board={board} />
            })}
          </Row>
      </Page>
		);
	}
}


function mapStateToProps(state) {
  return {
    token: state.app.token,
    user: state.user,
    app:state.app,
    boards: state.boards
  };
}

export default connect(mapStateToProps)(Boards);

