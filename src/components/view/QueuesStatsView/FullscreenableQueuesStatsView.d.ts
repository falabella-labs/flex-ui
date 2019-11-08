/// <reference types="react" />
/// <reference types="create-emotion" />
/// <reference types="hoist-non-react-statics" />
import { QueuesStatsViewComponent } from "./QueuesStatsView";
export declare const FullscreenableQueuesStatsView: {
    new (props: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./QueuesStatsViewImpl").QueuesStatsViewImplOwnProps, "children" | "context" | "route">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    fullscreen: Partial<import("../../fullscreen").FullscreenConfig>;
    contextType?: import("react").Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof QueuesStatsViewComponent, {}>;
