import { AppContext, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export interface IConfig {
    theme: {
        primary: string;
        success: string;
        danger: string;
        error: string;
    };
    request: {
        base_url: string;
        login_url: string;
        file_url: string;
        getfile_url: string;
        tokenName: string;
        useCrypto?: boolean;
        cryptoType?: number;
    };
}
