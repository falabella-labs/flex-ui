import { TaskContextProps } from "../../context/TaskContext";
import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of incoming task canvas theme.
 * @typedef IncomingTaskCanvas.IncomingTaskCanvasThemeProps
 * @property {CSSProps} AcceptTaskButton - Styles accept task button.
 * @property {CSSProps} RejectTaskButton - Styles reject task button.
 */
export interface IncomingTaskCanvasThemeProps {
    AcceptTaskButton: CSSProps;
    RejectTaskButton: CSSProps;
}
/**
 * Properties of incoming task canvas.
 * @typedef {TaskContextProps} IncomingTaskCanvas.IncomingTaskCanvasProps
 * @property {string} [firstLine] - First line shown in the incoming task canvas.
 * @property {string} [secondLine] - Second line shown in the incoming task canvas.
 * @property {string} [titleLine] - Title string shown in the incoming task canvas.
 */
export interface IncomingTaskCanvasProps extends TaskContextProps {
    firstLine?: string;
    secondLine?: string;
    titleLine?: string;
}
/**
 * Properties of children in incoming task canvas.
 * @typedef {IncomingTaskCanvas.IncomingTaskCanvasProps} IncomingTaskCanvas.IncomingTaskCanvasChildrenProps
 * @property {IncomingTaskCanvas.IncomingTaskCanvasThemeProps} [theme.IncomingTaskCanvas] - theme.
 */
export interface IncomingTaskCanvasChildrenProps extends IncomingTaskCanvasProps {
}
