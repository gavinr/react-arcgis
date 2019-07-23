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
import { ArcView } from './ArcBase';
var eventMap = {
    onClick: 'click',
    onDoubleClick: 'double-click',
    onDrag: 'drag',
    onHold: 'hold',
    onKeyDown: 'key-down',
    onKeyUp: 'key-up',
    onLayerViewCreate: 'layerview-create',
    onLayerViewDestroy: 'layerview-destroy',
    onMouseWheel: 'mouse-wheel',
    onPointerDown: 'pointer-down',
    onPointerMove: 'pointer-move',
    onPointerUp: 'pointer-up',
    onResize: 'resize'
};
export var MapBase = function (props) { return (React.createElement(ArcView, __assign({}, props, { loadMap: function (_a, containerId) {
        var Map = _a[0], View = _a[1];
        var mapData = new Promise(function (resolve, reject) {
            try {
                var map_1 = new Map(props.mapProperties); // Make the map
                var viewProperties = __assign({ map: map_1, container: containerId }, props.viewProperties);
                var view_1 = new View(viewProperties); // Make the view
                var typedView_1 = view_1;
                Object.keys(eventMap).forEach(function (key) {
                    if (props[key]) {
                        typedView_1.on(eventMap[key], props[key]);
                    }
                });
                view_1.when(function () {
                    resolve({ map: map_1, view: view_1 });
                }, function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
        return mapData;
    } }))); };
export var WebBase = function (props) { return (React.createElement(ArcView, __assign({}, props, { loadMap: function (_a, containerId) {
        var WebConstructor = _a[0], ViewConstructor = _a[1], all = _a[2];
        var mapData = new Promise(function (resolve, reject) {
            try {
                var map_2 = new WebConstructor(__assign({ portalItem: {
                        id: props.id
                    } }, props.mapProperties));
                map_2.load()
                    .then(function () {
                    return map_2.basemap.load();
                })
                    .then(function () {
                    var allLayers = map_2.allLayers;
                    var promises = allLayers.map(function (layer) { return layer.load(); });
                    return all(promises.toArray());
                })
                    .then(function (layers) {
                    var view = new ViewConstructor(__assign({ container: containerId, map: map_2 }, props.viewProperties));
                    Object.keys(eventMap).forEach(function (key) {
                        if (props[key]) {
                            view.on(eventMap[key], props[key]);
                        }
                    });
                    resolve({ map: map_2, view: view });
                }).otherwise(function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
        return mapData;
    } }))); };
//# sourceMappingURL=ArcComposites.js.map