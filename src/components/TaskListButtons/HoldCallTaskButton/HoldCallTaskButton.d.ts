import { PropsWithTheme } from "../../theme";
import * as React from "react";
import { TaskContextProps } from "../../context/TaskContext";
export declare class HoldCallTaskButton extends React.Component<PropsWithTheme<TaskContextProps>> {
    isOnHold(): boolean;
    onClick: (e: React.SyntheticEvent<any, Event>) => void;
    render(): JSX.Element;
}
