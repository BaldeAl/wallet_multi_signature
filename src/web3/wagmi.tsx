import { useEffect, useState, type FC, type ReactNode } from "react";
import { WagmiConfig, configureChains, createConfig, sepolia } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: import.meta.env.VITE_WALLET_ALCHEMY_API_KEY! })]
);

const injected = new InjectedConnector({
  chains,
  options: {
    name: "Injected",
    shimDisconnect: true,
  },
});

const config = createConfig({
  autoConnect: true,
  connectors: [injected],
  publicClient,
  webSocketPublicClient,
});

interface WagmiProps {
  children: ReactNode;
}

const Wagmi: FC<WagmiProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
};

export default Wagmi;
