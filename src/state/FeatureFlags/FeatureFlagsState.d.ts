import { Dispatch } from "redux";
import { Feature, FeatureDict, FeatureFlagsAction, FeatureOverrideDict } from "../../models/FeatureFlagsModel";
export declare type FeatureFlagsState = {
    features: FeatureDict;
    localOverrides: FeatureOverrideDict;
};
export declare const initialState: FeatureFlagsState;
export declare function reduce(state: FeatureFlagsState, action: FeatureFlagsAction): FeatureFlagsState;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static setFeatures(payload: Feature[]): void;
    static setFeatureOverrides(payload: FeatureOverrideDict): void;
    static overrideFeatureFlag(payload: Partial<Feature>): void;
}
