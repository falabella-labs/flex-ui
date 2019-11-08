/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { TaskListItemChildrenProps } from "../TaskListItem";
import { TaskListBaseItemImpl } from "./TaskListBaseItemImpl";
export * from "./TaskListBaseItem.Components";
export declare class TaskListBaseItem extends React.PureComponent<TaskListItemChildrenProps> {
    static readonly displayName = "TaskListBaseItem";
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TaskListItemChildrenProps, "visible" | "large" | "icon" | "selected" | "actions" | "firstLine" | "secondLine" | "Badge" | "selectedTaskSid" | "onSelected" | "iconColor" | "extraInfo" | "itemSize">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TaskListBaseItemImpl, {}>;
