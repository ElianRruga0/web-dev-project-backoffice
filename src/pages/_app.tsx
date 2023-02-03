import Layout from "@/components/layout";
import "@/styles/globals.css";
import axios from "axios";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://161.35.26.84/api/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Suspense fallback="Loading...">
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </Provider>
  );
}
