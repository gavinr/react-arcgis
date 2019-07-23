/// <reference types="arcgis-js-api" />
import * as React from 'react';
export interface BaseProps {
    id?: string;
    children?: any;
    className?: string;
    style?: {
        [propName: string]: any;
    };
    mapProperties?: __esri.MapProperties | __esri.WebMapProperties | __esri.WebSceneProperties;
    viewProperties?: __esri.MapViewProperties | __esri.SceneViewProperties;
    onClick?: (e: EventProperties) => any;
    onDoubleClick?: (e: EventProperties) => any;
    onDrag?: (e: EventProperties) => any;
    onHold?: (e: EventProperties) => any;
    onKeyDown?: (e: EventProperties) => any;
    onKeyUp?: (e: EventProperties) => any;
    onLayerViewCreate?: (e: EventProperties) => any;
    onLayerViewDestroy?: (e: EventProperties) => any;
    onMouseWheel?: (e: EventProperties) => any;
    onPointerDown?: (e: EventProperties) => any;
    onPointerMove?: (e: EventProperties) => any;
    onPointerUp?: (e: EventProperties) => any;
    onResize?: (e: EventProperties) => any;
    onLoad?: (map: __esri.Map, view: __esri.MapView | __esri.SceneView) => any;
    onFail?: (e: any) => any;
    loadElement?: any;
    failElement?: any;
    loaderOptions?: Object;
    childrenAsFunction?: (map?: __esri.Map, view?: __esri.MapView | __esri.SceneView) => JSX.Element;
}
export interface ArcProps extends BaseProps {
    loadMap: (modules: any[], containerId: string) => Promise<any>;
    scriptUri: string[];
}
export interface EventProperties {
    [propName: string]: any;
}
export interface ComponentState {
    mapContainerId: string;
    status: string;
    map?: __esri.Map;
    view?: __esri.MapView | __esri.SceneView;
}
export declare class ArcView extends React.Component<ArcProps, ComponentState> {
    constructor(props: ArcProps);
    render(): JSX.Element;
    componentDidMount(): void;
}
