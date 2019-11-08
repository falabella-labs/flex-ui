/// <reference types="react-redux" />
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ViewAdditionalProps } from "../../ViewCollection";
import { Panel1 } from "./Panel1";
import { Panel2 } from "./Panel2";
import { ITask } from "../../../models";
/**
 * Splitter configuration
 * @typedef AgentDesktopView.SplitterProps
 * @property {string} [initialFirstPanelSize] initial size for the first panel. e.g 320px
 * @property {string} [minimumFirstPanelSize] minimum allowed size for the first panel. e.g 320px
 * @property {string} [minimumSecondPanelSize] minimum allowed size for the second panel. e.g 320px
 */
export interface SplitterProps {
    initialFirstPanelSize?: string;
    minimumFirstPanelSize?: string;
    minimumSecondPanelSize?: string;
}
/**
 * AgentDesktopView properties
 * @typedef {ViewCollection.ViewAdditionalProps} AgentDesktopView.AgentDesktopViewProps
 * @property {string} [selectedTaskSid] SID of the currently selected task
 * @property {AgentDesktopView.SplitterProps} [splitterOptions] Options to customise panels sizes
 * @property {boolean} [showPanel2] If set to false, this flag hides the second panel of the view
 * @property {RouteComponentProps} route Routing object
 * @property {DynamicComponentChildren<AgentDesktopView.AgentDesktopViewChildrenProps>} [children] - children
 */
export interface AgentDesktopViewProps extends ViewAdditionalProps {
    selectedTaskSid?: string;
    splitterOptions?: SplitterProps;
    showPanel2?: boolean;
    route: RouteComponentProps;
}
/**
 * Properties of children from AgentDesktopView
 * @typedef AgentDesktopView.AgentDesktopViewChildrenProps
 * @property {string} [selectedTaskSid] SID of the currently selected task
 * @property {Map<string, ITask>} tasks A map of the worker's tasks
 * @property {RouteComponentProps} route Routing object
 */
export interface AgentDesktopViewChildrenProps {
    tasks: Map<string, ITask>;
    selectedTaskSid?: string;
    route: RouteComponentProps;
}
export interface AgentDesktopViewImplProps extends AgentDesktopViewProps {
    tasks: Map<string, ITask>;
}
/**
 * @classdesc Agent Desktop View
 * @component
 * @hideconstructor
 * @param {AgentDesktopView.AgentDesktopViewProps} props - props
 * @category Components / Programmable
 */
export declare class AgentDesktopView extends React.PureComponent<AgentDesktopViewProps> {
    static readonly displayName = "AgentDesktopView";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<AgentDesktopView.AgentDesktopViewChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Shortcut for Panel1 component
     * @static
     * @type {Panel1}
     * @readonly
     */
    static readonly Panel1: typeof Panel1;
    /**
     * Shortcut for Panel2 component
     * @static
     * @type {Panel2}
     * @readonly
     */
    static readonly Panel2: typeof Panel2;
    /**
     * Default properties
     *
     * @static
     * @type {AgentDesktopView.AgentDesktopViewProps}
     * @readonly
     */
    static readonly defaultProps: Partial<AgentDesktopViewProps>;
    static updateAll(): void;
    private getBaseRoute;
    render(): JSX.Element;
    private renderChildren;
}
export declare const Connected: React.ComponentClass<Pick<AgentDesktopViewImplProps, "selectedTaskSid" | "isViewActive" | "route" | "splitterOptions" | "showPanel2">, any> & {
    WrappedComponent: React.ComponentType<AgentDesktopViewImplProps>;
};
