/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import { BaseProps } from './ArcBase';
export interface MapProps extends BaseProps {
    mapProperties?: __esri.MapProperties;
    viewProperties?: __esri.MapViewProperties;
}
export interface SceneProps extends BaseProps {
    mapProperties?: __esri.MapProperties;
    viewProperties?: __esri.SceneViewProperties;
}
export declare const Map: (props: MapProps) => JSX.Element;
export declare const Scene: (props: SceneProps) => JSX.Element;
