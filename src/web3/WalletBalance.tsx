import { useSharedAccountGetSharedBalance } from "./wagmi.generated";

function WalletBalance() {
  const { data: sharedBalance } = useSharedAccountGetSharedBalance();

  return (
    <div>
      Solde partagé:{" "}
      {sharedBalance
        ? `${Number(sharedBalance) / 1e18} Ethers`
        : "Chargement..."}
    </div>
  );
}

export default WalletBalance;
