/// <reference types="react" />
/**
 * <p>
 * This lets you enable and customize fullscreenability of a fullscreenable component ({@link QueuesStatsView}).
 * FullscreenConfig is found on the <code>fullscreen</code> static property of the component:
 * </p>
 * <pre>
 * Flex.QueuesStatsView.fullscreen = {
 *   enabled: true
 * }
 * </pre>
 * <br />
 * @interface FullscreenConfig
 * @property {boolean} [enabled=false] adds a button to toggle fullscreen for the component
 * @property {Function} [renderButton=null]
 * <p>
 * render prop to add a custom button, e.g.:
 * </p>
 * <pre>
 * fullscreen.renderButton = ({
 *   isFullscreen,
 *   toggleFullscreen
 * }) =>
 *   &lt;MyCustomButton
 *     isVisible={!isFullscreen}
 *     onClick={toggleFullscreen}
 *   /&gt;
 * </pre>
 * @property {React.CSSProperties} [wrapperStyles={}] custom styles for the div wrapping the fullscreenable view
 * @category Insights
 */
export interface FullscreenConfig {
    enabled: boolean;
    renderButton: ((props: FullscreenButtonProps) => React.ReactNode) | null;
    wrapperStyles: React.CSSProperties;
}
export interface FullscreenButtonProps {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
}
