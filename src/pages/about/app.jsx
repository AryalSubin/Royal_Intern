import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oCf8iRUq7eA8x+4G1p6i0HpqTqHlA8vdtRNNUqDf1cE=" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;