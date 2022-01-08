import '../styles/globals.css'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Layout from "../components/templates/layout";

function MyApp({Component, pageProps}) {
    return <RecoilRoot>
        <html className="h-full bg-gray-100">
        <body className="h-full">
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </body>
        </html>
    </RecoilRoot>
}

export default MyApp
