var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { WebBase } from './ArcComposites';
export var WebMap = function (props) { return (React.createElement(WebBase, __assign({ scriptUri: ['esri/WebMap', 'esri/views/MapView', 'dojo/promise/all'] }, props, { viewProperties: props.viewProperties, mapProperties: props.mapProperties }))); };
export var WebScene = function (props) { return (React.createElement(WebBase, __assign({ scriptUri: ['esri/WebScene', 'esri/views/SceneView', 'dojo/promise/all'] }, props, { viewProperties: props.viewProperties, mapProperties: props.mapProperties }))); };
//# sourceMappingURL=WebComposites.js.map