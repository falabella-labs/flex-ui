import * as React from "react";
import { TaskCanvasTabsProps } from "./TaskCanvasTabs.definitions";
/**
 * @class TaskCanvasTabs
 * @classdesc This component renders the task canvas tabs.
 * @component
 * @hideconstructor
 * @param {TaskCanvasTabs.TaskCanvasTabsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskCanvasTabs extends React.PureComponent<TaskCanvasTabsProps> {
    static displayName: string;
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<TaskCanvasTabs.TaskCanvasTabsChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
