import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "../theme";
export declare const displayName = "OutboundDialerPanel";
export declare const contentStore: DynamicContentStore;
interface OutboundDialerPanelState {
    phoneNumber: string;
    selectedQueueSid: string;
    inProgress: boolean;
    errorString: string;
}
export declare class OutboundDialerPanelImpl extends React.PureComponent<ThemeProps, OutboundDialerPanelState> {
    state: {
        phoneNumber: string;
        selectedQueueSid: string;
        inProgress: boolean;
        errorString: string;
    };
    render(): JSX.Element;
    private handleDial;
    private handleClose;
    private handlePhoneNumberChange;
    private handleQueueChange;
}
export {};
