/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { TaskContextProps } from "../../context";
import { ThemeProps } from "../../theme";
import { TaskCanvasTabs } from "./TaskCanvasTabs";
import { TaskCanvasHeader } from "./TaskCanvasHeader";
import { TaskCanvasImpl } from "./TaskCanvasImpl";
import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of task canvas theme.
 * @typedef TaskCanvasThemeProps
 * @property {CSSProps} HeaderButton - Styles header button of the panel.
 * @property {CSSProps} Container - Styles task canvas container.
 * @property {CSSProps} MonitorActiveButton - Styles active monitoring button.
 * @property {CSSProps} Button - Styles all other buttons.
 * @property {CSSProps} Header - Styles task canvas panel header.
 * @memberof Supervisor․TaskCanvas
 */
export interface TaskCanvasThemeProps {
    HeaderButton: CSSProps;
    Container: CSSProps;
    MonitorActiveButton: CSSProps;
    Button: CSSProps;
    Header: CSSProps;
}
/**
 * Properties of children in task canvas.
 * @typedef {TaskContextProps} TaskCanvasChildrenProps
 * @property { Supervisor.TaskCanvas.TaskCanvasThemeProps } [theme.Supervisor.TaskCanvas] - theme.
 * @memberof Supervisor․TaskCanvas
 */
export interface TaskCanvasChildrenProps extends TaskContextProps, ThemeProps {
}
/**
 * @alias Supervisor․TaskCanvas
 * @classdesc This is a container for Supervisor.TaskCanvas
 * Can be themed with [theme.Supervisor.TaskCanvas]
 * @component
 * @hideconstructor
 * @param {TaskContextSource.TaskContextProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskCanvas extends React.PureComponent<TaskContextProps & ThemeProps> {
    static readonly displayName = "TaskCanvas";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskContextSource.TaskContextProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Header
     *
     * @static
     * @type {Supervisor.TaskCanvasHeader}
     * @readonly
     */
    static readonly Header: typeof TaskCanvasHeader;
    /**
     * Tabs
     *
     * @static
     * @type {Supervisor.TaskCanvasTabs}
     * @readonly
     */
    static readonly Tabs: typeof TaskCanvasTabs;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<TaskContextProps & ThemeProps, "theme">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<TaskContextProps & ThemeProps, "theme">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<TaskContextProps & ThemeProps, "theme">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TaskContextProps & ThemeProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TaskCanvasImpl, {}>;
