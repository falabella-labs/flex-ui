import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ConnectingOutboundCallCanvasActionsProps } from "./ConnectingOutboundCallCanvasActions.definitions";
/**
 * @classdesc This component renders actions for Outbound call canvas.
 * @class ConnectingOutboundCallCanvasActions
 * @component
 * @hideconstructor
 * @param {ConnectingOutboundCallCanvasActions.ConnectingOutboundCallCanvasActionsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 * @private
 */
export declare class ConnectingOutboundCallCanvasActions extends React.Component<ConnectingOutboundCallCanvasActionsProps> {
    static readonly displayName = "ConnectingOutboundCallCanvasActions";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<ConnectingOutboundCallCanvasActions.ConnectingOutboundCallCanvasActionsChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
    private onCancelCall;
}
