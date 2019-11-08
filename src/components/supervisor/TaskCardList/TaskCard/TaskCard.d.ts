/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { TaskCardImpl } from "./TaskCardImpl";
import { TaskCardProps } from "./TaskCard.definition";
/**
 * @class Supervisor․TaskCard
 * @classdesc This is a container for TaskCard.
 * Can be themed with [theme.TaskCard]
 * @component
 * @hideconstructor
 * @param {TaskCard.TaskCardProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskCard extends React.PureComponent<TaskCardProps> {
    static displayName: string;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskCard.TaskCardChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCard.definition").TaskCardChildrenProps & import("../../..").ThemeProps, "icon" | "theme" | "onClick" | "selected" | "firstLine" | "secondLine" | "highlighted">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TaskCardImpl, {}>;
