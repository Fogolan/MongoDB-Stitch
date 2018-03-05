/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Cell
 */

import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Cell extends Component {
	render() {

		const {cellType, value, schemaName} = this.props;

		switch(cellType) {
			case 'id' : 
				return (<td><Link className="btn btn-rounded btn-sm btn-dark" to={`/data/${schemaName}/${value}`}>{value}</Link></td>);
				break;
			case 'Reference' : 
				return (<td><a className="btn btn-rounded btn-sm btn-info" href={'#/data/'+schemaName+'/'+value}>{value}</a></td>);
				break;
			case 'Array' : 
        var buttonlabel = 'View Relations';
        var buttonColor = 'btn-default';

        if (value.length != 0) {
            buttonColor = 'btn-primary';
            buttonlabel = 'View Relations ('+value.length+')';
        }
        return (
          <td>
              <a className={'btn btn-rounded btn-sm ' + buttonColor}>{buttonlabel}</a>
          </td>);
        break;
      case 'Date' : 
      	var day = moment(value);
      	return (<td>{day.format('DD-MM-YYYY')}</td>); break;
      case 'Boolean' : 
        return (<td>{value ? `true` : `false`}</td>); break;
      default: return (<td>{value}</td>); break;
		}
	}
}
