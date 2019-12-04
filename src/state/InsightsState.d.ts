import { AnyAction } from "redux";
import { SyncClient } from "twilio-sync";
import { InsightsPlayerMediaLink } from "../components/Insights/Player/Player.definitions";
/**
 * @private
 */
export interface InsightsState {
    readonly client: SyncClient;
    readonly playerMediaLinks: Array<InsightsPlayerMediaLink>;
    readonly selectedMediaLink?: number;
}
export declare function reduce(state: InsightsState, action: AnyAction): InsightsState;
export declare class Actions {
    private static dispatchAction;
    static init(client: SyncClient): void;
    static shutdown(): void;
}
