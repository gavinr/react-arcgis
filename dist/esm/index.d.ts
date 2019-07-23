/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import * as MapViews from './components/MapComposites';
import * as WebViews from './components/WebComposites';
import { loadModules } from 'esri-loader';
export { loadModules } from 'esri-loader';
declare const ReactArcGIS: {
    Map: (props: MapViews.MapProps) => JSX.Element;
    Scene: (props: MapViews.SceneProps) => JSX.Element;
    WebMap: (props: WebViews.MapProps) => JSX.Element;
    WebScene: (props: WebViews.SceneProps) => JSX.Element;
    esriPromise: typeof loadModules;
};
export default ReactArcGIS;
export declare const WebMap: (props: WebViews.MapProps) => JSX.Element;
export declare const WebScene: (props: WebViews.SceneProps) => JSX.Element;
export declare const Map: (props: MapViews.MapProps) => JSX.Element;
export declare const Scene: (props: MapViews.SceneProps) => JSX.Element;
export declare const esriPromise: typeof loadModules;
