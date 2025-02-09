import { KindeStuff } from '../../app/auth/kinde';
import { LayoutMain } from '../../app/layout/main';

export default function Home() {
    return <LayoutMain>
        <div>
            <code>
                Client ID: {process.env.NEXT_PUBLIC_KINDE_CLIENT_ID}
            </code>
        </div>
        <div>
            <code>
                Domain: {process.env.NEXT_PUBLIC_KINDE_DOMAIN}
            </code>
        </div>
        <div>
            <code>
                Redirect URL: {process.env.NEXT_PUBLIC_KINDE_REDIRECT_URL}
            </code>
        </div>
        <div>
            <code>
                Logout URL: {process.env.NEXT_PUBLIC_KINDE_LOGOUT_URL}
            </code>
        </div>

        <KindeStuff />
    </LayoutMain>
}
