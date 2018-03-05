/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ImageElement
 */

import React ,{Component} from 'react';

import PhotoElement from '../../components/widgets/PhotoElement';


export default class ImageElement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field_value: this.props.field_value || '/dist/images/image_placeholder.png',
            field_type: this.props.field_type
        }
    }

    handleEdit(e) {
        this.setState({field_value: e.target.value});      
        this.props.onUpdate(this.props.keyField, e.target.value);      
    }

    handlePhotoEdit(url) {
        this.setState({field_value: url});      
        this.props.onUpdate(this.props.keyField, url);    
    }

	render() {
		return (
        <div className="form-group">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-10">
                <PhotoElement 
                    photoHelp="Update Image"
                    image={this.state.field_value} 
                    handlePhotoChange={(url)=>this.handlePhotoEdit(url)} />
                <span className="help-block m-b-none">{this.props.help}</span>
            </div>
        </div>
        );
	}
}
