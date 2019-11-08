import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskCanvasChildrenProps } from "./TaskCanvas.definitions";
export declare const displayName = "TaskCanvas";
export declare const contentStore: DynamicContentStore;
export declare class TaskCanvasImpl extends React.PureComponent<TaskCanvasChildrenProps> {
    render(): JSX.Element;
}
