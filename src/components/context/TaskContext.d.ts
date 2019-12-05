import * as React from "react";
import * as hoistNonReactStatics from "hoist-non-react-statics";
import { ITask } from "../../models";
import { PhoneCallState } from "../../state/PhoneState";
import { ChatChannelState } from "@twilio/frame-ui";
import { TaskChannelDefinition } from "../../TaskChannelDefinition";
import { ConferenceState } from "../../state/ConferencesState";
/**
 * Task Context interface
 * @typedef {object} TaskContextProps
 * @property {ITask} [task] - Task.
 * @property {PhoneCallState} [call] - Call state of the task.
 * @property {ConferenceState} [conference] - Conference state of the task.
 * @property {ChatChannelState.ChannelState} [chatChannel] - Chat channel state of the task.
 * @property {TaskChannelDefinition} [channelDefinition] - Channel definition of the task.
 * @memberof TaskContext
 */
export interface TaskContextProps {
    task?: ITask;
    call?: PhoneCallState;
    conference?: ConferenceState;
    chatChannel?: ChatChannelState.ChannelState;
    channelDefinition?: TaskChannelDefinition;
}
/**
 * Task Context
 *
 * @class TaskContext
 * @category Framework / Context
 * @hideconstructor
 * @param {TaskContext.TaskContextProps} props
 * @example
 * import { TaskContext } from "@twilio/flex-ui";
 * <TaskContext.Consumer>
 *  {(context) => (
 *   <MyComponent
 *     task={context.task}
 *     call={context.call}
 *   />
 *  )}
 * </TaskContext.Consumer>
 *
 */
export declare const TaskContext: React.Context<TaskContextProps>;
/**
 * Task Context Provider props interface
 * @typedef {object} TaskContextProviderProps
 * @property {string} taskSid - Sid of the task
 * @memberof TaskContextSource
 */
export interface TaskContextProviderProps {
    taskSid: string;
}
/**
 * @class TaskContextSource
 * @classdesc Task Context Source component
 * @component
 * @hideconstructor
 * @param {TaskContextSource.TaskContextProviderProps} props properties to be passed to configure this component.
 * @category Framework
 * @private
 */
export declare class TaskContextSource extends React.PureComponent<TaskContextProviderProps & TaskContextProps> {
    render(): JSX.Element;
}
export declare function withTaskContext<P, C extends React.ComponentType<P>>(Component: C): {
    new (props: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, "call" | "task" | "conference" | "chatChannel" | "channelDefinition">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & hoistNonReactStatics.NonReactStatics<C, {}>;
