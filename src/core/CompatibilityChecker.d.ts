/**
 * @typedef CompatibilityOptions
 * @property {string} yes="yes"
 * @property {string} no="no"
 * @property {string} deprecated="deprecated"
 */
export declare enum CompatibilityOptions {
    "yes" = "yes",
    "no" = "no",
    "deprecated" = "deprecated"
}
/**
 * Checks if the version of Flex back-end is compatible. May trigger deprecation notification.
 * @param {CompatibilityOptions} compatibility Compatibility string from back-end
 * @param {string} message Message from back-end about deprecation or incompatibility
 * @private
 */
export declare function isCompatible(compatibility: CompatibilityOptions, message?: string): boolean;
