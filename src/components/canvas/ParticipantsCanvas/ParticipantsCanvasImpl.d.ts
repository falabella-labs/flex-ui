import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui/";
import { ParticipantsCanvasChildrenProps } from "./ParticipantsCanvas.definitions";
export declare const displayName = "ParticipantsCanvas";
export declare const contentStore: DynamicContentStore;
export declare class ParticipantsCanvasImpl extends React.PureComponent<ParticipantsCanvasChildrenProps> {
    private container;
    state: {
        participantWidth: number;
        listMode: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleParticipantWidthNeedsUpdate: () => void;
    setContainerRef: (element: HTMLDivElement) => void;
    render(): JSX.Element;
    private renderParticipants;
    private getParticipants;
    private unHoldMyself;
}
