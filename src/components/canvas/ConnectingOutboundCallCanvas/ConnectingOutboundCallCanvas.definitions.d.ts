import { TaskContextProps } from "../../context/TaskContext";
import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of outbound call canvas theme.
 * @typedef ConnectingOutboundCallCanvas.ConnectingOutboundCallCanvasThemeProps
 * @property {CSSProps} CancelCallButton - Styles cancel call button.
 * @private
 */
export interface ConnectingOutboundCallCanvasThemeProps {
    CancelCallButton: CSSProps;
}
/**
 * Properties of outbound call canvas.
 * @typedef {TaskContextProps} ConnectingOutboundCallCanvas.ConnectingOutboundCallCanvasProps
 * @property {string} [firstLine] - First line shown in the outbound call canvas.
 * @property {string} [secondLine] - Second line shown in the outbound call canvas.
 * @property {string} [titleLine] - Title string shown in the outbound call canvas.
 * @private
 */
export interface ConnectingOutboundCallCanvasProps {
    firstLine?: string;
    secondLine?: string;
    titleLine?: string;
}
/**
 * Properties of children in outbound call canvas.
 * @typedef {ConnectingOutboundCallCanvas.ConnectingOutboundCallCanvasProps} ConnectingOutboundCallCanvas.ConnectingOutboundCallCanvasChildrenProps
 * @private
 */
export interface ConnectingOutboundCallCanvasChildrenProps extends ConnectingOutboundCallCanvasProps, TaskContextProps {
}
