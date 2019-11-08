import { InstantQuery } from "twilio-sync/lib/livequery";
import { IWorker, IQueue } from "../models";
export interface EntitySearch {
    time: number;
    query: InstantQuery;
}
export declare class InsightsEntityCache {
    private static entities;
    private static searches;
    static destroy(): void;
    static getWorker(sid: string): IWorker;
    static getQueue(sid: string): IQueue;
    static refreshInfoForEntities(sids: Array<string>): Promise<void[]>;
    static updateCache(entity: IWorker | IQueue): void;
}
