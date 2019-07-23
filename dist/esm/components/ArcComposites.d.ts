/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import { BaseProps } from './ArcBase';
export interface MapBaseProps extends BaseProps {
    scriptUri: string[];
}
export interface WebBaseProps extends BaseProps {
    scriptUri: string[];
    id: string;
}
export declare const MapBase: (props: MapBaseProps) => JSX.Element;
export declare const WebBase: (props: WebBaseProps) => JSX.Element;
