import * as React from "react";
import { DynamicContentStore, CompiledTemplate } from "@twilio/frame-ui";
export interface LiveCommsBarItemAction {
    onClick: () => void;
    caption: CompiledTemplate;
    actionsToListen?: Array<string>;
}
/**
 * Properties of LiveCommsBarItemActions.
 * @typedef LiveCommsBarItemActions.LiveCommsBarItemActionsProps
 * @property {Array<LiveCommsBarItemActions.LiveCommsBarItemAction>} actions - Actions
 * @property {DynamicComponentChildren<LiveCommsBarItemActions.LiveCommsBarItemActionsChildrenProps>} [children] - children
 */
export interface LiveCommsBarItemActionsProps {
    actions: Array<LiveCommsBarItemAction>;
}
/**
 * Properties of LiveCommsBarItemActions.
 * @typedef {LiveCommsBarItemActions.LiveCommsBarItemActionsProps} LiveCommsBarItemActions.LiveCommsBarItemActionsChildrenProps
 */
export interface LiveCommsBarItemActionsChildrenProps extends LiveCommsBarItemActionsProps {
}
/**
 * @classdesc This is a container for LiveCommsBarItemActions.
 * @component
 * @hideconstructor
 * @param {LiveCommsBarItemActions.LiveCommsBarItemActionsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class LiveCommsBarItemActions extends React.Component<LiveCommsBarItemActionsProps> {
    private static readonly friendlyName;
    static readonly displayName = "LiveCommsBarItemActions";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<LiveCommsBarItemActions.LiveCommsBarItemActionsChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
    private renderContents;
}
