import { InsightsPlayerMediaLink } from "../Player/Player.definitions";
export interface MediaSelectDropdownStateProps {
    mediaLinks: Array<InsightsPlayerMediaLink>;
    selectedIndex?: number;
}
export interface MediaSelectDropdownDispatchProps {
    onLinkSelected: (index: number) => void;
}
export interface MediaSelectDropdownOwnProps {
    width?: number;
}
export declare type MediaSelectDropdownProps = MediaSelectDropdownStateProps & MediaSelectDropdownDispatchProps & MediaSelectDropdownOwnProps;
