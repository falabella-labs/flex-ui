import * as React from "react";
import { ViewAdditionalProps } from "../../ViewCollection";
import { DynamicContentStore, ContentFragment } from "@twilio/frame-ui";
import { FlexContextType } from "../../../core/ContextProvider";
export declare const displayName = "QueuesStatsView";
export declare const Content: DynamicContentStore;
export interface QueuesStatsViewImplStateProps {
    isLoading: boolean;
    hasNoData: boolean;
    error?: Error;
}
export declare type QueuesStatsViewImplOwnProps = ViewAdditionalProps & {
    context?: FlexContextType;
    children?: React.ReactElement<ContentFragment>;
};
export declare type QueuesStatsViewImplProps = QueuesStatsViewImplStateProps & QueuesStatsViewImplOwnProps;
export declare class QueuesStatsViewImpl extends React.PureComponent<QueuesStatsViewImplProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private isAdmin;
}
