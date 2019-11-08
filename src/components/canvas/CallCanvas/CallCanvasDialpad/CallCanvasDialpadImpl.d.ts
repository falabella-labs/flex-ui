import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { CallCanvasDialpadChildrenProps } from "./CallCanvasDialpad.definitions";
export declare const displayName = "CallCanvasDialpad";
export declare const contentStore: DynamicContentStore;
export declare class CallCanvasDialpadImpl extends React.PureComponent<CallCanvasDialpadChildrenProps> {
    private handleKeyClick;
    render(): JSX.Element;
}
