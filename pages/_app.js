import Layout from "../components/layout/Layout";
import CartProvider from "../store/CartProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <div id='overlays'></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
