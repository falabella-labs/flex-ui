/// <reference types="react-redux" />
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { RouteProps } from "react-router";
import { RouterState } from "react-router-redux";
/**
 * Properties of ViewCollection.
 * @typedef ViewCollection.ViewCollectionProps
 * @property {string} [defaultLocation=/agent-desktop] - Default URL location of view
 * @property {DynamicComponentChildren<ViewCollection.ViewCollectionChildrenProps>} [children] - children
 */
export interface ViewCollectionProps {
    defaultLocation?: string;
}
/**
 * Properties of ViewCollection.
 * @typedef {ViewCollection.ViewCollectionProps} ViewCollection.ViewCollectionChildrenProps
 * @property {RouterState} router - Router.
 */
export interface ViewCollectionChildrenProps extends ViewCollectionProps {
    router: RouterState;
}
/**
 * Additional properties of ViewCollection.
 * @typedef ViewCollection.ViewAdditionalProps
 * @property {boolean} [isViewActive] - Whether the view is active or not
 * @property {RouteProps} [route] - View route
 */
export interface ViewAdditionalProps {
    isViewActive?: boolean;
    route?: RouteProps;
}
/**
 * @classdesc This is a container for ViewCollection.
 * @component
 * @hideconstructor
 * @param {ViewCollection.ViewCollectionProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class ViewCollection extends React.PureComponent<ViewCollectionProps> {
    static readonly displayName = "ViewCollection";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<ViewCollection.ViewCollectionChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    static updateAll(): void;
    /**
     * Default properties
     *
     * @static
     * @type {ViewCollection.ViewCollectionProps}
     * @readonly
     */
    static readonly defaultProps: ViewCollectionProps;
    render(): JSX.Element;
}
export declare const Connected: React.ComponentClass<Pick<ViewCollectionChildrenProps, never>, any> & {
    WrappedComponent: React.ComponentType<ViewCollectionChildrenProps>;
};
