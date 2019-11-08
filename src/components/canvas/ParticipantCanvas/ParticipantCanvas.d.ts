import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ParticipantCanvasProps, ParticipantCanvasImplState } from "./ParticipantCanvas.definitions";
/**
 * @class ParticipantCanvas
 * @classdesc This component renders a single participant.
 * @component
 * @hideconstructor
 * Can be themed with [theme.ParticipantsCanvas.ParticipantCanvas]{@link ParticipantCanvas.ParticipantCanvasThemeProps}
 * @param {ParticipantCanvas.ParticipantCanvasProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class ParticipantCanvas extends React.Component<ParticipantCanvasProps, ParticipantCanvasImplState> {
    state: {
        showKickConfirmation: boolean;
    };
    static readonly displayName = "ParticipantCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<ParticipantCanvas.ParticipantCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Dynamic content properties for List item
     * @static
     * @type {Object<{Content: DynamicContentStore<ParticipantCanvas.ParticipantCanvasChildrenProps>}>}
     * @readonly
     */
    static readonly ListItem: {
        displayName: string;
        Content: DynamicContentStore;
    };
    /**
     * Dynamic content properties for action buttons container
     * @static
     * @type {Object<{Content: DynamicContentStore<ParticipantCanvas.ParticipantCanvasChildrenProps>}>}
     * @readonly
     */
    static readonly Actions: {
        displayName: string;
        Content: DynamicContentStore;
    };
    render(): JSX.Element;
    private renderContent;
    private renderContentList;
    private renderActions;
    private renderKickConfirmation;
    private getThemeForButtons;
    private showKickConfirmation;
    private hideKickConfirmation;
    private onCancelTransferClick;
    private onHoldParticipantClick;
    private onKickParticipantConfirmClick;
}
