/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModules UI
 */

import React from 'react';

const UI = {};

UI.Button = ({icon, label, size, color, classes, onClick, style, tooltip, rounded = false}) => {
  const button_icon = icon ? <i className={`${label ? 'm-r-xs' : ''} fa ${icon}`} /> : null; 
  const button_label = label ? <span className="text">{label}</span> : null;
  return <button style={style} data-balloon={tooltip} onClick={onClick} className={`btn ${color} ${size} ${classes} ${rounded ? 'btn-rounded' : ''}`}>{button_icon}{button_label}</button>
}

UI.Fa = ({icon, size, color, classes}) => (
  <i style={size ? {fontSize:size} : {}} className={`fa fa-2x fa-${icon} ${classes}`}></i>
)


UI.I = ({icon, size, color, classes, style}) => {
  let _classes = `material-icons ${classes}`;
  let _style = Object.assign({},
              { fontSize : size ? size : 24,
                verticalAlign: 'middle',
                color : color ? color : '#757575'},
                style);
  return (
    <i className={_classes} style={_style}>{icon}</i>
  )
}

UI.Table = ({data, classes}) => (
  <table className={`table ${classes}`}>
    <thead> 
      <tr> 
        {Object.keys(data[0]).map((key,i) => {
          return <th key={'row-'+key+'-'+i}>{key}</th>
        })} 
      </tr> 
    </thead>
    <tbody> 
      {data.map((row,j) => {
        return <tr key={'r-'+j}>
          {Object.keys(row).map((column,k) => {
            return <td key={'col-'+column+'-'+k}>{row[column]}</td>
          })}
        </tr>
      })}
    </tbody>  
  </table>
)


UI.IStack = ({icon, size, color, bg, width, height, classes}) => {
  
  let _style = {
    backgroundColor : bg ? bg : '#757575',
    width: width,
    height: height
  };

  return (
    <div className={`iconStack ${classes}`}>
      <span style={_style}>
        <UI.I icon={icon} size={size} color={color} style={{lineHeight:height+'px'}} />
      </span>
    </div>
  )
}

UI.Label = ({color, classes, title}) => (
  <span className={`label ${color} ${classes}`}>
    {title}
  </span>
)

UI.SearchBox = ({val, onChange}) => (
   <form className="search-content" action="#" method="post">
        <div className={'iconic-input'}>
          <i className="fa fa-search"></i>
          <input type="text" className="form-control" name="keyword" onChange={onChange} value={val}  placeholder="Search..."/>
        </div>
    </form>
);

UI.Panel = ({title, children, scrollHeight, classes, height}) => {
  
  let baseStyle = {};
  if (height) {
    baseStyle = {height:height, overflow:'hidden'};
  }
  return (
  	<section style={scrollHeight ? Object.assign({},baseStyle,{paddingBottom:30}) : baseStyle} className="panel panel-default m-b-lg">
      {title ? <header className="panel-heading text-uc">{title}{title ? <hr /> : null}</header> : null}
      <section style={scrollHeight ? {height:scrollHeight, overflowY:'scroll'} : {}} className={`panel-body ${classes}`}>
  		{children}
      </section>
  	</section>
  )
}


UI.PageHead = ({title, subtitle, children, classes}) => (
  <div className={`page-head ${classes}`}>
    <h3 dangerouslySetInnerHTML={{__html:title}}></h3>
    <span className="sub-title">{subtitle}</span>
    {children}  
  </div>
);


UI.Pager = ({currentPage, itemsPerPage, totalItems, onNext, onPrevious, onPage, classes}) => {

  let pages = totalItems / itemsPerPage;
  
  let buttonArray = [];
  for (var i=0; i < pages; i++) {
    buttonArray.push(i);
  }

  const linkButtons = buttonArray.map(index => {
    return <li key={'page-key-' + index} className="paginate_button " aria-controls="DataTables_Table_1" tabIndex="0"><a href="#" onClick={onPage}>{index+1}</a></li>
  })

  return (
  	<div className={`tbl-footer ${classes}`}>
      <div>
          <div className="text-right m-t-lg">Showing {(currentPage*itemsPerPage)+1} to {(currentPage*itemsPerPage)+ itemsPerPage} of {totalItems} entries</div>
      </div>
      <div>
          <div className="dataTables_paginate paging_simple_numbers text-right" id="DataTables_Table_1_paginate">
              <ul className="pagination" style={{marginTop:5}}>
                  <li className="paginate_button previous disabled" aria-controls="DataTables_Table_1" tabIndex="0" id="DataTables_Table_1_previous"><a href="javascript:;" onClick={onPrevious}>Previous</a></li>
                  {linkButtons}
                  <li className="paginate_button next" aria-controls="DataTables_Table_1" tabIndex="0" id="DataTables_Table_1_next"><a href="javascript:;" onClick={onNext}>Next</a></li>
              </ul>
          </div>
      </div>
    </div>
  )
};

UI.Alert = ({color, persistant, title, onClose, classes, children}) => (
    <div className={`alert ${color}`}>
      {!persistant ? <button type="button" onClick={onClose}  className="close" data-dismiss="alert">×</button> : null}
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
);  

 
export default UI;