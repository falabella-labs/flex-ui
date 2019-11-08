/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { ParticipantsCanvasImpl } from "./ParticipantsCanvasImpl";
import { ParticipantsCanvasProps } from "./ParticipantsCanvas.definitions";
/**
 * @classdesc This component renders a collection of participants.
 * Can be themed with [theme.ParticipantsCanvas]{@link ParticipantsCanvas.ParticipantsCanvasThemeProps}
 * @component
 * @hideconstructor
 * @param {ParticipantsCanvas.ParticipantsCanvasProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class ParticipantsCanvas extends React.PureComponent<ParticipantsCanvasProps> {
    static readonly displayName = "ParticipantsCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<ParticipantsCanvas.ParticipantsCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./ParticipantsCanvas.definitions").ParticipantsCanvasChildrenProps, "theme" | "hideActions" | "includeMyself">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ParticipantsCanvasImpl, {}>;
