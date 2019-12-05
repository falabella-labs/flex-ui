import * as React from "react";
import { SideLinkItemChildrenProps, SideLinkQueuesStatsProps } from "../SideLink/SideLink.definitions";
/**
 * This component renders side link for queues stats view.
 * @class SideLinkQueuesStats
 * @component
 * @hideconstructor
 * @private see https://issues.corp.twilio.com/browse/FLEXUI-793 for more details on why its private
 * @category Components / Basic
 * @param {SideLink.SideLinkItemProps} props - Properties to be passed to configure this component.
 * @private
 */
export declare class SideLinkQueuesStats extends React.PureComponent<SideLinkQueuesStatsProps> {
    /**
     * Default properties
     *
     * @static
     * @type {SideLink.SideLinkItemChildrenProps}
     * @readonly
     */
    static defaultProps: SideLinkItemChildrenProps;
    private gotoView;
    render(): JSX.Element;
}
