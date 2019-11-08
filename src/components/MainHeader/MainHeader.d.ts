import * as React from "react";
import { PropsWithTheme } from "../theme";
import { MainHeaderProps } from "./MainHeader.definitions";
export * from "./MainHeader.Components";
/**
 * @classdesc This is a container for MainHeader.
 * Can be themed with [theme.MainHeader]
 * @component
 * @hideconstructor
 * @param {MainHeader.MainHeaderProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class MainHeader extends React.PureComponent<PropsWithTheme<Partial<MainHeaderProps>>> {
    private static getBadgeChildren;
    static readonly displayName = "MainHeader";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<MainHeader.MainHeaderChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {MainHeader.MainHeaderProps}
     * @readonly
     */
    static readonly defaultProps: Partial<MainHeaderProps>;
    static updateAll(): void;
    render(): JSX.Element;
}
