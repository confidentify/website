import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import type { AppProps } from 'next/app'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <KindeProvider
        clientId={process.env.KINDE_CLIENT_ID!}
        domain={process.env.KINDE_DOMAIN!}
        redirectUri={process.env.KINDE_REDIRECT_URL!}
        logoutUri={process.env.KINDE_LOGOUT_URL!}>
        <Component {...pageProps} />
    </KindeProvider>
}
