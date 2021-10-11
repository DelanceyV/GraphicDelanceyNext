import Layout from '../components/layout';
import '../components/styles.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Graphic Delancey</title>
        <link rel="icon" href="/Favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/rym1jja.css"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
