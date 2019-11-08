import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskContextProps } from "../../context";
import { ThemeProps } from "../../theme";
/**
 * Properties of TaskOverviewCanvas.
 * @typedef TaskOverviewCanvasProps
 * @property {string} [firstLine] - First line shown in task overview.
 * @property {string} [secondLine] - Second line shown in task overview.
 * @property {DynamicComponentChildren<TaskDetailsPanel.TaskDetailsPanelProps>} [children] - children
 * @memberOf Supervisor․TaskOverviewCanvas
 */
export interface TaskOverviewCanvasProps extends TaskContextProps {
    firstLine?: string;
    secondLine?: string;
}
/**
 * @class Supervisor․TaskOverviewCanvas
 * @classdesc This is a container for TaskOverviewCanvas.
 * @component
 * @hideconstructor
 * @param {Supervisor.TaskOverviewCanvas.TaskOverviewCanvasProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskOverviewCanvas extends React.PureComponent<TaskOverviewCanvasProps & ThemeProps> {
    static readonly friendlyName = "TaskOverviewCanvas";
    static readonly displayName = "TaskOverviewCanvas";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskDetailsPanel.TaskDetailsPanelProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
