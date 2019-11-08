import * as React from "react";
import { TaskCanvasHeader } from "../TaskCanvasHeader/TaskCanvasHeader";
import { TaskCanvasTabs } from "../TaskCanvasTabs/TaskCanvasTabs";
/**
 * @classdesc This component renders the task canvas.
 * Can be themed with [theme.TaskCanvas]{@link TaskCanvas.TaskCanvasThemeProps}
 * @component
 * @hideconstructor
 * @category Components / Programmable
 */
export declare class TaskCanvas extends React.PureComponent {
    static readonly displayName = "TaskCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<TaskCanvas.TaskCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Task header component
     * @static
     * @type {TaskCanvasHeader}
     * @readonly
     */
    static readonly Header: typeof TaskCanvasHeader;
    /**
     * Task canvas tabs component
     * @static
     * @type {TaskCanvasTabs}
     * @readonly
     */
    static readonly Tabs: typeof TaskCanvasTabs;
    render(): JSX.Element;
}
