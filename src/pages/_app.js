import Layout from '@/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  console.log("hello")
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
