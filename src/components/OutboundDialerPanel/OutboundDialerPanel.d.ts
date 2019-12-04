import * as React from "react";
import { OutboundDialerPanelProps } from "./OutboundDialerPanel.definition";
import { OutboundDialerPanelImpl } from "./OutboundDialerPanelImpl";
/**
 * @private
 * @class OutboundDialerPanel
 * @classdesc Panel containing components to facilitate outbound calling task.
 * Can be themed with [theme.OutboundCallingPanel]{@link OutboundDialerPanel.OutboundDialerPanelThemeProps}
 * @param {OutboundDialer.OutboundDialerPanelProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 */
export declare class OutboundDialerPanel extends React.PureComponent<OutboundDialerPanelProps> {
    static readonly displayName = "OutboundDialerPanel";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerCanvas.WorkerCanvasProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: typeof OutboundDialerPanelImpl;
