declare namespace NodeJS {
    export interface ProcessEnv {
        readonly NEXT_PUBLIC_KINDE_CLIENT_ID: string;
        readonly NEXT_PUBLIC_KINDE_DOMAIN: string;
        readonly NEXT_PUBLIC_KINDE_REDIRECT_URL: string;
        readonly NEXT_PUBLIC_KINDE_LOGOUT_URL: string;
    }
}