import { ThemeProps } from "../../../theme";
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskContextProps } from "../../../context";
/**
 * Properties of Incoming task canvas action.
 * @typedef {TaskContextSource.TaskContextProps} IncomingTaskCanvasActionsProps
 * @memberof IncomingTaskCanvasActions
 */
interface IncomingTaskCanvasActionsProps extends TaskContextProps, ThemeProps {
}
/**
 * Properties of children in incoming task canvas action.
 * @typedef {IncomingTaskCanvasActions.IncomingTaskCanvasActionsProps} IncomingTaskCanvasActionsChildrenProps
 * @property {IncomingTaskCanvas.IncomingTaskCanvasThemeProps} [theme.IncomingTaskCanvas] - theme.
 * @memberof IncomingTaskCanvasActions
 */
export interface IncomingTaskCanvasActionsChildrenProps extends IncomingTaskCanvasActionsProps {
}
/**
 * @classdesc This component renders actions for incoming task canvas.
 * @class IncomingTaskCanvasActions
 * @component
 * @hideconstructor
 * @param {IncomingTaskCanvasActions.IncomingTaskCanvasActionsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class IncomingTaskCanvasActions extends React.Component<IncomingTaskCanvasActionsProps> {
    static readonly displayName = "IncomingTaskCanvasActions";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<IncomingTaskCanvasActions.IncomingTaskCanvasActionsChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
    private onAcceptClick;
    private onDeclineClick;
}
export {};
