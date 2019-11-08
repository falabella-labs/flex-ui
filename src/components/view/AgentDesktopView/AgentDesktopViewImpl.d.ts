import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { AgentDesktopViewImplProps } from "./AgentDesktopView";
export declare const displayName = "AgentDesktopView";
export declare const contentStore: DynamicContentStore;
export declare class AgentDesktopViewImpl extends React.PureComponent<AgentDesktopViewImplProps> {
    private splitter;
    private static splitterState;
    private removeFilter;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private notificationFilter;
    private getTaskSidFromRoute;
    private handleSplitterNeedsUpdate;
    private renderContents;
    render(): JSX.Element;
    private handleResize;
    private makeSplitterRef;
}
