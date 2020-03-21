/**
 * This is a custom app replacing the default one from Next.
 * Using this to persit layout and state throughout the app.
 */
import Layout from "../components/layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
