/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { TaskCanvasHeaderImpl } from "./TaskCanvasHeaderImpl";
/**
 * @alias Supervisor․TaskCanvasHeader
 * @classdesc This is a container for Supervisor.TaskCanvasHeader.
 * @component
 * @hideconstructor
 * @memberof Supervisor
 * @category Components / Programmable
 */
export declare class TaskCanvasHeader extends React.PureComponent {
    static readonly displayName = "SupervisorTaskCanvasHeader";
    static Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("../../..").ThemeProps & import("../../../context").TaskContextProps, "theme">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TaskCanvasHeaderImpl, {}>;
