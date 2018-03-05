/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Maps
 */

import React, { Component } from 'react';
import {Row, Col, Page} from '../components/ui/Layout';
import {Panel} from '../components/ui/';

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";


const markers = [{
  position: {
    lat: 38.78834559035599,
    lng: 265.0341798125,
  },
  key: `Center`,
  defaultAnimation: 2,
}];

const mapstyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
var shallowCompare = require('react-addons-shallow-compare');

class Maps extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
			<Page>
        <Row>
          <Col size="6">
            <Panel title="Simple">
               <GoogleMapLoader
                  containerElement={
                    <div
                      style={{
                        height: 400,
                        width: "100%"
                      }}
                    />
                  }
                  googleMapElement={
                    <GoogleMap
                      defaultZoom={3}
                      defaultCenter={{lat: 38.78834559035599, lng:265.0341798125}}>
                    </GoogleMap>
                  }
                />
              </Panel>
            </Col>
              <Col size="6">
                <Panel title="Markers">
                  <GoogleMapLoader
                    containerElement={
                      <div
                        style={{
                          height: 400,
                          width: "100%"
                        }}
                      />
                    }
                    googleMapElement={
                      <GoogleMap
                        defaultZoom={3}
                        defaultCenter={{lat: 38.78834559035599, lng:265.0341798125}}>
                        {markers.map((marker, index) => {
                          return (
                            <Marker {...marker} />
                          );
                        })}
                      </GoogleMap>
                    }
                  />
                  </Panel>
            </Col>
          </Row>
          <Row>
            <Col size="12">
              <Panel title="Styled">
                <GoogleMapLoader
                    containerElement={
                      <div
                        style={{
                          height: 500,
                          width: "100%"
                        }}
                      />
                    }
                    googleMapElement={
                      <GoogleMap
                        defaultZoom={9}
                        defaultOptions={{
                          styles: mapstyle
                        }}
                        defaultCenter={{lat: 38.78834559035599, lng:265.0341798125}}>

                      </GoogleMap>
                    }
                  />
              </Panel>
            </Col>
          </Row>
		   </Page>
		);
	}
}

export default Maps;

