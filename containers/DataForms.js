/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataForms
 */

import React, { Component } from 'react';

import Form from '../components/dataEditor/Form';
import {Row, Col, Page} from '../components/ui/Layout';

const rowschema = {
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
      "type":"Markdown",
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
      "type":"Color",
      "reference":""
    },
    "location" : {
      "type" : "GeoPoint"
    },
    "thumbnail" : {
      "type" : "Image"
    },
    "createdBy":{
      "type":"Reference",
      "reference":"User"
    },
    "group":{
      "type":"Reference",
      "reference":"56f12aff04475d0000a6cece_group"
    }
  }
}

const rowdata = { 
  _id:"56f2840409415a8b611009ee",
  color:"#2196F3",
  completed:false,
  thumbnail:'https://d13yacurqjgara.cloudfront.net/users/111934/screenshots/2822345/trailfinder_card.gif',
  createdBy:"54b7f2a7a2d4bdde5b96117b",
  dateCreated:"2016-03-22T11:58:25.630Z",
  dateUpdated:"2016-03-22T11:58:25.630Z",
  description:"A demonstration list",
  group:"56f133615a3e48000000e040",
  icon:"calendar",
  location: {lat : 40.638967, lng : -97.207031},
  name:"The first list"
}

var shallowCompare = require('react-addons-shallow-compare');


class DataForms extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Form rowschema={rowschema} rowdata={rowdata} />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default DataForms;

