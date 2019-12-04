/// <reference types="react-redux" />
import * as React from "react";
import IdentityClient from "@twilio/flex-insights-identity-client-js";
import { InsightsServiceStatus } from "../../core/Insights/InsightsService.definitions";
interface InsightsControllerRenderProps {
    status: InsightsServiceStatus;
    client: IdentityClient;
}
interface OwnProps {
    children: (InsightsControllerRenderProps: InsightsControllerRenderProps) => React.ReactNode;
}
interface StateProps {
    status: InsightsServiceStatus;
}
declare type InsightsControllerProps = StateProps & OwnProps;
export declare class InsightsControllerComponent extends React.PureComponent<InsightsControllerProps> {
    render(): React.ReactNode;
}
export declare const InsightsController: React.ComponentClass<Pick<InsightsControllerProps, "children"> & OwnProps, any> & {
    WrappedComponent: React.ComponentType<InsightsControllerProps>;
};
export {};
