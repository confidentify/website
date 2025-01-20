import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import type { AppProps } from 'next/app'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <KindeProvider
        clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID}
        domain={process.env.NEXT_PUBLIC_KINDE_DOMAIN}
        redirectUri={process.env.NEXT_PUBLIC_KINDE_REDIRECT_URL}
        logoutUri={process.env.NEXT_PUBLIC_KINDE_LOGOUT_URL}>
        <Component {...pageProps} />
    </KindeProvider>
}
