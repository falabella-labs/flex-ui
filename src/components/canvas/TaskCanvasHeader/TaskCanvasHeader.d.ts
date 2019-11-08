/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskCanvasHeaderImpl } from "./TaskCanvasHeaderImpl";
import { TaskCanvasHeaderProps } from "./TaskCanvasHeader.definitions";
/**
 * @class TaskCanvasHeader
 * @classdesc This component renders the header of task canvas.
 * Can be themed with [theme.TaskCanvasHeader]{@link TaskCanvasHeader.TaskCanvasHeaderThemeProps}
 * @component
 * @hideconstructor
 * @param {TaskCanvasHeader.TaskCanvasHeaderProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskCanvasHeader extends React.PureComponent<TaskCanvasHeaderProps> {
    static readonly displayName = "TaskCanvasHeader";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<TaskCanvasHeader.TaskCanvasHeaderChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {TaskCanvasHeader.TaskCanvasHeaderProps}
     * @readonly
     */
    static readonly defaultProps: Partial<TaskCanvasHeaderProps>;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./TaskCanvasHeader.definitions").TaskCanvasHeaderChildrenProps, "content" | "icon" | "theme" | "ActionsComponent" | "titleTemplateCode" | "titleTemplateContext" | "secondLineTemplateCode" | "secondLineTemplateContext" | "titleTemplate" | "secondLineTemplate">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TaskCanvasHeaderImpl, {}>;
