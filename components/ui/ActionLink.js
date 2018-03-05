/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule ActionLink
 */

import React, {Component} from 'react';

export default ({dataid, itemSelected, children}) => (
  <a href="#" key={dataid} onClick={itemSelected}>{children}</a>
)
