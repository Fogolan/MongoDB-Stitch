/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataGrid
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

import DataTable from '../components/data/DataTable';
import {Panel} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

const dataSchema = {
  name : 'messages',
  description : 'A simple messaging schema',
  fields : {
    "dateCreated": {
      "type":"Date"
    },
    "dateUpdated":{
      "type":"Date"
    },
    "name":{
      "type":"String",
      "reference":""
    },
    "description":{
      "type":"String",
      "reference":""
    },
    "completed":{
      "type":"Boolean",
      "reference":""
    },
    "icon":{
      "type":"String",
      "reference":""
    },
    "color":{
      "type":"String",
      "reference":""
    },
    "createdBy":{
      "type":"Reference",
      "reference":"User"
    }
  }
}

var shallowCompare = require('react-addons-shallow-compare');

let messageActions = LocalReduxOutlet('messages').actions;

class DataGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleItemDelete(id) {
    const {dispatch, token} = this.props;
    dispatch(messageActions.delete(token, {id:id}));
  }
  
  render() {
    let {messages} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={messages.list.length}
                schema={dataSchema} 
                rows={messages.list}
                onDelete={(id)=>this.handleItemDelete(id)} />
            </Panel>
          </Col>
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
    messages: state.messages
  };
}

export default connect(mapStateToProps)(DataGrid);
