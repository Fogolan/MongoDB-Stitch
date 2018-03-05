/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DraftEditor
 */

import React, {Component} from 'react';
import {stateToHTML} from 'draft-js-export-html';

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

export default class DraftInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
      editorState : EditorState.createEmpty() 
		}
	}

  onChange = (editorState) => {
        this.setState({editorState});

        if (editorState) {
          this.props.onFieldChange(stateToHTML(editorState.getCurrentContent()));
        }
  }

  onFocus = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  } 

	render() {

    let placeholder = this.props.placeholder || 'Write something...';
		return (
			<div>
        <div className="fullEditorWrap" style={this.props.style}>
          <Editor
            ref="editor"
            suppressContentEditableWarning
            spellCheck={true}
            handleKeyCommand={(command)=>this.handleKeyCommand(command)}
            placeholder={placeholder} 
            editorState={this.state.editorState} 
            plugins={ [hashtagPlugin, linkifyPlugin] }
            onChange={this.onChange} 
            onFocus={this.onFocus}/>
          </div>
      </div>
		);
	}
}

