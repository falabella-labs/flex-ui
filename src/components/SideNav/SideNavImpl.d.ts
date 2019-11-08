import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { SideNavChildrenProps } from "./SideNav";
export declare const displayName = "SideNav";
export declare const contentStore: DynamicContentStore;
export declare class SideNavImpl extends React.PureComponent<SideNavChildrenProps> {
    static displayName: string;
    doNavigate: (page: string) => () => void;
    showSupervisor: (context: any) => boolean;
    render(): JSX.Element;
}
