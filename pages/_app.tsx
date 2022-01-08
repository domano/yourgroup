import '../styles/globals.css'
import {
    RecoilRoot,
} from 'recoil';
import Layout from "../components/templates/layout";

function MyApp({Component, pageProps}) {
    return <RecoilRoot>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </RecoilRoot>
}

export default MyApp
