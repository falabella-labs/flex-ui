import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { AgentDesktopViewChildrenProps } from "../AgentDesktopView";
/**
 * Orientation of splitter component
 * @readonly
 * @enum {"auto"|"vertical"|"horizontal"} SplitterOrientation
 * @property {"auto"} auto
 * @property {"vertical"} vertical
 * @property {"horizontal"} horizontal
 * @memberOf Panel1
 */
export declare enum SplitterOrientation {
    auto = "auto",
    vertical = "vertical",
    horizontal = "horizontal"
}
/**
 * Panel1 properties
 * @typedef {AgentDesktopView.AgentDesktopViewChildrenProps} Panel1.AgentDesktopPanel1Props
 * @property {Panel1.SplitterOrientation} [splitterOrientation] Orientation of splitter component
 * @property {DynamicComponentChildren<Panel1.AgentDesktopPanel1Props>} [children] - children
 */
export interface AgentDesktopPanel1Props extends AgentDesktopViewChildrenProps {
    splitterOrientation?: SplitterOrientation;
}
/**
 * @classdesc First panel of AgentDesktopView
 * @class Panel1
 * @component
 * @hideconstructor
 * @param {Panel1.AgentDesktopPanel1Props} props - props
 * @category Components / Programmable
 */
export declare class Panel1 extends React.Component<AgentDesktopPanel1Props> {
    private container;
    private static readonly friendlyName;
    static readonly displayName = "AgentDesktopView.Panel1";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<Panel1.AgentDesktopPanel1Props>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {Panel1.AgentDesktopPanel1Props}
     * @readonly
     */
    static readonly defaultProps: Partial<AgentDesktopPanel1Props>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleResize;
    private handleParentSplitterChange;
    render(): JSX.Element;
    private makeInnerRef;
    private handleTaskSelected;
}
