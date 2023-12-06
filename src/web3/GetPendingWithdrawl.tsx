/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSharedAccountPendingWithdrawals } from "./wagmi.generated";
import { Hex } from "viem";
import ApproveWithdrawalComponent from "./ApprouveWithdrawl";
import { toast } from "react-toastify";
import { useEffect } from "react";

type PendingWithdrawalComponentProps = {
  userAddress: Hex;
};
function PendingWithdrawalComponent(
  { userAddress }: PendingWithdrawalComponentProps,
  isApprovable: Hex
) {
  const {
    data: pendingWithdrawal,
    isError,
    isLoading,
  } = useSharedAccountPendingWithdrawals({
    args: [userAddress],
  });

  //Pour  Vérifier si le montant est supérieur à 0
  const hasPendingWithdrawal = pendingWithdrawal && pendingWithdrawal[0] > 0;

  // Pour informer l'utilisateur qu'il a une demande de retrait en attente
  useEffect(() => {
    if (hasPendingWithdrawal) {
      toast.info("Vous avez une demande de retrait en attente.");
    }
  }, [hasPendingWithdrawal]);

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-lg font-semibold">Retrait en attente</h2>

      {isLoading && <p>Chargement...</p>}
      {isError && (
        <p>Une erreur s'est produite lors de la récupération des données.</p>
      )}
      {hasPendingWithdrawal ? (
        <div>
          <p className="">Pour l'adresse : {userAddress}</p>
          <span>Montant : {""}</span>
          <p className="rounded-lg bg-teal-100">
            {Number(pendingWithdrawal[0]) / 1e18} Ether
          </p>

          <span className=" capitalize">à l'adresse: </span>

          <p className="rounded-lg bg-teal-100">{pendingWithdrawal[1]}</p>

          {isApprovable && (
            <ApproveWithdrawalComponent requester={userAddress} />
          )}
        </div>
      ) : (
        <p>Vous n'avez aucune demande de retrait en attente.</p>
      )}
      {!pendingWithdrawal && !isLoading && <p>Aucun retrait en attente.</p>}
    </div>
  );
}

export default PendingWithdrawalComponent;
