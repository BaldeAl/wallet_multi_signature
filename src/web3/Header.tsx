import { type FC } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Button from "../components/Button";
import shortAddr from "../utils/shortAddr";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();

  return (
    <header className="flex items-center justify-between w-full p-4 border-b border-gray-300">
      {!isConnected || !address ? (
        <>
          <p>Not connected</p>
          <Button onClick={() => connect({ connector: connectors[0]! })}>
            Connect
          </Button>
        </>
      ) : (
        <>
          <p>Connected as {shortAddr(address)}</p>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </>
      )}
    </header>
  );
};

export default Header;
