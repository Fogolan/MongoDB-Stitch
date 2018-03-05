/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Row
 */

import React, {Component} from 'react';
import { Link } from 'react-router';

import Cell from './Cell';

export default class Row extends Component {

	deleteRow(e) {
    this.props.onDelete(this.props.row._id);    
  }

	render() {
		var cellStyle = {};
		const {schema, keys, row} = this.props;

		return (
			<tr>
        {this.props.keys.map((key,i) => <Cell
            key={'cell-key-'+ key + '-' + i} 
  					schemaName={schema.name}
  					cellType = {schema.fields[key].type}
  					value = {row[key] || ''}
				  />)
      	}
        <td>
        	<a href="javascript:;" onClick={(e)=>this.deleteRow(e)}><i className="fa text-muted fa-trash-o"></i></a>
        	<Link to={'/data/'+schema.name+'/'+row['_id']}><i className="fa text-muted fa-edit"></i></Link>
        </td>
      </tr>
		);
	}
}
