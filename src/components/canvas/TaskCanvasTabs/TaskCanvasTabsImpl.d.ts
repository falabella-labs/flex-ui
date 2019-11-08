import { Theme } from "../../theme";
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskCanvasTabsChildrenProps } from "./TaskCanvasTabs.definitions";
export declare const displayName = "TaskCanvasTabs";
export declare const contentStore: DynamicContentStore;
export declare class TaskCanvasTabsImpl extends React.PureComponent<TaskCanvasTabsChildrenProps> {
    render(): JSX.Element;
    private handleTabSelection;
    private renderChat;
}
export declare function getThemeForChat(taskColor: string): (baseTheme: Theme) => Theme;
