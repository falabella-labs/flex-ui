import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskInfoPanelProps } from "./TaskInfoPanel.definitions";
/**
 * @class TaskInfoPanel
 * @classdesc This component renders task info panel.
 * Can be themed with [theme.TaskInfoPanel]{@link TaskInfoPanel.TaskInfoPanelThemeProps}
 * @component
 * @hideconstructor
 * @param {TaskInfoPanel.TaskInfoPanelProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskInfoPanel extends React.PureComponent<TaskInfoPanelProps> {
    static displayName: string;
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<TaskInfoPanel.TaskInfoPanelChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {TaskInfoPanel.TaskInfoPanelProps}
     * @readonly
     */
    static readonly defaultProps: TaskInfoPanelProps;
    render(): JSX.Element;
}
