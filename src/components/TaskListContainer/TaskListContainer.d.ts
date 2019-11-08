import * as React from "react";
import { TaskFilter, TaskFilterCallback } from "../../state/AppConfig";
import { ITask } from "../../models";
/**
 * Properties of TaskListContainer.
 * @typedef {TaskListContainer.TaskListContainerProps} TaskListContainer.TaskListContainerChildrenProps
 */
export interface TaskListContainerChildrenProps extends TaskListContainerProps {
}
/**
 * Properties of TaskListContainer.
 * @typedef TaskListContainer.TaskListContainerProps
 * @property {Map<string, ITask>} [tasks] - Tasks to display.
 * @property {string} [selectedTaskSid] - Sid of the selected task.
 * @property {Array<AppConfig.TaskFilter>} [taskFilters=TaskListContainer.defaultTaskFilters] - Filter tasks displayed in the list.
 * @property {AppConfig.TaskFilterCallback} [staticTaskFilter=TaskListContainer.defaultStaticTaskFilter] - Callback to test if a task belongs to the static area (upper area before filters) in the task list.
 * @property {Function} [onTaskSelected] - Callback called when a task is selected
 * @property {DynamicComponentChildren<TaskListContainer.TaskListContainerChildrenProps>} [children] - children
 */
export interface TaskListContainerProps {
    tasks?: Map<string, ITask>;
    selectedTaskSid?: string;
    taskFilters?: Array<TaskFilter>;
    staticTaskFilter?: TaskFilterCallback;
    onTaskSelected?: (sid: string) => void;
}
/**
 * @classdesc This is a container for TaskListContainer.
 * @component
 * @hideconstructor
 * @param {TaskListContainer.TaskListContainerProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskListContainer extends React.PureComponent<TaskListContainerProps> {
    static readonly displayName = "TaskListsContainer";
    static readonly defaultTaskFilters: {
        text: string;
        callback: (task: ITask) => boolean;
    }[];
    static readonly defaultStaticTaskFilter: (task: ITask) => boolean;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskListContainer.TaskListContainerChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {TaskListContainer.TaskListContainerProps}
     * @readonly
     */
    static readonly defaultProps: {
        taskFilters: {
            text: string;
            callback: (task: ITask) => boolean;
        }[];
        staticTaskFilter: (task: ITask) => boolean;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
