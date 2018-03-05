/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule datatypes
 */


import StringElement from './StringElement';
import ImageElement from './ImageElement';
import DateElement from './DateElement';
import ArrayElement from './ArrayElement';
import ReferenceElement from './ReferenceElement';
import TextElement from './TextElement';
import BooleanElement from './BooleanElement';
import MarkdownElement from './MarkdownElement';
import HTMLElement from './HTMLElement';
import GeoPointElement from './GeoPointElement';
import MixedElement from './MixedElement';
import ColorElement from './ColorElement';

const datatypes = {
    String : {
        name: 'String',
        label: 'text',
        type: String,
        reactClass: StringElement
    },
    Text : {
        name: 'Text',
        label: 'text',
        type: String,
        reactClass: TextElement
    },
    HTML: {
        name: 'HTML',
        label: 'HTML',
        type: String,
        reactClass: StringElement
    },
    Markdown : {
        name: 'Markdown',
        label: 'Markdown',
        type: String,
        reactClass: MarkdownElement
    },
    Image : {
        name: 'Image',
        label: 'Image',
        type: String,
        reactClass: ImageElement
    },
    Number : {
        name: 'Number',
        label: 'number',
        type: Number,
        reactClass: StringElement
    },
    Boolean : {
        name: 'Boolean',
        label: 'yes/no',
        type: Boolean,
        reactClass: BooleanElement
    },
    Date : {
        name: 'Date',
        label: 'date and time',
        type: Date,
        reactClass: DateElement
    },
    GeoPoint :{
        name: 'GeoPoint',
        label: 'Lat Lng',
        type: Object,
        reactClass: GeoPointElement
    },
    Array : {
        name: 'Array',
        label: 'array',
        type: [],
        reactClass: ArrayElement
    },
    Reference :{
        name: 'Reference',
        label: 'reference',
        type: {},
        reactClass: ReferenceElement
    },
    Mixed : {
        name: 'Mixed',
        label: 'mixed',
        type: {},
        reactClass: MixedElement
    },
    Color : {
        name: 'Color',
        label: 'Color',
        type: {},
        reactClass: ColorElement
    }
};

export default datatypes;