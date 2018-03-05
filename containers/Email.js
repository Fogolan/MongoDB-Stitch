/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Dashboard

  
  todo :
    data (draftjs)
    add interativity
    responsive
    typography

    reply (thread)
    compose (draft)
    delete confirm
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import ReduxOutlet from '../outlets/ReduxOutlet';
import moment from 'moment';
import ModalFactory from '../components/modals/factory';
import Compose from '../components/modals/Compose';

import {I, Panel, Button, SearchBox} from '../components/ui/';
import {Row, Col, Page, Scroller} from '../components/ui/Layout';

import Confirm from '../components/modals/Confirm';

import MailItem from '../components/email/MailItem';
import MailBody from '../components/email/MailBody';
import MailFolder from '../components/email/MailFolder';

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');

class Email extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height : this.getMeasuredHeight(),
      selectedFolderIndex : 6,
      selectedItem : props.emails.list[0],
      searchTerm : '',
      scroll: false

    }
  }

  getMeasuredHeight() {
    return window.innerHeight - 150;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleResize(e) {
    console.log(window.innerWidth);

    if (window.innerWidth < 992) {
      this.setState({height: window.innerHeight-150,scroll:false});
    } else {
      this.setState({height: window.innerHeight-150, scroll : true});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', (e)=>this.handleResize(e));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', (e)=>this.handleResize(e));
  }


  composeFilter(item){
    let folderFilters = ['INBOX','OUTBOX','DRAFTS','SENT','JUNK','TRASH','ALL'];
    

    let activeFolder = folderFilters[this.state.selectedFolderIndex];
    let searchFilter = this.state.searchTerm;

    if (activeFolder !== 'ALL') {
      return ((item.folder === activeFolder) &&
             (item.subject.includes(searchFilter))); 
    }
    return item.subject.includes(searchFilter);
  }

  emailSelected(m) {
    this.setState({selectedItem:m});
  }

  folderSelected(index) {
    this.setState({selectedFolderIndex:index});
  }

  updateSearch(e) {
    this.setState({searchTerm:e.currentTarget.value});
  }
  
  onComposeClick(e) {
    e.preventDefault();
    ModalFactory.show('composeModal');
  }

  onSend(m) {
    ModalFactory.hide('composeModal');
  }

  render() {
    const { dispatch, emails } = this.props;
    let i = 0;
    return (
      <Page>
        <Factory modalref="composeModal" onCompose={(email)=>this.onSend(email)} large={true} title="New Email" factory={Compose} />
        <Row>
          <Col size={12}>
            <Panel>
              <Row>
                <Col size={6}>
                  <SearchBox val={this.state.searchTerm} onChange={(t)=>this.updateSearch(t)}/>
                </Col>
                <Col size={6} classes="text-right">
                  <a href="#" data-balloon="Reply" data-balloon-pos="down" className="m-r-lg"><I color="#c1c1c1" icon="reply" style={{lineHeight: '32px',fontSize: '24px',verticalAlign: 'top'}} /></a>
                  <a href="#" data-balloon="Reply All" data-balloon-pos="down" className="m-r-lg"><I color="#c1c1c1" icon="reply_all" style={{lineHeight: '32px',fontSize: '24px',verticalAlign: 'top'}} /></a>
                  <a href="#" data-balloon="Forward" data-balloon-pos="down" className="m-r-lg"><I color="#c1c1c1" icon="forward" style={{lineHeight: '32px',fontSize: '24px',verticalAlign: 'top'}} /></a>
                  <a href="#" data-balloon="Mark as Spam" data-balloon-pos="down" className="m-r-lg"><I color="#c1c1c1" icon="report" style={{lineHeight: '32px',fontSize: '24px',verticalAlign: 'top'}} /></a>
                  <a href="#" data-balloon="Trash" data-balloon-pos="down" className="m-r-lg"><I color="#c1c1c1" icon="delete" style={{lineHeight: '32px',fontSize: '24px',verticalAlign: 'top'}} /></a>
                  <button onClick={(e)=>this.onComposeClick(e)} className="btn btn-info btn-sm m-r-sm m-b-sm "><i className=" fa fa-plus-circle"></i></button>
                </Col>
              </Row>

              <Row classes="m-t-md">
                <Col size={{lg:2, md:3, sm:6}}>
                    <ul className="mail-folder" style={{height:this.state.height-100}}>
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={0} name="Inbox" items={this.props.emails.list.filter(item=>item.folder === 'INBOX').length} icon={'inbox'} color={'#f1f100'} active={this.state.selectedFolderIndex===0} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={1} name="Outbox" items={this.props.emails.list.filter(item=>item.folder === 'OUTBOX').length} icon={'mail'} color={'#f1f100'} active={this.state.selectedFolderIndex===1} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={2} name="drafts" items={this.props.emails.list.filter(item=>item.folder === 'DRAFTS').length} icon={'drafts'} color={'#f1f100'} active={this.state.selectedFolderIndex===2} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={3} name="Sent" items={this.props.emails.list.filter(item=>item.folder === 'SENT').length} icon={'send'} color={'#f1f100'} active={this.state.selectedFolderIndex===3} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={4} name="Junk" items={this.props.emails.list.filter(item=>item.folder === 'JUNK').length} icon={'report'} color={'#f1f100'} active={this.state.selectedFolderIndex===4} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={5} name="Trash" items={this.props.emails.list.filter(item=>item.folder === 'TRASH').length} icon={'delete'} color={'#f1f100'} active={this.state.selectedFolderIndex===5} />
                      <MailFolder onSelect={(index)=>this.folderSelected(index)} index={6} name="All Mail" items={this.props.emails.list.length} icon={'folder_open'} color={'#f1f100'} active={this.state.selectedFolderIndex===6} />
                    </ul>
                </Col>
                <Col size={{lg:4, md:4, sm:6}}>  
                  <Scroller height={this.state.height-100}>  
                  {emails.list.filter(item => this.composeFilter(item)).map(email => {
                    return <MailItem emailSelected={(m)=>this.emailSelected(m)} key={email._id} email={email} active={email._id === this.state.selectedItem._id} />
                  })}  
                  </Scroller>

                </Col>
                <Col size={{lg:6, md:5, sm:12}}>
                  <Scroller height={this.state.height-100}>
                    <MailBody email={this.state.selectedItem} />
                  </Scroller>
                </Col>
              </Row>
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
    emails:state.emails
  };
}

export default connect(mapStateToProps)(Email);

