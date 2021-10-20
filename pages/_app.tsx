import "../styles/app.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { whiteTheme } from "../features/theme/whiteTheme";
import { Layout } from "../features/Layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default App;
