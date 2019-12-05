import { BaseThemeColors } from "../components/theme";
import { CoreThemeColors } from "@twilio/frame-ui";
/**
 * @memberOf ThemeColorsDefinitionCreator
 */
export interface ThemeColorsDefinition {
    colors: BaseThemeColors & CoreThemeColors;
    lightTheme: boolean;
}
/**
 * Static class used to create a theme colors object
 * @category Theme
 * @class ThemeColorsDefinitionCreator
 * @hideconstructor
 */
export declare class ThemeColorsDefinitionCreator {
    /**
     * Gets predefined theme
     * @method
     * @param {string} name Theme name
     * @static
    */
    static getPredefined(name: string): ThemeColorsDefinition;
}
/**
 * @deprecated use ThemeColorsDefinition instead
 * @category Theme
 * @private
 */
export interface ThemeDef extends ThemeColorsDefinition {
}
/**
 * @deprecated use ThemeColorsDefinitionCreator instead
 * @category Theme
 * @private
 */
export declare class ThemeDefCreator {
    /**
     * @deprecated use ThemeColorsDefinitionCreator.getPredefined instead
     */
    static getPredefinedTheme(name: string): ThemeDef;
}
