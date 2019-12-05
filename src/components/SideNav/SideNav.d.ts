import * as React from "react";
import { SideLinkAgentDesktop } from "./SideLinkAgentDesktop";
import { SideLinkTeams } from "./SideLinkTeams";
import { SideLinkQueuesStats } from "./SideLinkQueuesStats";
/**
 * Properties of SideNav.
 * @typedef SideNav.SideNavProps
 * @property {boolean} [reserveSpace] - Whether the SideNav is shown in compact mode.
 * @property {DynamicComponentChildren<SideNav.SideNavChildrenProps>} [children] - children
 */
export interface SideNavProps {
    reserveSpace?: boolean;
}
/**
 * Properties of SideNav.
 * @typedef {SideNav.SideNavProps} SideNav.SideNavChildrenProps
 * @property {boolean} [incomingTasks] - Whether there are incoming tasks or not. If there are, the SideNav shows an indicator in the agent-desktop icon.
 * @property {boolean} [isOpen] - Whether the Sidebar is open or not.
 * @property {string} [activeView] - Represents the current active view.
 */
export interface SideNavChildrenProps extends SideNavProps {
    incomingTasks?: boolean;
    isOpen?: boolean;
    activeView?: string;
}
/**
 * @classdesc This is a container for SideNav.
 * Can be themed with [theme.SideNav]
 * @component
 * @hideconstructor
 * @category Components / Programmable
 * @param {SideNav.SideNavProps} props - Properties to be passed to configure this component.
 */
export declare class SideNav extends React.PureComponent<SideNavProps> {
    private static friendlyName;
    static displayName: string;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<SideNav.SideNavChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Agent desktop view link component
     *
     * @static
     * @type {SideLinkAgentDesktop}
     * @readonly
     */
    static readonly AgentDesktop: typeof SideLinkAgentDesktop;
    /**
     * Teams view link component
     *
     * @static
     * @type {SideLinkTeams}
     * @readonly
     */
    static readonly Teams: typeof SideLinkTeams;
    /**
     * Queues stats view link component
     *
     * @static
     * @type {SideLinkQueuesStats}
     * @readonly
     */
    static readonly QueuesStats: typeof SideLinkQueuesStats;
    render(): JSX.Element;
}
