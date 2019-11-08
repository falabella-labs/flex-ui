import * as React from "react";
export interface ContentSplitterProps {
    vertical: boolean;
}
export declare class ContentSplitter extends React.PureComponent<ContentSplitterProps> {
    private splitter;
    private static lastSplitterState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleSplitterNeedsUpdate;
    render(): JSX.Element;
    private makeSplitterRef;
    private handleResize;
}
