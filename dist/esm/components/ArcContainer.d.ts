/// <reference types="arcgis-js-api" />
import * as React from 'react';
export interface ArcContainerProps {
    id: string;
    style?: {
        [propName: string]: any;
    };
}
export interface ArcContainerState {
}
export default class ArcContainer extends React.Component<ArcContainerProps, ArcContainerState> {
    constructor(props: ArcContainerProps);
    render(): JSX.Element;
    shouldComponentUpdate(): boolean;
}
