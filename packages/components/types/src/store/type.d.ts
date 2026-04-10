export interface HostState {
    base_url: string;
    login_url: string;
    file_url: string;
    getfile_url: string;
    tokenName: string;
    useCrypto?: boolean;
    cryptoType?: number;
}
export interface ThemeState {
    primary: string;
    success: string;
    danger: string;
    error: string;
}
