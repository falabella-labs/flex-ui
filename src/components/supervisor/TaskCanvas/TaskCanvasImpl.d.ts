import * as React from "react";
import { TaskContextProps } from "../../context";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "../../theme";
export declare const displayName = "TaskCanvas";
export declare const contentStore: DynamicContentStore;
export declare class TaskCanvasImpl extends React.PureComponent<TaskContextProps & ThemeProps> {
    static readonly displayName = "TaskCanvas";
    render(): JSX.Element;
    private handleCloseTask;
}
