import * as React from "react";
import { TaskCanvasChildrenProps } from "../TaskCanvas";
/**
 * Properties of children in task canvas tabs.
 * @typedef {TaskCanvasTabs.TaskCanvasChildrenProps} TaskCanvasTabsChildrenProps
 * @property {string} [selectedTabName] - Selected tab name.
 * @property {boolean} [hasMarkdownSupport] - Whether markdown feature is enabled or not
 * @memberof Supervisor․TaskCanvasTabs
 */
export interface TaskCanvasTabsChildrenProps extends TaskCanvasChildrenProps {
    selectedTabName?: string;
    hasMarkdownSupport?: boolean;
    uniqueName?: string;
}
/**
 * Properties of task canvas tabs component.
 * @typedef TaskCanvasTabs.TaskCanvasTabsProps
 * @memberof Supervisor․TaskCanvasTabs
 */
export interface TaskCanvasTabsProps {
}
/**
 * @alias Supervisor․TaskCanvasTabs
 * @classdesc This is a container for Supervisor.TaskCanvasTabs.
 * @component
 * @hideconstructor
 * @param {TaskCanvasTabs.TaskCanvasTabsProps} props - Properties to be passed to configure this component.
 * @memberof Supervisor
 * @category Components / Programmable
 */
export declare class TaskCanvasTabs extends React.PureComponent<TaskCanvasTabsProps> {
    static readonly displayName = "SupervisorTaskCanvasTabs";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskCanvasTabs.TaskCanvasTabsChildrenProps>}
     * @readonly
     */
    static Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
