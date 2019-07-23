import * as MapViews from './components/MapComposites';
import * as WebViews from './components/WebComposites';
import { loadModules } from 'esri-loader';
export { loadModules } from 'esri-loader';
var ReactArcGIS = {
    Map: MapViews.Map,
    Scene: MapViews.Scene,
    WebMap: WebViews.WebMap,
    WebScene: WebViews.WebScene,
    esriPromise: loadModules
};
export default ReactArcGIS;
export var WebMap = ReactArcGIS.WebMap;
export var WebScene = ReactArcGIS.WebScene;
export var Map = ReactArcGIS.Map;
export var Scene = ReactArcGIS.Scene;
export var esriPromise = loadModules;
//# sourceMappingURL=index.js.map