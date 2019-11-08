/// <reference types="react" />
import { ITask } from "../../../../models";
import { TaskContextProps } from "../../../context";
/**
 * Properties of TaskCardProps.
 * @typedef TaskCardProps
 * @property {string | React.ReactNode} [icon] - Task Card icon.
 * @property {React.ReactChild} [firstLine] - Task Card first line.
 * @property {React.ReactChild} [secondLine] - Task Card second line.
 * @property {Function} [onClick] - Callback called when task is selected.
 * @property {boolean} [highlighted] - Whether the task card is highlighted or no.
 * @property {boolean} [selected] - Whether the task card is selected or no.
 * @property {DynamicComponentChildren<TaskCard.TaskCardChildrenProps>} [children] - children
 * @memberOf Supervisor․TaskCard
 */
export interface TaskCardProps {
    icon?: string | React.ReactNode;
    firstLine?: React.ReactChild;
    secondLine?: React.ReactChild;
    onClick?: (task: ITask) => void;
    highlighted?: boolean;
    selected?: boolean;
}
/**
 * Properties of TaskCard.
 * @typedef {TaskCard.TaskCardProps} TaskCardChildrenProps
 * @memberOf Supervisor․TaskCard
 */
export interface TaskCardChildrenProps extends TaskCardProps, TaskContextProps {
}
