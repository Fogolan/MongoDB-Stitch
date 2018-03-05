/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule Menu
 */

import React, {Component} from "react";
import {Link} from "react-router";

import MenuItem from "../components/widgets/MenuItem";

var shallowCompare = require("react-addons-shallow-compare");

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    toggleShowHide() {
        this.setState({open: !this.state.open});
    }

    render() {
        var classes = "bg-black aside-md hidden-print";
        var navClasses = "nav-primary";
        if (!this.state.open) {
            classes += " nav-xs";
            navClasses += " hidden-xs";
        }

        const {apps, schema, blocks, selectedAppIndex} = this.props;

        return (
            <aside className={classes} id="nav">
                <section className="vbox">
                    <header className="header bg-danger brand-header lock-header pos-stat clearfix">
                        <a
                            className="btn btn-link visible-xs"
                            onClick={() => this.toggleShowHide()}
                            data-toggle="class:nav-off-screen,open"
                            data-target="#nav,html"
                        >
                            <i className="fa fa-bars"/>
                        </a>
                        <div className="text-center tophead">
                            <img width="25" src="/dist/images/react-logo.png"/><br/>
                            <span className="text-center" style={{lineHeight: "21px", fontWeight: "bold"}}>
                Admin
              </span>
                        </div>
                    </header>
                    <section className="w-f scrollable">
                        <div className="slimScrollDiv">
                            <div
                                className="slim-scroll"
                                data-height="auto"
                                data-disable-fade-out="true"
                                data-distance="0"
                                data-size="5px"
                                data-color="#333333"
                            >
                                <nav className={navClasses}>
                                    <ul className="nav">
                                        <MenuItem
                                            link={"/"}
                                            icon="fa-home"
                                            color="bg-danger"
                                            linkText="Dashboard"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/demo"}
                                            icon="fa-database "
                                            color="bg-danger"
                                            linkText="Demo page"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/"}
                                            icon="fa-desktop"
                                            color="bg-success"
                                            linkText="UI"
                                            currentPage={this.props.currentPage}
                                        >
                                            <SubMenuItem link={"/ui/general"} linkText={"General"}/>
                                            <SubMenuItem link={"/ui/buttons"} linkText={"Buttons"}/>
                                            <SubMenuItem link={"/ui/fontawesome"} linkText={"Font Awesome"}/>
                                            <SubMenuItem link={"/ui/materialicons"} linkText={"Material Design Icons"}/>
                                            <SubMenuItem link={"/ui/tables"} linkText={"Tables"}/>
                                            <SubMenuItem link={"/ui/modals"} linkText={"Modals"}/>
                                        </MenuItem>
                                        <MenuItem
                                            link={"/components"}
                                            badgeCount={8}
                                            icon="fa-sitemap"
                                            color="bg-success"
                                            linkText="Components"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/"}
                                            icon="fa-database"
                                            color="bg-success"
                                            linkText="Data"
                                            currentPage={this.props.currentPage}
                                        >
                                            <SubMenuItem link={"/data/grid"} linkText={"Grid"}/>
                                            <SubMenuItem link={"/data/forms"} linkText={"Forms"}/>
                                        </MenuItem>
                                        <MenuItem
                                            link={"/forms"}
                                            icon="fa-tasks"
                                            color="bg-success"
                                            linkText="Forms"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/charts"}
                                            icon="fa-bar-chart-o"
                                            color="bg-success"
                                            linkText="Charts"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/"}
                                            icon="fa-rocket"
                                            color="bg-success"
                                            linkText="Apps"
                                            currentPage={this.props.currentPage}
                                        >
                                            <SubMenuItem link={"/apps/boards"} linkText={"Boards"}/>
                                            <SubMenuItem link={"/apps/notes"} linkText={"Notes"}/>
                                            <SubMenuItem link={"/apps/maps"} linkText={"Maps"}/>
                                            <SubMenuItem link={"/apps/email"} linkText={"Email"}/>
                                        </MenuItem>
                                        <MenuItem
                                            link={"/widgets"}
                                            icon="fa-share-alt-square"
                                            color="bg-success"
                                            linkText="Widgets"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/analytics"}
                                            icon="fa-line-chart"
                                            color="bg-success"
                                            linkText="Analytics"
                                            currentPage={this.props.currentPage}
                                        />
                                        <MenuItem
                                            link={"/docs"}
                                            icon="fa-book"
                                            color="bg-success"
                                            linkText="Docs"
                                            currentPage={this.props.currentPage}
                                        />
                                    </ul>
                                </nav>
                            </div>
                            <div className="slimScrollBar scrollBar"/>
                            <div className="slimScrollRail scrollRail"/>
                        </div>
                    </section>
                </section>
            </aside>
        );
    }
}

class SubMenuItem extends Component {
    render() {
        var badge = this.props.badgeText
            ? <b className="badge bg-danger pull-right">{this.props.badgeText}</b>
            : null;
        return (
            <li>
                {" "}<Link to={this.props.link}>
                {" "}<i className="fa fa-angle-right"/> {badge}<span>{this.props.linkText}</span>
                {" "}
            </Link>
                {" "}
            </li>
        );
    }
}
