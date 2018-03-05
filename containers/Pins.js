/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Pins
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import ModalFactory from '../components/modals/factory';
import AddPin from '../components/modals/AddPin';
import ViewPin from '../components/modals/ViewPin';

import moment from 'moment';

import {Row, Col, Page} from '../components/ui/Layout';


import PinItem from '../components/boards/PinItem';

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');

class Pins extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPin : {}
        }
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }


    newPin(e) {
        ModalFactory.show('addpinModal');
    }

    viewPin(id) {
        
        this.setState({selectedPin: this.props.pins.list.find(p => p._id ===id)});
        ModalFactory.show('viewpinModal');
    }

    deletePin(id) {
        let {token, user, dispatch, params} = this.props;
        dispatch(pinActions.delete(token, {_id:id}));
    }
    
	  render() {

        const { dispatch, pins, boards } = this.props;

        let i = 0;

        let currentBoard = boards.item; 

        if (currentBoard) {
            return (
      			  <Page height={900}>            
                <Factory modalref="addpinModal" title="Add Pin" factory={AddPin} onCreateFinal={(data)=>this.handleCreateNewPin(data)} onCreate={(url) => this.handleNewPin(url)} />
                <Factory modalref="viewpinModal" large={true} title={this.state.selectedPin.title} pin={this.state.selectedPin} factory={ViewPin} />
                  <div className="mason_row row">
                      <div className="pin">
                        <section className="panel panel-default m-b-lg">
                          <header className="panel-heading text-uc">Add new pin<strong></strong>
                            <hr />
                          </header>
                          <section className="panel-body">
                            <a href="#" onClick={()=>this.newPin()}>
                                <i className="fa fa-plus-circle text-muted" style={{textAlign: 'center',fontSize: '124px',width: '100%'}} />
                            </a>
                          </section>
                          <footer className="panel-footer text-center">
                          </footer>
                        </section>
                      </div>
                      {pins.list.map(pin => {
                          return <PinItem key={i} index={i++} onDelete={(id) => this.deletePin(id)} onSelect={(id) => this.viewPin(id)} pin={pin} />
                      })}
                  </div>
              </Page>
	)
	} else {
    return null;
  }
}
}



function mapStateToProps(state) {
  return {
    token: state.app.token,
    user: state.user,
    pins: state.pins,
    boards: state.boards
  };
}

export default connect(mapStateToProps)(Pins);

