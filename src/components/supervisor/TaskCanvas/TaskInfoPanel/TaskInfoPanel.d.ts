import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskInfoPanelProps } from "../../../canvas/TaskInfoPanel";
/**
 * @class Supervisor․TaskInfoPanel
 * @classdesc This is a container for Supervisor.TaskInfoPanel.
 * @component
 * @hideconstructor
 * @param {TaskInfoPanel.TaskInfoPanelProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskInfoPanel extends React.PureComponent<TaskInfoPanelProps> {
    static readonly displayName = "SupervisorTaskInfoPanel";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskInfoPanel.TaskInfoPanelChildrenProps>}
     * @readonly
     */
    static Content: DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {TaskInfoPanel.TaskInfoPanelProps}
     * @readonly
     */
    static readonly defaultProps: Partial<TaskInfoPanelProps>;
    render(): JSX.Element;
}
