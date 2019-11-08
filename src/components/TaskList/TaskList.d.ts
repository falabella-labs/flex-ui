import * as React from "react";
import * as AppConfig from "../../state/AppConfig";
import { ITask } from "../../models";
export { TaskListContext } from "./TaskListImpl";
/**
 * Properties of TaskList.
 * @typedef TaskList.TaskListProps
 * @property {string} [selectedTaskSid] - Sid of the selected task.
 * @property {Function} [compareFunction=defaultTaskOrderCompare] - Callback to control how tasks should be sorted in task list. Negative number means task a should be above task b, positive number that a should be below b. 0 indicates equal priority.
 * @property {AppConfig.TaskFilterCallback} [staticFilter] - Callback to test if a task belongs to the static area (upper area before filters) in the task list.
 * @property {Array<AppConfig.TaskFilter>} [filters] - Filter tasks displayed in the list.
 * @property {Function} [onFilterChange] - Callback when a filter changes.
 * @property {Function} [onTaskSelected] - Callback when a task is selected from the list.
 * @property {Map<string, ITask>} [tasks] - Tasks.
 * @property {DynamicComponentChildren<TaskList.TaskListProps>} [children] - children
 */
export interface TaskListProps {
    selectedTaskSid?: string;
    compareFunction?: (a: ITask, b: ITask) => number;
    staticFilter?: AppConfig.TaskFilterCallback;
    filters?: Array<AppConfig.TaskFilter>;
    onFilterChange?: (filter: AppConfig.TaskFilter) => void;
    onTaskSelected?: (sid: string) => void;
    tasks?: Map<string, ITask>;
}
export interface TaskListState extends TaskListProps {
    selectedFilter?: AppConfig.TaskFilter;
}
/**
 * @classdesc This is a container for TaskList.
 * @component
 * @hideconstructor
 * @param {TaskList.TaskListProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskList extends React.PureComponent<TaskListProps> {
    static readonly displayName = "TaskList";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskList.TaskListProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static readonly IncludeAllFilter: AppConfig.TaskFilter;
    /**
     * Default properties
     *
     * @static
     * @type {TaskList.TaskListProps}
     * @readonly
     */
    static readonly defaultProps: {
        compareFunction: (a: ITask, b: ITask) => number;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
