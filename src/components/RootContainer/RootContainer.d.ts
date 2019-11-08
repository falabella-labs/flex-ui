import * as React from "react";
/**
 * @classdesc This is a container for RootContainer.
 * Can be themed with [theme.RootContainer]
 * @component
 * @hideconstructor
 * @category Components / Programmable
 */
export declare class RootContainer extends React.PureComponent {
    private static readonly friendlyName;
    static readonly displayName = "RootContainer";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<RootContainer.RootContainerChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
