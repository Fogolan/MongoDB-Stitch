/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Components
 */

 import React, { Component } from 'react';

import Input from '../components/ui/Input';
import DropDownButton from '../components/ui/DropDownButton';
import Badge from '../components/badges/badge';
import Switch from '../components/ui/Switch';
import Timezonecontrol from '../components/ui/timezonecontrol';
import moment from 'moment';

import {Fa, I, Pager, SearchBox ,IStack, Panel} from '../components/ui/';

import {Row, Col, Page} from '../components/ui/Layout';

var shallowCompare = require('react-addons-shallow-compare');

class Components extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
      <Page height={1000}>
        <Row mason={true}>
          <Comp title="Input">
            <Input icon="fa fa-user" placeholder="email" />
          </Comp>
          <Comp title="Drop Down" style={{textAlign:'left'}}>
            <DropDownButton items={[
              {id:0, name:'item 1'},
              {id:1, name:'item 2'},
              {id:2, name:'item 3'},
              ]} selectedLabel="pick something..." />
          </Comp>

          <Comp title="Badge">
            <Badge classes={'d-i-b pull-left m-r-lg'} color="blue" title="Facebook" icon="fa-facebook"/>
            <Badge classes={'d-i-b pull-left m-r-lg'} color="red" title="Twitter" icon="fa-twitter"/>
            <Badge classes={'d-i-b pull-left m-r-lg'} color="green" title="Sign-out" icon="fa-sign-out"/>
            <Badge classes={'d-i-b pull-left m-r-lg'} color="yellow" title="Congrats" icon="fa-trophy"/>
          </Comp>

          <Comp title="Icon (font awesome)">
            <Fa icon="rocket" size={48} />
          </Comp>

           <Comp title="Icon (meterial design)">
            <I icon="g_translate" size={48}/>
          </Comp>

          <Comp title="Pager">
            <Pager currentPage={0} itemsPerPage={10} totalItems={22} />
          </Comp>

          <Comp title="Switch">
            <Switch on={true} classes={'m-r-lg'} />
            <Switch on={false} />
          </Comp>

          <Comp title="Search Box">
            <SearchBox />
          </Comp>

          <Comp title="Icon Stack">
            <IStack icon="check_circle" color="#ffffff" size={24} bg="#ea5a5a" />
          </Comp>

          <Comp title="Timezone Control">
            <Timezonecontrol />
          </Comp>

          <Comp>  
            <div className="pull-left m-r-sm p-t-sm">
              <IStack icon="mail" width={36} height={36} color="#ffffff" size={24} bg="#a88add" />
            </div>
            <div className="pull-left text-left">
              <div className="d-b"><strong className="h4">125</strong> messages</div>
              <span className="text-muted text-small">10 new today.</span>
            </div>
          </Comp>

          <Comp title="Avatar" style={{textAlign:'left'}}>
              <span className="thumb-sm avatar pull-left m-r-xs">
                  <img src="/dist/images/img3.jpg" />
              </span>
              <div className="d-b"><a href={`user/@badRobot`}><strong className="">Bad Robot</strong></a> Posted a message</div>
              <span className="text-muted text-xs"><i className="fa fa-clock-o m-r-xs"></i>{moment(Date.now() - 10000).fromNow()}</span>
          </Comp>

          <Comp title="Profile">
            <div className="avatar">
              <img className="img-circle" src={'/dist/images/5.png'} alt="" />
            </div>
            <a href="javascript:;" onClick={(e)=>handleUserSelected(user)}><h2 className="text-uppercase">Rocket Racoon</h2></a>
            <p>info@microsoft.com</p>
          </Comp>

          <Comp title="Users" style={{textAlign:'left'}}>
            <article className="comment-item"> 
              <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/5.png" className="img-circle" /></a> 
              <section className="comment-body"> 
                <header> <a href="#"><strong>Andrew Wilson</strong></a></header> 
                <div className="text-muted">UI / UX Developer</div> 
              </section> 
            </article>

            <article className="comment-item"> 
              <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/7.png" className="img-circle" /></a> 
              <section className="comment-body"> 
                <header> <a href="#"><strong>Noah Wilson</strong></a></header> 
                <div className="text-muted">UI / UX Developer</div> 
              </section> 
            </article>

            <article className="comment-item"> 
              <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/8.png" className="img-circle" /></a> 
              <section className="comment-body"> 
                <header> <a href="#"><strong>Heather Smith</strong></a></header> 
                <div className="text-muted">UI / UX Developer</div> 
              </section> 
            </article>

            <article className="comment-item"> 
              <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/img3.jpg" className="img-circle" /></a> 
              <section className="comment-body"> 
                <header> <a href="#"><strong>Erin Vieira</strong></a></header> 
                <div className="text-muted">UI / UX Developer</div> 
              </section> 
            </article>

            <article className="comment-item"> 
              <a className="pull-left thumb-sm m-r-sm"><img src="/dist/images/avatar.png" className="img-circle" /></a> 
              <section className="comment-body"> 
                <header> <a href="#"><strong>Mia Vieira</strong></a></header> 
                <div className="text-muted">UI / UX Developer</div> 
              </section> 
            </article>
          </Comp>

          <Comp title="feed" style={{textAlign:'left'}}>
            <div className="media chat-item">
              <div className="media-left p-r">
                <a href="#" className="sa-thumb-small">
                  <img className="media-object avatar circle" src="https://s3-us-west-2.amazonaws.com/mindcraft.io/avatars/4.png" alt="" />
                </a>
                <div className="backbar"></div>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Commented on <a href="#">Sign-up Modal</a> in <a href="#">IPhone Landing Page</a></h4>
                <p>5 minutes ago</p>
              </div>
            </div>

            <div className="media chat-item">
              <div className="media-left p-r">

                <a href="#" className="sa-thumb-small">
                  <img className="media-object avatar circle" src="https://s3-us-west-2.amazonaws.com/mindcraft.io/avatars/6.png" alt="" />
                </a>
                <div className="backbar"></div>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Commented on <a href="#">Sign-up Modal</a> in <a href="#">IPhone Landing Page</a></h4>
                <p>5 minutes ago</p>
              </div>
            </div>

            <div className="media chat-item">
              <div className="media-left p-r">
                <a href="#" className="sa-thumb-small">
                  <img className="media-object avatar circle" src="https://s3-us-west-2.amazonaws.com/mindcraft.io/avatars/7.png" alt="" />
                </a>
                <div className="backbar"></div>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Added 2 new screens to <a href="#">IPhone Landing Page</a></h4>
                <p>30 minutes ago</p>
              </div>
            </div>
          </Comp>
        </Row>
			</Page>
  	);
	}
}



/* simple utility helper */

let Comp = ({title, children, style, classes}) => (
  <div>
    <section className="panel panel-default">
      {title ? <header className="panel-heading">{title}<hr/></header> : null}
      <section className="panel-body text-center" style={style}>
        {children}
      </section>
    </section>
  </div>
)

export default Components;

