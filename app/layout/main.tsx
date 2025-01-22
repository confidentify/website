import Head from "next/head"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
}

export function LayoutMain(props: Props) {
    return <>
        <Head>
            <title>conf·ident·ify</title>
            <link rel="icon" href="/logo.svg" />
        </Head>
        <div className='container'>
            <main>
                {props.children}
            </main>
            <footer>
                © 2025 Confidentify
                <span className="dot">·</span>
                Kongevejen 5
                <span className="dot">·</span>
                3000 Helsingør
                <span className="dot">·</span>
                Denmark
            </footer>
        </div>
    </>
}