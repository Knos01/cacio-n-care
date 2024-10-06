import PrivyProviders from "@/components/providers";
import "@/styles/dashboard.scss";
import "@/styles/style.scss";
import { SharedStateProvider } from "@/utils/store";
import { SmartWalletsProvider } from "@privy-io/react-auth/smart-wallets";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";
import { createContext, useReducer } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <PrivyProviders>
        <SmartWalletsProvider>
          <SharedStateProvider>
            <Component {...pageProps} />
          </SharedStateProvider>
        </SmartWalletsProvider>
      </PrivyProviders>
    </PlausibleProvider>
  );
}
