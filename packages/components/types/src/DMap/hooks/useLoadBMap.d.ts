export declare class BmapController {
    static isLoad: boolean;
    static eventList: Set<Function>;
    static insertBMapEle(): Promise<void>;
    static whenLoad(fn?: () => void): void;
    static executeCallbacks(): void;
}
