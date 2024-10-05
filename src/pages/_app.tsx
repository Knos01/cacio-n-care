import PrivyProviders from "@/components/providers";
import { chains, wagmiConfig } from "@/providers";
import "@/styles/style.scss";
import { SharedStateProvider } from "@/utils/store";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <PrivyProviders>
        <SharedStateProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} modalSize="compact">
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </SharedStateProvider>
      </PrivyProviders>
    </PlausibleProvider>
  );
}
