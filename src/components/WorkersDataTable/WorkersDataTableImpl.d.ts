import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { WorkerListFilter, WorkersDataTableChildrenProps } from "./WorkersDataTable";
interface WorkersDataTableImplState {
    activeFilter: WorkerListFilter;
}
export declare const displayName = "WorkersDataTable";
export declare const contentStore: DynamicContentStore;
export declare const IncludeAllFilter: WorkerListFilter;
export declare class WorkersDataTableImpl extends React.Component<WorkersDataTableChildrenProps, WorkersDataTableImplState> {
    static defaultProps: Partial<WorkersDataTableChildrenProps>;
    state: WorkersDataTableImplState;
    componentWillUnmount(): void;
    onUpdate: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
    private getItemWorkerSid;
    private renderUserCard;
    private renderTaskCardListForOthers;
    private renderTaskCardListForCall;
    private callsFilter;
    private tasksFilter;
    private onFilterChanged;
    private handleRowClick;
}
export {};
