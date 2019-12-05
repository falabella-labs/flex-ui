/// <reference types="react-redux" />
import * as React from "react";
import { FeatureFlag, Feature } from "../models/FeatureFlagsModel";
interface OwnProps {
    children: React.ReactElement;
    id: FeatureFlag;
    disabledComponent?: React.ReactElement;
}
interface StateProps {
    feature?: Feature;
}
declare type FeatureFlagGuardProps = OwnProps & StateProps;
export declare class FeatureFlagGuardComponent extends React.Component<FeatureFlagGuardProps> {
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
}
export declare const FeatureFlagGuard: React.ComponentClass<Pick<FeatureFlagGuardProps, "children" | "id" | "disabledComponent"> & OwnProps, any> & {
    WrappedComponent: React.ComponentType<FeatureFlagGuardProps>;
};
export {};
