import "../styles/app.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { whiteTheme } from "../features/theme/whiteTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={whiteTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
