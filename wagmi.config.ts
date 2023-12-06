/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineConfig } from '@wagmi/cli';
import { etherscan, react } from '@wagmi/cli/plugins';
import dotenvFlow from 'dotenv-flow';
import { Address } from 'viem';
import { sepolia } from 'wagmi/chains';

dotenvFlow.config();

export default defineConfig({
  out: 'src/web3/wagmi.generated.ts',
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: sepolia.id,
      contracts: [
        {
          name: 'SharedAccount',
          address: {
            [sepolia.id]: process.env.SHARED_ACCOUNT_ADDRESS! as Address,
          },
        },
      ],
    }),
    react(),
  ],
});
