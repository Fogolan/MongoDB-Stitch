/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Bootstrap
 */

import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

import moment from "moment";
import ModalFactory from "../components/modals/factory";

import { Alert, Button, Label, I, Panel } from "../components/ui/";
import { Row, Col, Page } from "../components/ui/Layout";

import {
  LineChart,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer
} from "recharts";

import ProgressBar from "../components/charts/ProgressBar";
import Slider from "rc-slider";

const axisStyle = {
  fontSize: 10,
  fill: "#cccccc",
  fontWeight: "bold"
};

class Widgets extends Component {
  render() {
    return (
      <Page>
        <Row>
          <Col size={2}>
            <Panel title="Tag List">
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-danger pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">Hot</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-info pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">Rising</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-success pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">New</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-warning pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">Controversial</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-primary pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">Top</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ paddingLeft: 0 }}>
                    <i className="fa fa-circle text-default pull-left" style={{ marginTop: 3 }} />
                    <span className="m-l-sm">Promoted</span>
                  </a>
                </li>
              </ul>
            </Panel>
          </Col>
          <Col size={4}>
            <Panel title="">
              <article className="comment-item m-b-none" style={{ paddingBottom: 0 }}>
                <a className="pull-left thumb-sm m-r-sm">
                  <img src="/dist/images/7.png" className="img-circle" />
                </a>
                <section className="comment-body">
                  <header> <a href="#"><strong>Noah Wilson</strong></a></header>
                  <div className="text-muted">UI / UX Developer</div>
                </section>

                <hr />

              </article>

              <p>
                Followed by <a href="#">Andrew Wilson</a>, <a href="#">Heather Smith</a>,
                <a href="#">Noah Wilson</a> and 3 more of your friends.
              </p>
              <h5 className="text-uc m-t-md m-b-sm text-muted">Newest Article</h5>
              <p>
                <strong>The Word Was Google</strong> In the beginning was the word, and the word was
                with Google, and the word was Google
              </p>

              <hr />

              <div className="text-center">
                <Button
                  label="Follow"
                  size="btn-sm"
                  color="btn-dark"
                  rounded={true}
                  classes={"m-r-sm"}
                />
              </div>

            </Panel>
          </Col>
          <Col size={3}>
            <section className={`panel panel-default m-b-lg`}>
              <div
                style={{
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                  margin: -10,
                  height: 100,
                  backgroundSize: "cover",
                  backgroundPositionY: "99%",
                  backgroundImage: "url(/dist/images/profilebg.jpg)"
                }}
              />
              <section style={{ marginTop: -40 }} className={`text-center panel-body`}>
                <a href="#" className="thumb avatar b-3x">
                  <img src="/dist/images/5.png" className="img-circle" />
                </a>
                <h4 style={{ fontSize: "16px" }} className="m-b-none">
                  Elon Musk
                </h4>
                <p className="">@elonmusk</p>
                <div className="text-left m-b-none m-l-sm p-r">
                  <div className="p-a" style={{ bottom: 4, right: 12 }}>
                    <a href="#" data-balloon-pos="up" data-balloon={`follow Elon`}>
                      <I icon="person_add" color={"#02cef4"} />
                    </a>
                  </div>
                </div>
                <hr className="m-t-sm" />
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td width="50%">
                        <span className="h3 block m-t-xs">
                          <strong>100</strong>
                        </span>
                        <small className="text-muted text-uc">Followers</small>
                        <div style={{ width: "100%" }}>
                          <div className="dib" />
                        </div>
                      </td>
                      <td width="50%">
                        <span className="h3 block m-t-xs">
                          <strong>34</strong>
                        </span>
                        <small className="text-muted text-uc">Posts</small>
                        <div style={{ width: "100%" }}>
                          <div className="dib" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>
          </Col>
          <Col size={3}>
            <Panel>
              <h2 style={{ fontWeight: 100 }} className="m-t-none m-b-none">4,502</h2>
              <p className="text-muted m-b-none">Total Users</p>
              <ResponsiveContainer height={70} width="100%">
                <LineChart
                  width={60}
                  height={25}
                  data={[
                    { pv: 0 },
                    { pv: 70 },
                    { pv: 30 },
                    { pv: 70 },
                    { pv: 75 },
                    { pv: 20 },
                    { pv: 190 },
                    { pv: 100 }
                  ]}
                >
                  <Line
                    type="monotone"
                    dot={false}
                    dataKey="pv"
                    style={{ strokeWidth: 3 }}
                    stroke="#03A9F4"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-muted m-b-none m-t-md"><strong>600</strong> Today</p>
            </Panel>
          </Col>

        </Row>
        <Row>
          <Col size={4}>
            <Panel title="New York, New York">
              <Row>
                <Col size={12}>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                      data={[
                        { name: "8 am", temp: 45 },
                        { name: "10 am", temp: 55 },
                        { name: "12 pm", temp: 57 },
                        { name: "1 pm", temp: 87 },
                        { name: "2 pm", temp: 93 }
                      ]}
                      margin={{ top: 0, right: 0, left: -40, bottom: 0 }}
                    >
                      <Area type="monotone" dataKey="temp" stroke="#febb76" fill="#ffedd9" />
                      <XAxis dataKey="name" style={axisStyle} stroke="#eeeeee" />
                      <YAxis style={axisStyle} stroke="#eeeeee" />
                      <Tooltip />
                    </AreaChart>
                  </ResponsiveContainer>
                </Col>
              </Row>
              <Row>
                <Col size={12} classes="m-b-md">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td
                          className="text-center"
                          style={{ border: "solid 1px #f1f1f1", padding: "5px 0px" }}
                        >
                          Sun<br />
                          <img
                            width="50%"
                            src="https://github.com/tomkp/weather-icons/blob/master/png/sunny%20intervals.png?raw=true"
                          />
                          <br />
                          <span style={{ fontSize: "10px" }}><strong>70°</strong>{" "}30°</span>
                        </td>
                        <td className="text-center" style={{ padding: "5px 0px" }}>
                          Mon<br />
                          <img
                            width="50%"
                            src="https://github.com/tomkp/weather-icons/blob/master/png/sunny.png?raw=true"
                          />
                          <br />
                          <span style={{ fontSize: "10px" }}><strong>75°</strong>{" "}35°</span>
                        </td>
                        <td className="text-center" style={{ padding: "5px 0px" }}>
                          Tue<br />
                          <img
                            width="50%"
                            src="https://github.com/tomkp/weather-icons/blob/master/png/sunny.png?raw=true"
                          />
                          <br />
                          <span style={{ fontSize: "10px" }}><strong>60°</strong>{" "}30°</span>
                        </td>
                        <td className="text-center" style={{ padding: "5px 0px" }}>
                          Wed<br />
                          <img
                            width="50%"
                            src="https://github.com/tomkp/weather-icons/blob/master/png/sun%20and%20showers.png?raw=true"
                          />
                          <br />
                          <span style={{ fontSize: "10px" }}><strong>70°</strong>{" "}50°</span>
                        </td>
                        <td className="text-center" style={{ padding: "5px 0px" }}>
                          Thu<br />
                          <img
                            width="50%"
                            src="https://github.com/tomkp/weather-icons/blob/master/png/sunny%20intervals.png?raw=true"
                          />
                          <br />
                          <span style={{ fontSize: "10px" }}><strong>76°</strong>{" "}30°</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
              <Row>
                <Col size={12}>
                  <p>
                    <strong>Today : </strong>
                    Stranded vessels rescued after getting stuck in violent mid-Atlantic storms.
                    Here's how
                  </p>
                </Col>
              </Row>
            </Panel>
          </Col>
          <Col size={3}>
            <Panel>
              <p className="m-t-none m-b-none"><strong>Next Bill</strong></p>
              <p className="text-muted m-b-md" style={{ lineHeight: "10px" }}>
                Invoice #455 due friday.
              </p>
              <h2 style={{ fontWeight: 100 }} className="m-t-none m-b-none">$3,502</h2>
              <p className="text-muted m-b-none" style={{ fontSize: "10px", marginTop: -2 }}>
                due on Saturday, Feb 3rd.
              </p>
              <ResponsiveContainer height={70} width="100%">
                <AreaChart
                  width={60}
                  height={25}
                  data={[
                    { pv: 20 },
                    { pv: 70 },
                    { pv: 30 },
                    { pv: 170 },
                    { pv: 75 },
                    { pv: 220 },
                    { pv: 190 },
                    { pv: 100 }
                  ]}
                >
                  <defs>
                    <linearGradient id="MyGradient1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgba(168, 230, 239, 0.8)" />
                      <stop offset="95%" stopColor="rgba(214, 243, 247, 0)" />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dot={false}
                    dataKey="pv"
                    style={{ strokeWidth: 2 }}
                    stroke="#6cd3e1"
                    fill="url(#MyGradient1)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Panel>
          </Col>
          <Col size={5}>
            <Panel title="Open Tickets">
              <p className="m-t-none m-b-none">
                You currently have <strong>43</strong> open tickets or which <strong>21</strong> are
                not assigned.
              </p>

              <table width="100%">
                <tbody>
                  <tr>
                    <td width="15%">
                      <strong>Open</strong>
                    </td>
                    <td width="65%">
                      <div className="m-t-md m-l-sm">
                        <ProgressBar
                          style={{ backgroundColor: "#f77373", marginTop: 10 }}
                          now={40}
                          max={100}
                          theme="progress-bar-success"
                        />
                      </div>
                    </td>
                    <td width="15%" className="text-center">
                      <strong>40%</strong>
                    </td>
                  </tr>

                  <tr>
                    <td width="15%">
                      <strong>Closed</strong>
                    </td>
                    <td width="65%">
                      <div className="m-t-md m-l-sm">
                        <ProgressBar
                          style={{ backgroundColor: "#f77373", marginTop: 10 }}
                          now={70}
                          max={100}
                          theme="progress-bar-warning"
                        />
                      </div>
                    </td>
                    <td width="15%" className="text-center">
                      <strong>70%</strong>
                    </td>
                  </tr>

                  <tr>
                    <td width="15%">
                      <strong>Unassigned</strong>
                    </td>
                    <td width="65%">
                      <div className="m-t-md m-l-sm">
                        <ProgressBar
                          style={{ backgroundColor: "#f77373", marginTop: 10 }}
                          now={30}
                          max={100}
                          theme="progress-bar-danger"
                        />
                      </div>
                    </td>
                    <td width="15%" className="text-center">
                      <strong>30%</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Widgets;
