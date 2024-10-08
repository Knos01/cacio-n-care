import { PrivyProvider } from "@privy-io/react-auth";
import { sepolia } from "viem/chains";

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;

export default function PrivyProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://cacio-n-care.vercel.app/images/logo_mint.png",
        },
        defaultChain: sepolia,
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
