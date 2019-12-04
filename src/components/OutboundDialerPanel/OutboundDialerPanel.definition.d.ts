import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of OutboundDialerPanel theme.
 * @typedef OutboundDialerPanel.OutboundDialerPanelThemeProps
 * @property {CSSProps} Container - Styles container in OutboundDialerPanel.
 * @property {CSSProps} Header - Styles header in OutboundDialerPanel.
 * @property {CSSProps} HeaderButton - Styles header button in OutboundDialerPanel.
 * @private
 */
export interface OutboundDialerPanelThemeProps {
    Container: CSSProps & {
        disabled?: CSSProps;
    };
    Header: CSSProps;
    HeaderButton: CSSProps;
}
/**
 * Properties of OutboundDialerPanel.
 * @typedef OutboundDialer.OutboundDialerPanelProps
 * @private
 */
export interface OutboundDialerPanelProps {
}
