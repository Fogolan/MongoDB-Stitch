/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule contentModal
 */

import React, {Component} from 'react';

const ContentModal = ({body}) => (
  <section dangerouslySetInnerHTML={{__html:body}} style={{marginBottom:0}}></section>
);

export default ContentModal;