import { ThemeProps } from "../theme";
import * as React from "react";
import * as AppConfig from "../../state/AppConfig";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ITask } from "../../models";
import { TaskListProps, TaskListState } from "./TaskList";
export declare const displayName = "TaskList";
export declare const contentStore: DynamicContentStore;
export declare const TaskListContext: React.Context<TaskListState>;
export declare class TaskListImpl extends React.PureComponent<Partial<TaskListProps> & ThemeProps, TaskListState> {
    constructor(props: TaskListProps);
    static getDerivedStateFromProps(nextProps: TaskListProps, prevState: TaskListState): {
        selectedTaskSid?: string;
        compareFunction?: (a: ITask, b: ITask) => number;
        staticFilter?: AppConfig.TaskFilterCallback;
        filters?: AppConfig.TaskFilter[];
        onFilterChange?: (filter: AppConfig.TaskFilter) => void;
        onTaskSelected?: (sid: string) => void;
        tasks?: Map<string, ITask>;
        selectedFilter?: AppConfig.TaskFilter;
    };
    private _isFilterChanging;
    private handleFilterChange;
    render(): JSX.Element;
    private createTaskListItem;
}
