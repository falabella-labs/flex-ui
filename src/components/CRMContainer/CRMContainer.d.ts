/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { TaskContextProps } from "../context";
import { ITask } from "../../models";
import { CRMContainerImpl } from "./CRMContainerImpl";
export * from "./CRMContainer.Components";
/**
 * Properties of CRMContainer.
 * @typedef CRMContainer.CRMContainerProps
 * @property {Function} [uriCallback=undefined] - A callback that returns an URI to be displayed in CRM container based on a selected task.
 * @property {string} [uri=undefined] - URI that is displayed in CRM container.
 * @property {DynamicComponentChildren<CRMContainer.CRMContainerChildrenProps>} [children] - children
 */
export interface CRMContainerProps {
    uriCallback?: (task: ITask) => string;
    uri?: string;
}
/**
 * Properties of CRMContainer.
 * @typedef {CRMContainer.CRMContainerProps} CRMContainer.CRMContainerChildrenProps
 */
export interface CRMContainerChildrenProps extends TaskContextProps, CRMContainerProps {
}
/**
 * @classdesc This is a container for the CRM integration.
 * Can be themed with [theme.CRMContainer]
 * @component
 * @hideconstructor
 * @param {CRMContainer.CRMContainerProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class CRMContainer extends React.PureComponent<CRMContainerProps> {
    static readonly displayName = "CRMContainer";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<CRMContainer.CRMContainerChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {CRMContainer.CRMContainerProps}
     * @readonly
     */
    static readonly defaultProps: Partial<CRMContainerProps>;
    static updateAll(): void;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<CRMContainerChildrenProps, "uriCallback" | "uri">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<CRMContainerChildrenProps, "uriCallback" | "uri">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CRMContainerImpl, {}>;
