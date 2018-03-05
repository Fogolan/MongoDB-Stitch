/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule badge
 */

import React from 'react';

export default ({color, title, icon, classes}) => (
	<div className={classes} style={{width:67}}>
		<div className="badgestack">
      <div className={`hexagon badge-${color}`} />
      <i className={`fa fa-2x ${icon}`}></i>
    </div>
    <small className="text-muted">{title}</small>
  </div>
);
