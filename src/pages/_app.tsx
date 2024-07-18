import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import GlobalStyle from "../components/globalstyles";
import Layout from "@/components/Layout";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";

const theme: DefaultTheme = {
  colors: {
    primary: "#f73f01",
    secondary: "#777",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ShoppingCartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShoppingCartProvider>
      </ThemeProvider>
    </>
  );
}
