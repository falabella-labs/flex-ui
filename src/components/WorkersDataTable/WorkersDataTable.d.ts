/// <reference types="react-redux" />
import * as React from "react";
import { ITask, IWorker } from "../../models/CommonModels";
import { AppState } from "../../state";
import { SupervisorWorkerState } from "../../state/State.definition";
import { ActiveFilters } from "../../state/ViewState";
export interface WorkerListFilter {
    text?: string;
    query: string;
}
export declare type WorkerListFilterFactory = (storeState: AppState, ownProps: WorkersDataTableProps) => WorkerListFilter;
/**
 * Function used to sort rows in WorkersDataTable
 * @typedef WorkersDataTable.WorkersDataTableCompareFunction
 * @param a {IWorker} properties of worker A
 * @param b {IWorker} properties of worker B
 * @param tasksA {ITask[]} array of tasks from worker A
 * @param tasksB {ITask[]} array of tasks from worker B
 * @return number
 */
declare type WorkersDataTableCompareFunction = (a: IWorker, b: IWorker, tasksA: Array<ITask>, tasksB: Array<ITask>) => number;
/**
 * Properties of WorkersDataTable.
 * @typedef WorkersDataTable.WorkersDataTableProps
 * @property {React.ReactNode} [tablePlaceHolder=undefined] - A React element that is displayed when table of workers is empty.
 * @property {Function} [initialCompareFunction=WorkersDataTable.defaultCompareFunction] - Determines workers order in the table.
 * @property {Array<WorkersDataTable.WorkerListFilter | WorkersDataTable.WorkerListFilterFactory>} [filters=WorkersDataTable.defaultFilters] - Filters workers displayed in the table.
 * @property {string} [taskFilter=WorkersDataTable.taskFilter] - An expression used to filter out workers tasks.
 * @property {ITask} [selectedTask] - Selected task in the table.
 * @property {IWorker} [selectedWorker] - Selected worker in the table.
 * @property {string} [monitoredTaskSid] - Sid of the monitored task.
 * @property {Function} [onTaskSelected] - Callback called when a task is selected from the table.
 * @property {Function} [onWorkerSelected] - Callback called when a worker is selected from the table.
 * @property {Array<SupervisorState.SupervisorWorkerState>} [workers] - List of workers.
 * @property {DynamicComponentChildren<WorkersDataTable.WorkersDataTableChildrenProps>} [children] - children
 */
export interface WorkersDataTableProps {
    tablePlaceHolder?: React.ReactNode;
    initialCompareFunction?: WorkersDataTableCompareFunction;
    filters?: Array<WorkerListFilter | WorkerListFilterFactory>;
    taskFilter?: string;
    selectedTask?: ITask;
    selectedWorker?: IWorker;
    monitoredTaskSid?: string;
    onTaskSelected?: (task: ITask) => void;
    onWorkerSelected?: (task: IWorker) => void;
    workers?: Array<SupervisorWorkerState>;
    filtersEnabled?: boolean;
    appliedFilters?: ActiveFilters;
}
export declare const defaultCompareFunction: (a: IWorker<any>, b: IWorker<any>) => number;
/**
 * @class WorkersDataTable
 * @classdesc This is a container for WorkersDataTable.
 * @component
 * @hideconstructor
 * @param {WorkersDataTable.WorkersDataTableProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkersDataTable extends React.PureComponent<WorkersDataTableProps> {
    static readonly displayName = "WorkersDataTable";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkersDataTable.WorkersDataTableChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static readonly IncludeAllFilter: WorkerListFilter;
    static readonly IncludeActiveWorkersFilter: WorkerListFilterFactory;
    static readonly defaultFilters: (WorkerListFilter | WorkerListFilterFactory)[];
    static readonly taskFilter = "data.status not_in [\"completed\", \"canceled\", \"rescinded\", \"rejected\", \"timeout\"]";
    /**
     * Default properties
     *
     * @static
     * @type {WorkersDataTable.WorkersDataTableProps}
     * @readonly
     */
    static readonly defaultProps: Partial<WorkersDataTableProps>;
    static updateAll(): void;
    render(): JSX.Element;
}
/**
 * Properties of WorkersDataTable.
 * @typedef {WorkersDataTable.WorkersDataTableProps} WorkersDataTable.WorkersDataTableChildrenProps
 * @property {Array<WorkersDataTable.WorkerListFilter>} [filters] - Filters workers displayed in the table.
 */
export interface WorkersDataTableChildrenProps extends WorkersDataTableProps {
    filters?: Array<WorkerListFilter>;
}
/**
 * ColumnDataCreationContext.
 * @typedef {object} WorkersDataTable.ColumnDataCreationContext
 * @property {Function} [onTaskSelected] - Callback called when a task is selected.
 * @property {ITask} [selectedTask] - Selected task.
 * @property {string} [monitoredTaskSid] - Sid of the monitored task.
 */
export interface ColumnDataCreationContext {
    onTaskSelected?: (task: ITask) => void;
    selectedTask?: ITask;
    monitoredTaskSid?: string;
}
export declare const ConnectedWorkersDataTableImpl: React.ComponentClass<Pick<WorkersDataTableChildrenProps, never> & WorkersDataTableProps, any> & {
    WrappedComponent: React.ComponentType<WorkersDataTableChildrenProps>;
};
export {};
