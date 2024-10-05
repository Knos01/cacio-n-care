import PrivyProviders from "@/components/providers";
import "@/styles/style.scss";
import { SharedStateProvider } from "@/utils/store";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <PrivyProviders>
        <SharedStateProvider>
          <Component {...pageProps} />
        </SharedStateProvider>
      </PrivyProviders>
    </PlausibleProvider>
  );
}
