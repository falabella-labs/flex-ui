import { ThemeProps } from "../theme";
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { WorkerCanvasProps } from "./WorkerCanvas";
export declare const displayName = "WorkerCanvas";
export declare const contentStore: DynamicContentStore;
export declare class WorkerCanvasImpl extends React.PureComponent<WorkerCanvasProps & ThemeProps> {
    render(): JSX.Element;
    private handleClose;
}
