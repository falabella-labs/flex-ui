/// <reference types="react" />
/// <reference types="create-emotion" />
import { SelectProps } from "@material-ui/core/Select";
import { ButtonProps } from "@twilio/frame-ui";
import { ThemeProps } from "../theme";
export declare const StyledSidePanel: import("@twilio/frame-ui").StyledOtherComponent<object, import("@twilio/frame-ui").SidePanelProps, import("../theme").Theme>;
export declare const Container: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
interface DialerContainerProps extends ThemeProps {
    disabled?: boolean;
}
export declare const DialerContainer: import("@twilio/frame-ui").StyledOtherComponent<DialerContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const Caption: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, import("../theme").Theme>;
export declare const CallButton: import("@twilio/frame-ui").StyledOtherComponent<ButtonProps, import("@twilio/frame-ui").IconButtonProps, import("../theme").Theme>;
export declare const StyledSelect: import("@twilio/frame-ui").StyledOtherComponent<SelectProps, SelectProps, import("../theme").Theme>;
export declare const CallControls: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const CallAnimation: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const ErrorMessage: import("@twilio/frame-ui").StyledOtherComponent<ThemeProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export {};
