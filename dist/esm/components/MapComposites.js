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
import { MapBase } from './ArcComposites';
export var Map = function (props) { return (React.createElement(MapBase, __assign({ scriptUri: ['esri/Map', 'esri/views/MapView'] }, props, { mapProperties: __assign({ basemap: 'streets-vector' }, props.mapProperties), viewProperties: __assign({ center: [-122.4443, 47.2529], zoom: 6 }, props.viewProperties) }))); };
export var Scene = function (props) { return (React.createElement(MapBase, __assign({ scriptUri: ['esri/Map', 'esri/views/SceneView'] }, props, { mapProperties: __assign({ basemap: 'satellite', ground: 'world-elevation' }, props.mapProperties), viewProperties: __assign({ center: [-122.4443, 47.2529], zoom: 6 }, props.viewProperties) }))); };
//# sourceMappingURL=MapComposites.js.map