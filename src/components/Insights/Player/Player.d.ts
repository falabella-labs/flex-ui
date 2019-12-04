/// <reference types="react-redux" />
import * as React from "react";
import { InsightsPlayerMediaLink } from "./Player.definitions";
interface PlayerStateProps {
    mediaLink?: InsightsPlayerMediaLink;
}
interface PlayerDispatchProps {
    onMediaLinksFetched: (links: Array<InsightsPlayerMediaLink>) => void;
    onPlayerClosed: () => void;
}
declare type PlayerProps = PlayerStateProps & PlayerDispatchProps;
export declare const Player: React.ComponentClass<Pick<PlayerProps, never>, any> & {
    WrappedComponent: React.ComponentType<PlayerProps>;
};
export {};
