/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Index
 */

import React from 'react';
import ReactDom from 'react-dom';

import Root from './containers/Root';

ReactDom.render(
  <Root />,
  document.getElementById('wrapperContainer')
);