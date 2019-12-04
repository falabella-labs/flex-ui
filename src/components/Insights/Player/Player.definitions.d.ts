import IdentityClient from "@twilio/flex-insights-identity-client-js";
export declare const INSIGHTS_PLAYER_SET_MEDIA_LINKS = "INSIGHTS_PLAYER_SET_MEDIA_LINKS";
export declare const INSIGHTS_PLAYER_MEDIA_SELECT = "INSIGHTS_PLAYER_MEDIA_SELECT";
export declare type PlayerComponentProps = {
    onClose: () => void;
    visible: boolean;
    identityClient: IdentityClient;
    flexToken: string;
    segmentId?: string;
    mediaLink?: InsightsPlayerMediaLink;
    env?: object;
};
interface InsightsPlayerPlayActionPayloadWithSegmentId {
    segmentId: string;
}
interface InsightsPlayerPlayActionPayloadWithTaskSid {
    taskSid: string;
}
export declare enum InsightsPlayerMediaLinkType {
    VoiceRecording = "VoiceRecording",
    Raw = "Raw",
    Embedded = "Embedded",
    Referenced = "Referenced",
    Transcript = "Transcript"
}
export interface InsightsPlayerMediaLink {
    url: string;
    type: InsightsPlayerMediaLinkType;
    title?: string;
    url_secure?: string;
}
/**
 * Payload for {@link Insights.Player.Actions.INSIGHTS_PLAYER_PLAY}. Either segmentId or taskSid must be defined, or an error is thrown.
 * @typedef InsightsPlayerPlayActionPayload
 * @memberof Insights.Player
 * @property {string} [segmentId] Segment you want to play. Required if taskSid is not provided.
 * @property {string} [taskSid] Task you want to play. Required if segmentId is not provided.
 */
export declare type InsightsPlayerPlayActionPayload = InsightsPlayerPlayActionPayloadWithSegmentId | InsightsPlayerPlayActionPayloadWithTaskSid;
export declare type PlayerActions = {
    type: typeof INSIGHTS_PLAYER_SET_MEDIA_LINKS;
    payload: Array<InsightsPlayerMediaLink>;
};
export {};
