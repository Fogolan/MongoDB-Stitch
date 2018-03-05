/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Docs
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import moment from 'moment';


var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/shell/shell');
require('codemirror/theme/railscasts.css');

import ModalFactory from '../components/modals/factory';
import ContentModal from '../components/modals/ContentModal';

import {Row, Col, Page} from '../components/ui/Layout';
import {Alert, Button, Label, I, Fa, Table, Panel, Pager, IStack} from '../components/ui/';

import Slider from 'rc-slider';
import Input from '../components/ui/Input';
import DropDownButton from '../components/ui/DropDownButton';
import Badge from '../components/badges/badge';
import Switch from '../components/ui/Switch';
import Timezonecontrol from '../components/ui/timezonecontrol';

import ProgressBar from '../components/charts/ProgressBar';
import DatePicker from 'react-datepicker';

const tips = {
  0: ' Strongly Disagree ',
  25: ' Disagree ',
  50: ' Impartial ',
  75: ' Agree ' ,
  100: ' Strongly Agree ',
};

const colorDemoStyle = {
  width:30,
  height:30,
  display:'inline-block'
}

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');


class Docs extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

	constructor(props) {
		super(props);
	}
  
	handleContent() {
    ModalFactory.show('basicModalContent');
  }

	render() {
		const currentApp = 'Test Application';

		return (
      <section className="vbox" style={{marginTop: -29}}>
        <Factory modalref="basicModalContent" title="Basic Modal (Content)" factory={ContentModal} body={`<h1>Hello</h1><p>Pass some markup</p>`} />
		    <section className="scrollable">
          <section className="hbox stretch content-body">
			      <aside className="aside-md b-r" id="subNav"> 
              <div className="wrapper header">DOCUMENTATION</div> 
			        <ul className="nav"> 
      					<li className="b-light"><a href="#gettingstarted">Getting Started</a></li> 
      					<li className="b-light"><a href="#structure">Structure</a></li> 
      					<li className="b-light"><a href="#styling">Styling with LESS</a></li> 
                <li className="b-light"><a href="#components">Components</a></li> 
                <li className="b-light"><a href="#apps">Apps/Pages</a></li> 
      					<li className="b-light"><a href="#redux">Redux</a></li> 
      					<li className="b-light"><a href="#outlets">Outlets and API</a></li> 
      					<li className="b-light"><a href="#credits">Credits</a></li> 
      					<li className="b-light"><a href="#help">Help</a></li> 
			        </ul> 
		        </aside>
			      <aside>
              <section className="vbox">
				        <section className="scrollable">
					        <div className="container docsContainer" style={{paddingTop:30}}>
						        <div className="docs-section clearfix">
							        <div className="content-left">
								        <h2 className="m-t-none" id="gettingstarted">Getting Started</h2>
								        <p className="m-b-md">This page will help you get started with React Admin.</p>
        								<div className="line line-lg"></div>
                        <p>React Admin is a javascript application that is powered by react, redux, react-router and a number of other libraries that will help you get up and running quickly. Once you open the zip file you can work within the project and expand and extend anything you wish.</p>
                        <Alert color="alert-danger" persistant={true} title="License">You cannot upload this source to a public git/mercurial/etc. repo, doing so will violate the terms of the use.</Alert>
        								<p><strong>Requirements</strong></p>
        								<p>To get started make sure you have node.js installed</p>
                        <Alert color="alert-info" persistant={true} title="Install Node.js"><a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></Alert>
                        <p><strong>Unzip the package, update NPM and install the app dependencies</strong></p>
        								<div>
        									<Codemirror
                      			options={{theme:"monokai", readOnly:true, mode:'shell'}}
        										value={`➔npm install npm -g\n➔cd react-admin\n➔npm install`} 
        										readOnly={true} 
                          />
        								</div>
								        <div>At this point you can run the project in debug mode : 
													<Codemirror
                      			options={{theme:"monokai", readOnly:true, mode:'shell'}}
									          value={`➔npm start`} 
									          readOnly={true} 
                          />
                        </div>
								        <div>Or build a production SPA : 
											    <Codemirror
                      			options={{theme:"monokai", readOnly:true, mode:'shell'}}
          									value={`➔npm run buildprod`} 
          									readOnly={true} 
                          />
                        </div>
                        <p>A helper method has been to the package.json that will enable you to upload your build to s3 for hosting. Simply update the aws-credentials and aws-upload-conf files and run :</p>
						            <Codemirror
                            options={{theme:"monokai", readOnly:true, mode:'shell'}}
                            value={`➔npm run s3`} 
                            readOnly={true} 
                          />
                          <p>To deploy your build. More details on s3upload can be found <a href="https://www.npmjs.com/package/s3-upload" target="_blank">here</a>.</p>
                     </div>
						        </div>
                    <div className="docs-section clearfix">
                      <div className="content-left">
                        <h2 id="structure">Structure</h2>
                        <p className="m-b-md">The application is logically organized to make things easy to find. Also adding new modules or components should be unambiguous.The following is a breakdown of the Application structure:</p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:''}}
                          value={`actions: Redux Actions in the form of CONSTS (actions) and functions that return an action (action creators) 
components : The component heirarchy.
containers : Consists of pages and large components.
dist : the static build consisting of Javascript, CSS , fonts and images.
middleware : Redux middleware (currently only our promisemiddleware that is used for async actions.
outlets : Redux outlets for Local (proxy dev) and production.
reducers : Custom reducers that cannot be created with outlets.
store : genric redux store.`} 
                          readOnly={true} 
                        />
                      </div>
                    </div>
                    <div className="docs-section clearfix">
                      <div className="content-left">
                        <h2 id="styling">Styling with LESS</h2>
                        <p className="m-b-md">The application style is built on bootstrap and is developed in LESS to provide bulk wholesale changes. The LESS files can be found in the /dist/css/less folder.</p>
                        <p className="m-b-md">We use grunt to compile and watch the LESS files, grunt will be installed with the other developer dependencies. To start the grunt watcher use the command :</p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'shell'}}
                          value={`➔grunt`} 
                          readOnly={true} 
                        />
                        <p className="m-b-md">Each time the LESS files are changed the file /dist/css/react-admin.css will be built. If you wish to build your css but not start the watch simply use:</p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'shell'}}
                          value={`➔grunt build`} 
                          readOnly={true} 
                        />
                        <p>Like bootstrap, wholesale style changes can be accomplished through editting the variables.less file locations in /dist/css/less/</p>
                        <p>More granular style edits or extensions can be accomplished through editting the other .less files.</p>
                        <p>Application (React-Admin) specific LESS styles are found in react-admin.less</p>

  
                        <p className="m-t-md"><strong>To switch to dark theme :</strong></p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'shell'}}
                          value={`➔grunt dark`} 
                          readOnly={true} 
                        />

                        <p className="m-t-md"><strong>To switch back to the default theme :</strong></p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'shell'}}
                          value={`➔grunt`} 
                          readOnly={true} 
                        />

                         <p className="m-t-md"><strong>To build the dark theme for production :</strong></p>
                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'shell'}}
                          value={`➔grunt build:dark`} 
                          readOnly={true} 
                        />

                        <h4 className="m-t-lg">Colors</h4>
                        <p className="m-b-lg">We utilize the bootstrap standard color scheme seen below : </p>

                        <div style={colorDemoStyle} className="bg-primary"></div>
                        <div style={colorDemoStyle} className="bg-info"></div>
                        <div style={colorDemoStyle} className="bg-success"></div>
                        <div style={colorDemoStyle} className="bg-warning"></div>
                        <div style={colorDemoStyle} className="bg-danger"></div>
                        <div style={colorDemoStyle} className="bg-light"></div>
                        <div style={colorDemoStyle} className="bg-dark"></div>
                        <div style={colorDemoStyle} className="bg-black"></div>

                        <p className="m-t-lg">Editting these values in variables.less will change the entire color scheme for the application</p>

                        <Codemirror
                          options={{theme:"monokai", readOnly:true, mode:'css'}}
                          value={`@brand-primary:         #a48ad4;
@brand-success:         #8BC34A;
@brand-info:            #03A9F4;
@brand-warning:         #ffc333;
@brand-danger:          #ea5a5a;
@brand-light:           #f1f1f1;
@brand-dark:            #333647;
@brand-black:           #323544;`} 
                          readOnly={true} 
                        />

                      </div>
                    </div>
        						<div className="docs-section clearfix">
        							<div className="content-left">
        								<h2 id="components">Components</h2>
        								<p className="m-b-md">A guide to the React-Admin component library.</p>
        								<div className="line line-lg"></div>
				                <DocComponent name="Alert" description="Bootstrap Alert component" src={`<Alert \n\tcolor="alert-info" \n\tpersistant={false} \n\tonClose={} \n\tclasses={} \n\ttitle="This is the title">This is a <b>html</b> body\n</Alert>`}><Alert color="alert-info" persistant={true} title="This is the title">This is a <b>html</b> body</Alert></DocComponent>
				                <DocComponent name="Button" description="Bootstrap Button component" src={`<Button \n\tlabel="" \n\ticon="fa-sign-out" \n\ttooltip="Hello" \n\tsize="btn-default" \n\tcolor="btn-danger" \n\trounded={true} \n\tclasses={'m-b-sm'} \n\tstyle={{padding: '6px 9px 6px 10px'}} \n/>`}><Button label="" icon="fa-sign-out" tooltip="Hello"  size="btn-default" color="btn-danger" rounded={true} classes={'m-b-sm'} style={{padding: '6px 9px 6px 10px'}} /></DocComponent>
				                <DocComponent name="Progress" description="Bootstrap Progress component" src={`<ProgressBar \n\tstyle={{backgroundColor:'#f77373'}} \n\tnow={40} \n\tmax={100} \n\ttheme="progress-bar-warning" \n/>`}><ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" /></DocComponent>
				                <DocComponent name="Slider" description="React slider component" src={`<Slider \n\ttipTransitionName="rc-slider-tooltip-zoom-down" \n\tmin={0} \n\tmarks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} \n\ttipFormatter={(v)=>tips[v]} \n\tonChange={(data)=>this.handleResponse(data)} \n\tstep={25} \n\tdefaultValue={50} \n/>`}><div className="m-b-lg"><Slider tipTransitionName="rc-slider-tooltip-zoom-down" min={0} marks={{0: '0', 25: '1',50: '2',75: '3',100: '4'}} tipFormatter={(v)=>tips[v]} onChange={(data)=>this.handleResponse(data)} step={25} defaultValue={50} /></div></DocComponent>
				                <DocComponent name="Label" description="Bootstrap Label component" src={`<Label \n\ttitle="bg-success" \n\tcolor="bg-success" \n\tclasses={'m-r-sm m-b-sm pull-left'} \n/>`}><div style={{height:40}} className="d-b"><Label title="bg-success" color="bg-success" classes={'m-r-sm m-b-sm pull-left'} /></div></DocComponent>
				                <DocComponent name="Tooltip" description="CSS Tooltip component" src={`<Button \n\ticon="fa-facebook" \n\tclasses={'m-t-lg'} \n\trounded={true} \n\tcolor="btn-default" \n\ttooltip="Log in with facebook" \n/>`}><div className="text-center m-b-md"><Button icon="fa-facebook" classes={'m-t-lg'} rounded={true} color="btn-default" tooltip="Log in with facebook" /></div></DocComponent>
				                <DocComponent name="DatePicker" description="Bootstrap DatePicker component" src={`<DatePicker \n\tselected={moment()} onChange={}\n/>`}><div className="m-b-lg"><DatePicker selected={moment()}/></div></DocComponent>
				                <DocComponent name="Grid (Row/Col)" description="React Responsive Grid component" src={`<Row>\n\t<Col size="8"></Col>\n\t<Col size={{md:8,lg:4}}></Col>\n</Row>`}><Row><Col size="8"></Col><Col size={{md:8,lg:4}}></Col></Row></DocComponent>
				                <DocComponent name="Panel" description="Bootstrap Panel component" src={`<Panel title="Panel Title">\n\t<h1>Panel Body</h1>\n</Panel>`}><Panel title="Panel Title"><h1>Panel Body</h1></Panel></DocComponent>
				                <DocComponent name="Page" description="Page wrapper component" src={`<Page height={1000}></Page>`}></DocComponent>
				                <DocComponent name="Mason" description="Grid Masonry component" src={`<Row mason={true}>\n\t<Col></Col>\n\t<Col></Col>\n</Row>`}></DocComponent>
				                <DocComponent name="Font Awesome Icon" description="Font awesome icon type" src={`<Fa icon="download" size="48" />`}><Fa icon="download" size={48} /></DocComponent>
				                <DocComponent name="Material Design Icon" description="Material design icon type" src={`<I icon="face" size="48"/>`}><I icon="face" size={48}/></DocComponent>
				                <DocComponent name="Tables" description="Simple table component" src={`<Table \n\tdata={[\n\t\t{id:0, name:'row 1', email: 'info@gmail.com'},\n\t\t{id:1, name:'row 2', email: 'info2@gmail.com'}\n\t]}\n/>`}><Table classes="m-b-lg" data={[{id:0, name:'row 1', email: 'info@gmail.com'},{id:1, name:'row 2', email: 'info2@gmail.com'}]} /></DocComponent>
				                <DocComponent name="Modal" description="Bootstrap modal factory component" src={`import ModalFactory from '../components/modals/factory';\nimport ContentModal from '../components/modals/ContentModal';\n\n<Factory \n\tmodalref="basicModalContent" \n\ttitle="Basic Modal (Content)" \n\tfactory={ContentModal} \n\tbody={'<h1>Hello</h1><p>Pass some markup</p>'} \n/>\n\nModalFactory.show('basicModalContent');`}><Button label="Open Modal (Content)" size="btn-sm" color="btn-info" classes={'m-b-lg'} onClick={()=>this.handleContent()} /></DocComponent>
				                <DocComponent name="Input" description="React input component" src={`<Input \n\ticon="fa fa-user" \n\tformat="email" \n\trequired={true} \n\terrorMessage="Please enter an email address." \n\tplaceholder="email" \n/>`}><Input icon="fa fa-user" format="email" required={true} errorMessage="Please enter an email address." placeholder="email" classes={'m-b-lg'} /></DocComponent>
				                <DocComponent name="Pager" description="Data Pager component" src={`<Pager \n\tcurrentPage={0} \n\titemsPerPage={10} \n\ttotalItems={55} \n/>`}><Pager currentPage={0} itemsPerPage={10} totalItems={55} /></DocComponent>
				                <DocComponent name="Drop Down" description="Bootstrap dropdown list component" src={`<DropDownButton \n\titems={[\n\t\t{id:0, name:'item 1'},\n\t\t{id:1, name:'item 2'},\n\t\t{id:2, name:'item 3'}\n\t]}\n\tselectedLabel="pick something...",\n\tonItemSelect={} \n/>`}><DropDownButton items={[{id:0, name:'item 1'},{id:1, name:'item 2'},{id:2, name:'item 3'}]} selectedLabel="pick something..." classes={'m-b-lg'} /></DocComponent>
				                <DocComponent name="Switch" description="Switch component" src={`<Switch \n\ton={true} \n\tclasses={'m-r-lg m-b-lg'}\n\tonChange={} \n/>`}><Switch on={true} classes={'m-r-lg m-b-lg'} /></DocComponent>
				                <DocComponent name="Badge" description="Badge component" src={`<Badge \n\tclasses={'d-i-b pull-left m-r-lg'} \n\tcolor="blue" \n\ttitle="Facebook" \n\ticon="fa-facebook" \n/>`}><div className="d-b m-b-lg" style={{height:90}}><Badge classes={'d-i-b pull-left m-r-lg'} color="blue" title="Facebook" icon="fa-facebook"/></div></DocComponent>
				                <DocComponent name="IconStack" description="Icon Stack component" src={`<IStack \n\ticon="check_circle" \n\tcolor="#ffffff" \n\tsize="24" \n\tbg="#ea5a5a" \n/>`}><div className="m-b-lg"><IStack icon="check_circle" color="#ffffff" size={24} bg="#ea5a5a" /></div></DocComponent>
				                <DocComponent name="Data Grid" description="Datagrid component" src={`<DataTable\n\tpageSize={10}\n\tpage={0}\n\ttotalRows={data.count}\n\tschema={dataSchema} \n\trows={data.items} \n/>`}></DocComponent>
				                <DocComponent name="Data Form" description="Dataform component" src={`<Form\n\trowschema={rowschema}\n\trowdata={rowdata} \n/>`}></DocComponent>
				                <DocComponent name="Charts" description="Chartist chart component" src={`<StackBarChart \n\tdata={{\n\t\tlabels: ['RPU 60', 'FPU 230', 'EPU 60', 'CE 220'],\n\t\tseries: [\n\t\t\t[800, 1200, 1400, 1300],\n\t\t\t[200, 400, 500, 300],\n\t\t\t[100, 200, 400, 600],\n\t\t\t[50, 200, 400, 600]\n\t\t]\n\t}} horizontal={false} \n/>`}></DocComponent>
        							</div>
        						</div>
        						<div className="docs-section clearfix">
        							<div className="content-left">
        								<h2 id="redux">Redux</h2>
        								<p className="m-b-md">React Admin data is powered by Redux. Meaning a container or component can be connected to Redux using the connect modifier. For example : </p>
                        <Codemirror
                          options={{mode:"jsx", readOnly:true, theme:"railscasts"}}
                          value={`class App extends Component {\n ... \n}\n\nexport default connect(mapStateToProps)(App);`} />
                          
        								<p>If you are just getting started with redux, watch these free training videos.</p>
                        <div>
                          <a href="https://egghead.io/courses/getting-started-with-redux" target="_blank">
                            <div className="text-center">
                              <figure className="figure">
                                <img className="figure-img img-fluid img-rounded" width="300" src="/dist/images/redux-tout.png" />
                                <figcaption className="figure-caption text-xs-right">Egghead.io Redux Series.</figcaption>
                              </figure>
                            </div>
                          </a>
                        </div>
                        <h4>Redux Dev tools</h4>
                        <p>React admin is built to integrate with React Dev tools. The easiest way to set this up is to install the chrome extension :</p>
                        <p><a target="_blank" href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Install Redux Devtools chrome extension.</a></p>
                        <div className="line line-lg"></div>

        							</div>
        						</div>
                    <div className="docs-section clearfix">
                      <div className="content-left">
                        <h2 id="apps">Apps & Pages</h2>
                        <p className="m-b-md">React Admin contains example pages and apps that will help you to create your own extensions to React Admin. Each Page or app begins with a container and a subfolder in components where we can store app/page specific components.</p>
                        

                        <h4>App Example (Boards)</h4>
                        <p>The boards app located in <strong>/containers/Boards.js</strong> allows users to create their own Pinterest like boards. </p>
                        <p>The app is composed of a container (Boards) a LocalOutlet (for dev), a list item component (BoardItem) and a Modal used to collect data for a new board (addboardModal)</p>
                        <p>There are two Redux actions Delete (to delete a board) and Create (to add a new board). Clicking a board will navigate the user to a new route (pins) that will display the pins for the board</p>
                        
                        <div className="line line-lg"></div>
                      </div>
                    </div>
        						<div className="docs-section clearfix">
        							<div className="content-left">
        								<h2 id="outlets">Outlets and API</h2>
        								<p className="m-b-md">Outlets are CRUD based Redux store outlets (hence the name). They contain action consts, action creators and a reducer. Outlets also contain built in logic for fetching requirements. A local outlet is used for demoing the functionality of an outlet locally (with no persistance). In the case of React-Admin you can see that the initial state contains our demo data and our local outlet simply mutates our state without applying the changes to any backend. To connect to a real backend you must implement a ReduxOutlet, specifically you must write new action creators for fetch, fetchOne, create, update and delete - an example has been included to assist you. The only rule is that the action creators must return actions that implement promise (async) middleware.</p>
        								<div className="line line-lg"></div>
        							</div>
        						</div>
        						<div className="docs-section clearfix">
        							<div className="content-left">
        								<h2 id="credits">Credits</h2>
        								<div className="line line-lg"></div>
                        <Table data={[
                          {name:'axios',repo:'https://github.com/mzabriskie/axios',license:'https://github.com/mzabriskie/axios/blob/master/LICENSE'},
                          {name:'babel.js',repo:'https://github.com/babel/babel',license:'MIT'},
                          {name:'grunt',repo:'https://github.com/gruntjs/grunt',license:'https://github.com/gruntjs/grunt/blob/master/LICENSE'},
                          {name:'codemirror',repo:'https://github.com/codemirror/CodeMirror',license:'https://github.com/codemirror/CodeMirror/blob/master/LICENSE'},
                          {name:'react-codemirror',repo:'https://github.com/JedWatson/react-codemirror',license:'MIT'},
                          {name:'cookies-js',repo:'https://github.com/js-cookie/js-cookie',license:'MIT'},
                          {name:'draft-js',repo:'https://github.com/facebook/draft-js',license:'BSD'},
                          {name:'draft-js-plugins-editor',repo:'https://github.com/draft-js-plugins/draft-js-plugins',license:'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/LICENSE'},
                          {name:'googleapis',repo:'https://github.com/google/google-api-nodejs-client',license:'Apache 2.0'},
                          {name:'moment',repo:'https://github.com/moment/moment',license:'https://github.com/moment/moment/blob/develop/LICENSE'},
                          {name:'rc-slider',repo:'https://github.com/react-component/slider',license:'MIT'},
                          {name:'react',repo:'https://github.com/facebook/react',license:'https://github.com/facebook/react/blob/master/LICENSE'},
                          {name:'react-chartist',repo:'https://github.com/fraserxu/react-chartist',license:'MIT'},
                          {name:'react-color',repo:'https://github.com/casesandberg/react-color/',license:'MIT'},
                          {name:'react-datepicker',repo:'https://github.com/Hacker0x01/react-datepicker',license:'MIT'},
                          {name:'bootstrap',repo:'https://github.com/twbs/bootstrap',license:'MIT'},
                          {name:'react-google-maps',repo:'https://github.com/tomchentw/react-google-maps',license:'MIT'},
                          {name:'redux',repo:'https://github.com/reactjs/redux/',license:'MIT'},
                          {name:'react-redux',repo:'https://github.com/reactjs/react-redux',license:'MIT'},
                          {name:'react-router',repo:'https://github.com/reactjs/react-router',license:'MIT'},
                          {name:'react-router-redux',repo:'https://github.com/reactjs/react-router-redux',license:'https://github.com/reactjs/react-router-redux/blob/master/LICENSE'},
                          {name:'webpack',repo:'https://github.com/webpack/webpack',license:'MIT'},
                          {name:'webpack-dev-server',repo:'https://github.com/webpack/webpack-dev-server',license:'MIT'},
                          {name:'react-hot-loader',repo:'https://github.com/gaearon/react-hot-loader',license:'MIT'},
                          {name:'font-awesome',repo:'https://github.com/FortAwesome/Font-Awesome',license:'http://scripts.sil.org/OFL'},
                          {name:'material design icons',repo:'https://github.com/google/material-design-icons',license:'https://github.com/google/material-design-icons/blob/master/LICENSE'}
                        ]} />
        							
                      </div>
        						</div>
        						<div className="docs-section clearfix">
        							<div className="content-left">
        								<h2 id="help">Help</h2>
        								<small className="m-b-md">Send us an email at <a href="mailto:help@lightsinthesky.io?subject=[REACT-ADMIN HELP]">help@lightsinthesky.io.</a> and we'll get back to you as soon as possible.</small>
        								<div className="line line-lg"></div>
        							</div>
        						</div>
        					</div>
				        </section>
				      </section>
			      </aside>
			    </section>
			  </section>
			</section>
		);
	}
}

function mapStateToProps(state) {
  return {
  	app: state.app,
  	user:state.user
  };
}

const DocComponent = ({name, description, children, src}) => (
  <div>
  	<h4>{name}</h4>
    <p>{description}</p>
	<Row>
		<Col size="12">
			{children}
		</Col>

		<Col size="12">
			<Codemirror
    		options={{mode:"jsx", readOnly:true, theme:"railscasts"}}
				value={src} />
		</Col>
	</Row>
	<div className="line line-lg"></div>
  </div>
)


export default connect(mapStateToProps)(Docs);
