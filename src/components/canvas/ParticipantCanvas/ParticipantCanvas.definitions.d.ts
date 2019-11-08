import { ConferenceParticipant } from "../../../state/ConferencesState";
import { ThemeProps } from "../../theme";
import { TaskContextProps } from "../../context/TaskContext";
import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of participant canvas.
 * @typedef ParticipantCanvas.ParticipantCanvasProps
 * @property {ConferenceParticipant} participant - Represents a single participant of a conference.
 * @property {number} participantWidth - Represents width of the participant container.
 * @property {boolean} [hideActions] - Identifies if the participant actions are hidden.
 * @property {boolean} [listMode] - Identifies if the participant are rendered in list mode.
 */
export interface ParticipantCanvasProps extends ThemeProps, TaskContextProps {
    participant: ConferenceParticipant;
    participantWidth: number;
    hideActions?: boolean;
    listMode?: boolean;
}
/**
 * Properties of participant canvas theme.
 * @typedef ParticipantCanvas.ParticipantCanvasThemeProps
 * @property {CSSProps} Container - Styles participant container.
 * @property {CSSProps} Avatar - Styles participant avatar.
 * @property {CSSProps} StateHover - Styles hover state on participant avatar.
 * @property {CSSProps} ConnectingAnimation - Styles participant connecting state.
 * @property {CSSProps} Button - Styles button in participant canvas.
 * @property {CSSProps} HangUpButton - Styles hang up button in participant canvas.
 */
export interface ParticipantCanvasThemeProps {
    Container: CSSProps;
    Avatar: CSSProps;
    StateHover: CSSProps;
    ConnectingAnimation: {
        color: string;
    };
    Button: CSSProps;
    HangUpButton: CSSProps;
}
/**
 * Properties of children in participant canvas.
 * @typedef {ParticipantCanvas.ParticipantCanvasProps} ParticipantCanvas.ParticipantCanvasChildrenProps
 * @property {ParticipantCanvas.ParticipantCanvasThemeProps} [theme.ParticipantsCanvas.ParticipantCanvas] - theme.
 */
export interface ParticipantCanvasChildrenProps extends ParticipantCanvasProps {
}
export interface ParticipantCanvasImplState {
    showKickConfirmation: boolean;
}
