import { IWorker } from "../../../models";
import { ThemeProps } from "../../theme";
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
/**
 * Properties of WorkerCanvasHeader.
 * @typedef WorkerCanvasHeader.WorkerCanvasHeaderProps
 *
 * @property {IWorker} worker - Worker
 * @property {DynamicComponentChildren<WorkerCanvasHeader.WorkerCanvasHeaderChildrenProps>} [children] - children
 */
export interface WorkerCanvasHeaderProps {
    worker: IWorker;
}
/**
 * Properties of WorkerCanvasHeaders.
 * @typedef {WorkerCanvasHeader.WorkerCanvasHeaderProps} WorkerCanvasHeader.WorkerCanvasHeaderChildrenProps
 */
export interface WorkerCanvasHeaderChildrenProps extends WorkerCanvasHeaderProps {
}
/**
 * @class WorkerCanvasHeader
 * @classdesc This is a container for WorkerCanvasHeader that displays the header of Worker Canvas.
 * Can be themed with [theme.Supervisor.WorkerCanvas.Header]
 * @component
 * @hideconstructor
 * @param {WorkerCanvasHeader.WorkerCanvasHeaderProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkerCanvasHeader extends React.PureComponent<WorkerCanvasHeaderProps & ThemeProps> {
    static readonly friendlyName = "WorkerCanvasHeader";
    static readonly displayName = "WorkerCanvasHeader";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerCanvasHeader.WorkerCanvasHeaderChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
    private handleCloseButton;
}
