import "../styles/app.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { darkTheme, Layout } from "@jambsik-labs/ui-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default App;
