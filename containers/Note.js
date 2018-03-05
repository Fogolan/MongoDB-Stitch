/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Note
 */

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

import { putMe, logout } from '../actions';
import {Row, Col, Page} from '../components/ui/Layout';

import { 
    EditorState, 
    ContentState, 
    MediaUtils,
    getVisibleSelectionRect, 
    CompositeDecorator, 
    convertToRaw, 
    Entity, 
    RichUtils, 
    convertFromRaw,
    getDefaultKeyBinding, 
    KeyBindingUtil
} from 'draft-js';

import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';

import 'draft-js-hashtag-plugin/lib/plugin.css';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

import Editor from 'draft-js-plugins-editor';

import { connect } from 'react-redux';

let noteActions = LocalReduxOutlet('note', '576a87c1e0b944000054d234').actions;
var shallowCompare = require('react-addons-shallow-compare');


class Note extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
		  selectedNote : {},
          isSaving: false,
          editorState: EditorState.createEmpty(),
          blockIndicatorVisible : false,
          blockIndicatorLeft: 0,
          blockIndicatorTop: 0
        }
	}

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handlefocus = () => {
    var editorNode = ReactDom.findDOMNode(this.refs['editor']);
    var editorBounds = editorNode.getBoundingClientRect();

    this.setState({
      editorBounds,
    });
    this.refs.editor.focus();
  }

  onChange = (editorState) => {
      this.setState({editorState});
      setTimeout(this.updateSelection, 4);
  }

  getSelectedBlockElement = (range) => {
    var node = range.startContainer;
    do {
      if (node.getAttribute && node.getAttribute('data-block') == 'true')
        return node;
      node = node.parentNode;
    } while (node != null)
    return null;
  }

  getSelectionRange = () => {
    var selection = window.getSelection()
    if (selection.rangeCount == 0) return null
    return selection.getRangeAt(0)
  }

  updateSelection = () => {

      const currentContent = this.state.editorState.getCurrentContent()
      const selection = this.state.editorState.getSelection()
      const currentBlock = currentContent.getBlockForKey(selection.getStartKey())

      const isEmpty = currentBlock.getText() == '';


      let selectionRange = this.getSelectionRange()
      
      let blockVisible = false;
      let blockleft = 0;
      let blocktop = 0;
    
      if (selectionRange && isEmpty) {
          
          let rangeBounds = selectionRange.getBoundingClientRect();
      
          var selectedBlock = this.getSelectedBlockElement(selectionRange);
      


          if (selectedBlock) {
              var blockBounds = selectedBlock.getBoundingClientRect()
              blockVisible = true;

              var editorBounds = this.state.editorBounds;

              blocktop = (blockBounds.top - editorBounds.top) + 30;
              // blocktop = blockBounds.top;

              blockleft = -18;

          }
      }
      this.setState({
          blockIndicatorVisible:blockVisible,
          blockIndicatorLeft:blockleft,
          blockIndicatorTop:blocktop
      });
  }

	componentWillMount = () => {
        
        let {dispatch, notes, token} = this.props;

        let id = this.props.params.id;

        let currentNote = notes.list[0];

        if (!currentNote || currentNote._id !== id) {
            dispatch(noteActions.fetchItemIfNeeded(token, id, notes.items, noteActions.fetchOne, noteActions.setSelected));
        } else {
            if (currentNote.content) {
                if (!currentNote.content.entityMap) {
                    currentNote.content.entityMap = {};
                }

                let blocks = convertFromRaw(currentNote.content);

                this.setState({
                    selectedNote: currentNote,
                    editorState : EditorState.push(this.state.editorState, ContentState.createFromBlockArray(blocks.getBlocksAsArray()))
                });   
            } else {
                 this.setState({
                    selectedNote: currentNote
                });  
            }
        }
    }


    componentWillReceiveProps = (nextProps) => {

        console.log('receievd props  : ' + nextProps);

        let currentNote = nextProps.notes.item;

        if (currentNote.content) {
            if (!currentNote.content.entityMap) {
                currentNote.content.entityMap = {};
            }

            let blocks = convertFromRaw(currentNote.content);

            this.setState({
                selectedNote: currentNote,
                editorState : EditorState.push(this.state.editorState, ContentState.createFromBlockArray(blocks.getBlocksAsArray()))
            });   
        } else {
             this.setState({
                selectedNote: currentNote
            });  
        }

    }


    handleSave = () => {
        this.setState({isSaving:true});

        let {dispatch, token} = this.props;


        let rawState = convertToRaw(this.state.editorState.getCurrentContent());

        
        let storyUpdate = this.state.selectedNote;

        // if (this.props.story.story.title === '') {
            // storyUpdate.slug = generateSlug(this.state.title);
        // }

        // storyUpdate.title = this.state.title !== '' ? this.state.title : 'Untitled';
        // storyUpdate.imageURL = this.state.imageURL;
        storyUpdate.content = rawState;
        storyUpdate.dateUpdated = Date.now();

        
        dispatch(noteActions.update(token, storyUpdate)).then(
            (r) => {this.setState({isSaving:false})} 
        );
    
    }

    handleKeyCommand = (command) => {
        if (command === 'myeditor-save') {
            this.handleSave();
            return true;
        } else {

            const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

            if (newState) {
              this.onChange(newState);
              return true;
            }
        }
        return false;
    }   

	render() {

        let {user} = this.props;

        const {editorState} = this.state;

		return (
			<Page height={800}>
        <Row>
          <Col size="12">          
             <div className="m-t-xs" style={{width:'90%', margin: '0px auto 20px'}}>
                <h3 className="m-b-none">{this.state.selectedNote.name}</h3> 
                <small className="text-muted">{this.state.selectedNote.description}</small> 
              </div>
            </Col>
            <Col size="12">
              <div style={{width:'90%', margin: '0px auto 20px'}}>
                <span className="thumb-sm avatar pull-left m-r-xs">
                    <img src={user.avatar ? user.avatar : ''} />
                </span>
                <strong className="d-b">{user.name}</strong>
                <span className="text-muted text-xs">{moment(Date.now()-10000).fromNow()}</span>
                <div className="pull-right">
                    <a href="javascript:;" onClick={()=>this.handleSave()}><i className={this.state.isSaving ? 'fa faaction fa-2x text-muted fa-hourglass-o' : 'fa faaction fa-2x text-muted fa-floppy-o'}></i></a>
                </div>
              </div>
            </Col>
        </Row>
        <Row>
          <Col size="12">
              {/* Editor */}
              <div ref="editWrap" className="note-editor" onClick={this.handlefocus}>
                <Editor
                  ref="editor"
                  suppressContentEditableWarning
                  spellCheck={true}
                  handleKeyCommand={(command)=>this.handleKeyCommand(command)}
                  placeholder="Write something..." 
                  editorState={editorState} 
                  keyBindingFn={myKeyBindingFn}
                  plugins={ [hashtagPlugin, linkifyPlugin] }
                  onChange={this.onChange} />
              </div>
          </Col>
        </Row>
    </Page>
		);
	}
}

function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return 'myeditor-save';
  }
  return getDefaultKeyBinding(e);
}

function mapStateToProps(state) {
  return {
  	token: state.app.token,
    user: state.user,
    notes: state.notes
  };
}

export default connect(mapStateToProps)(Note);
