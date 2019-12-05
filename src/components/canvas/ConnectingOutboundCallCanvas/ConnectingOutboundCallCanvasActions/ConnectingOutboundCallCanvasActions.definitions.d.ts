import { TaskContextProps } from "../../../context";
import { ThemeProps } from "../../../theme";
/**
 * Properties of Outbound call canvas action.
 * @typedef {TaskContextSource.TaskContextProps} ConnectingOutboundCallCanvasActionsProps
 * @memberof ConnectingOutboundCallCanvasActions
 * @private
 */
export interface ConnectingOutboundCallCanvasActionsProps extends TaskContextProps, ThemeProps {
}
/**
 * Properties of children in Outbound call canvas action.
 * @typedef {ConnectingOutboundCallCanvasActions.ConnectingOutboundCallCanvasActionsProps} ConnectingOutboundCallCanvasActionsChildrenProps
 * @property {ConnectingOutboundCallCanvas.ConnectingOutboundCallCanvasThemeProps} [theme.ConnectingOutboundCallCanvas] - theme.
 * @memberof ConnectingOutboundCallCanvasActions
 * @private
 */
export interface ConnectingOutboundCallCanvasActionsChildrenProps extends ConnectingOutboundCallCanvasActionsProps {
}
