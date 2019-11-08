import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ITask } from "../../../models";
/**
 * Properties of TaskCardList.
 * @typedef TaskCardList.TaskCardListProps
 * @property {Function} [compareFunction] - Callback to control how tasks should be sorted in task list. Negative number means task a should be above task b, positive number that a should be below b. 0 indicates equal priority.
 * @property {Function} [filter] - Callback to test if task belongs to this filter.
 * @property {Function} [onCardSelected] - Callback called when card is selected.
 * @property {string} [selectedTaskSid] - Sid of the selected task.
 * @property {string} [highlightedTaskSid] - Sid of the highlighted task.
 * @property {Array<ITask>} tasks - Tasks in the list.
 * @property {DynamicComponentChildren<TaskCardList.TaskCardListProps>} [children] - children
 * @memberOf Supervisor․TaskCardList
 */
export interface TaskCardListProps {
    compareFunction?: (a: ITask, b: ITask) => number;
    filter?: (task: ITask) => boolean;
    onCardSelected?: (task: ITask) => void;
    selectedTaskSid?: string;
    highlightedTaskSid?: string;
    tasks: Array<ITask>;
}
/**
 * @alias Supervisor․TaskCardList
 * @classdesc This is a container for TaskCardList.
 * @component
 * @hideconstructor
 * @param {TaskCardList.TaskCardListProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskCardList extends React.Component<TaskCardListProps> {
    static displayName: string;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskCardList.TaskCardListProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {TaskCardList.TaskCardListProps}
     * @readonly
     */
    static readonly defaultProps: {
        compareFunction: (a: ITask, b: ITask) => number;
    };
    render(): JSX.Element;
}
