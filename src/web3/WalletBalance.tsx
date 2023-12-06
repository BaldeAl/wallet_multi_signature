import { useSharedAccountGetSharedBalance } from "./wagmi.generated";

function WalletBalance() {
  const { data: sharedBalance } = useSharedAccountGetSharedBalance();

  return (
    <div className="">
      <h1 className="capitalize outline p-2 rounded-md justify-center">
        Solde du portefeuille partagé :{" "}
        <strong className="text-xl">
          {sharedBalance
            ? `${Number(sharedBalance) / 1e18} Ethers`
            : "Chargement..."}{" "}
        </strong>
      </h1>
    </div>
  );
}

export default WalletBalance;
