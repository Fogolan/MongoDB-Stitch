/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataTable
 */

import React, {Component} from 'react';
import DataRow from './Row';
import {Pager} from '../../components/ui/';

export default class DataTable extends Component {
    
  headers() {
    const {schema} = this.props;
    return Object.keys(schema.fields).reverse().map((key,i) => {
      return <th key={'header-key-'+key + '-' + i} key={key}>{key}</th>; 
    })
  }

  deleteRow(id) {
    this.props.onDelete(id);
  }

  renderrows() {
    const {rows, schema} = this.props;
    const headerkeys = Object.keys(schema.fields).reverse();

    return rows.map(row => {
      return <DataRow 
        key={row._id}
        schema={schema}
        keys={headerkeys}
        onDelete={(id)=>this.deleteRow(id)}
        row={row} 
      />
    });
  }

  render() {
    const {rows, schema} = this.props;

    return (
      <section>
        <header style={{height:32}} className="panel-heading">
          <span className="text-muted m-l-sm pull-right"> 
            <div className="btn-group"> 
              <button className="btn btn-danger m-t-xs btn-xs dropdown-toggle  m-r-sm" data-toggle="dropdown">Delete <span className="caret"></span></button> 
                <ul className="dropdown-menu"> 
                <li><a href="#">Delete Field</a></li> 
                <li><a href="#">Delete All Data</a></li> 
                <li className="divider"></li> 
                <li><a href="#">Delete Dataset</a></li> 
              </ul> 
            </div>
            <a href="#" className="btn btn-success btn-xs m-t-xs"><i className="fa fa-plus"></i> field</a> 
          </span> 
        </header>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.headers()}
                <th width="20"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderrows()}
            </tbody>
          </table>
        </div>
        <footer className="pull-right">
          <Pager currentPage={0} itemsPerPage={10} totalItems={this.props.totalRows} />
        </footer>
      </section>
    ); 
  }
}
