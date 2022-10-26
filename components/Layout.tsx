import Head from 'next/head';
import { NextRouter } from 'next/router';
import Navbar from './Navbar';

type Props = {
    router: NextRouter;
    children: React.ReactNode;
}

function Layout({ router, children }: Props) {
    return (
        <div>
            <Head>
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Live Match - Acompanhe o cenário do futebol aqui!</title>
            </Head>
            <Navbar path={router.asPath} />
            {children}
        </div>
    )
}

export default Layout