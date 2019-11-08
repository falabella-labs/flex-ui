import * as React from "react";
import { ThemeProps } from "../../../theme";
import { TaskCanvasChildrenProps } from "../../TaskCanvas";
import { TaskContextProps } from "../../../context";
/**
 * Properties of Call canvas action.
 * @typedef {TaskCanvas.TaskCanvasChildrenProps} CallCanvasActions.CallCanvasActionsProps
 */
export interface CallCanvasActionsProps extends TaskCanvasChildrenProps, ThemeProps {
}
/**
 * Properties of children in call canvas action.
 * @typedef {TaskContextProps} CallCanvasActions.CallCanvasActionsChildrenProps
 * @property {CallCanvas.CallCanvasThemeProps} [theme.CallCanvas] - theme.
 */
export interface CallCanvasActionsChildrenProps extends TaskContextProps, ThemeProps {
}
/**
 * @classdesc This component renders actions for call canvas.
 * @component
 * @hideconstructor
 * @param {CallCanvasActions.CallCanvasActionsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class CallCanvasActions extends React.Component<CallCanvasActionsProps> {
    static readonly displayName = "CallCanvasActions";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<CallCanvasActions.CallCanvasActionsChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
