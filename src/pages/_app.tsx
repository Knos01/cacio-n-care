import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import { createContext, useReducer } from 'react'
import '@/styles/style.scss'
import '@/styles/dashboard.scss'
import { SharedStateProvider } from '@/utils/store'
import PrivyProviders from "@/components/providers";



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
