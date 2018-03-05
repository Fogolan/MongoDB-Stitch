/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ProgressBar
 */

import React from 'react';

export default ({label, now, max, theme}) => {
	let pct = Math.floor(now/max*100);
	return (
		<div>
			<div className="progress-label">{label}</div>
			<div className="progress progress-sm">			
        <div className={`progress-bar animated fadeInLeft ${theme}`} role="progressbar" aria-valuenow={now} aria-valuemin="0" aria-valuemax={max} style={{width: pct+'%'}}>
          <span className="sr-only">{now}</span>
        </div>
      </div>
    </div>
	)
}

