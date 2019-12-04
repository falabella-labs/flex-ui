import * as React from "react";
import { InsightsPlayerMediaLink } from "./Player.definitions";
import { ThemeProps } from "@twilio/frame-ui";
interface ReferencedContentProps extends ThemeProps {
    mediaLink: InsightsPlayerMediaLink;
}
export declare class ReferencedContent extends React.PureComponent<ReferencedContentProps> {
    private openLink;
    render(): JSX.Element;
}
export {};
