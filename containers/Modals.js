/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Modals
 */

import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

import moment from "moment";

import { Button } from "../components/ui/";

import ModalFactory from "../components/modals/factory";
import FullscreenModalFactory from "../components/modals/fullscreenfactory";

import ContentModal from "../components/modals/ContentModal";
import Confirm from "../components/modals/Confirm";

import Logout from "../components/modals/Logout";

import { Row, Col, Page } from "../components/ui/Layout";

const FullscreenFactory = FullscreenModalFactory.modalFromFactory;
const Factory = ModalFactory.modalFromFactory;

var shallowCompare = require("react-addons-shallow-compare");

/* Modals */

import Login from "../components/modals/Login";

class Modals extends Component {
  /* Events */

  handleBasic() {
    ModalFactory.show("basicModal");
  }

  handleBasicLarge() {
    ModalFactory.show("basicModalLarge");
  }

  handleBasicSmall() {
    ModalFactory.show("basicModalSmall");
  }

  handleFullscreen() {
    FullscreenModalFactory.show("basicModalFullscreen");
  }

  handleContent() {
    ModalFactory.show("basicModalContent");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    ModalFactory.hide("basicModal");
    ModalFactory.hide("basicModalLarge");
    ModalFactory.hide("basicModalSmall");
    ModalFactory.hide("basicModalFullscreen");
    ModalFactory.hide("basicModalContent");
  }

  render() {
    return (
      <Page height={1000}>
        <Factory modalref="basicModal" title="Basic Modal" factory={Login} />
        <Factory
          modalref="basicModalSmall"
          title="Basic Modal (small)"
          factory={Login}
          small={true}
        />
        <Factory
          modalref="basicModalLarge"
          title="Basic Modal (large)"
          factory={Login}
          large={true}
        />
        <FullscreenFactory
          modalref="basicModalFullscreen"
          title="Basic Modal (Fullscreen)"
          factory={Logout}
        />
        <Factory
          modalref="basicModalContent"
          title="Basic Modal (Content)"
          factory={ContentModal}
          body={`<h1>Hello</h1><p>Pass some markup</p>`}
        />

        <div className="row">
          <div className="col-md-6">
            <section className="panel panel-default">
              <header className="panel-heading">Basic<hr /></header>
              <section className="panel-body text-center">
                <Button
                  label="Open Modal"
                  size="btn-sm"
                  color="btn-success"
                  onClick={() => this.handleBasic()}
                />
              </section>
            </section>
          </div>

          <div className="col-md-6">
            <section className="panel panel-default">
              <header className="panel-heading">Basic (Large)<hr /></header>
              <section className="panel-body text-center">
                <Button
                  label="Open Modal (Large)"
                  size="btn-sm"
                  color="btn-warning"
                  onClick={() => this.handleBasicLarge()}
                />
              </section>
            </section>
          </div>
        </div>
        <div className="row m-t-lg">
          <div className="col-md-6">
            <section className="panel panel-default">
              <header className="panel-heading">Basic (Fullscreen)<hr /></header>
              <section className="panel-body text-center">
                <Button
                  label="Open Modal (Fullscreen)"
                  size="btn-sm"
                  color="btn-danger"
                  onClick={() => this.handleFullscreen()}
                />
              </section>
            </section>
          </div>

          <div className="col-md-6">
            <section className="panel panel-default">
              <header className="panel-heading">Content<hr /></header>
              <section className="panel-body text-center">
                <Button
                  label="Open Modal (Content)"
                  size="btn-sm"
                  color="btn-info"
                  onClick={() => this.handleContent()}
                />
              </section>
            </section>
          </div>
        </div>
        <div className="row m-t-lg">
          <div className="col-md-6">
            <section className="panel panel-default">
              <header className="panel-heading">Basic (Small)<hr /></header>
              <section className="panel-body text-center">
                <Button
                  label="Open Modal (Small)"
                  size="btn-sm"
                  color="btn-danger"
                  onClick={() => this.handleBasicSmall()}
                />
              </section>
            </section>
          </div>
        </div>
      </Page>
    );
  }
}

export default Modals;
