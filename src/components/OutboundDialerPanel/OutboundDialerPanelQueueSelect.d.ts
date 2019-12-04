import * as React from "react";
import { IQueue } from "../../models";
export interface OutboundDialerPanelQueueSelectProps {
    selectedQueueSid?: string;
    onChange?: (sid: string) => void;
    disabled?: boolean;
}
export interface OutboundDialerPanelQueueSelectState {
    queues: Array<IQueue>;
}
export declare class OutboundDialerPanelQueueSelect extends React.PureComponent<OutboundDialerPanelQueueSelectProps, OutboundDialerPanelQueueSelectState> {
    state: OutboundDialerPanelQueueSelectState;
    static defaultProps: {
        selectedQueueSid: string;
    };
    private queuesSearch;
    componentDidMount(): Promise<void>;
    private handleChange;
    render(): JSX.Element;
}
