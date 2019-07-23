/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import { BaseProps } from './ArcBase';
export interface MapProps extends BaseProps {
    id: string;
    mapProperties?: __esri.WebMapProperties;
    viewProperties?: __esri.MapViewProperties;
}
export interface SceneProps extends BaseProps {
    id: string;
    mapProperties?: __esri.WebSceneProperties;
    viewProperties?: __esri.SceneViewProperties;
}
export declare const WebMap: (props: MapProps) => JSX.Element;
export declare const WebScene: (props: SceneProps) => JSX.Element;
