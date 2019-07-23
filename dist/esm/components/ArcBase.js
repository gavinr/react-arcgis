var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { loadModules } from 'esri-loader';
import * as React from 'react';
import ArcContainer from './ArcContainer';
var ArcView = /** @class */ (function (_super) {
    __extends(ArcView, _super);
    function ArcView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mapContainerId: Math.random().toString(36).substring(0, 14),
            status: 'loading'
        };
        return _this;
    }
    ArcView.prototype.render = function () {
        var _this = this;
        var centerStyle = {
            left: '50%',
            marginRight: '-50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        };
        var mapStyle = this.props.className ?
            this.props.style : __assign({ height: '100%', position: 'relative', width: '100%' }, this.props.style);
        var loadElement = (this.props.loadElement ? this.props.loadElement :
            React.createElement("h3", { id: "react-arcgis-loading-text" }, "Loading..."));
        var failElement = (this.props.failElement ? this.props.failElement :
            React.createElement("h3", { id: "react-arcgis-fail-text" }, "The ArcGIS API failed to load."));
        if (this.state.status === 'loaded') {
            if (!!this.props.childrenAsFunction) {
                return this.props.childrenAsFunction(this.state.map, this.state.view);
            }
            var childrenWithProps = React.Children.map(this.props.children, function (child) {
                var childEl = child;
                return React.cloneElement(childEl, {
                    map: _this.state.map,
                    view: _this.state.view
                });
            });
            return (React.createElement("div", { id: "base-container", style: mapStyle, className: this.props.className },
                React.createElement(ArcContainer, { id: this.state.mapContainerId, style: { width: '100%', height: '100%' } }),
                childrenWithProps));
        }
        else if (this.state.status === 'loading') {
            return (React.createElement("div", { id: "base-container", style: mapStyle, className: this.props.className },
                React.createElement(ArcContainer, { id: this.state.mapContainerId, style: { width: '100%', height: '100%' } }),
                React.createElement("div", { style: centerStyle }, loadElement)));
        }
        return (React.createElement("div", { id: "base-container", style: mapStyle, className: this.props.className },
            React.createElement(ArcContainer, { id: this.state.mapContainerId, style: { width: '100%', height: '100%' } }),
            React.createElement("div", { style: centerStyle }, failElement)));
    };
    ArcView.prototype.componentDidMount = function () {
        var _this = this;
        loadModules(this.props.scriptUri, this.props.loaderOptions)
            .then(function (modules) { return (_this.props.loadMap(modules, _this.state.mapContainerId)
            .then(function (_a) {
            var map = _a.map, view = _a.view;
            _this.setState({
                map: map,
                view: view,
                status: 'loaded'
            });
            if (_this.props.onLoad) {
                _this.props.onLoad(map, view);
            }
        })
            .catch(function (e) {
            throw e;
        })); }).catch(function (e) {
            _this.setState({ status: 'failed' });
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    return ArcView;
}(React.Component));
export { ArcView };
//# sourceMappingURL=ArcBase.js.map