import { useSharedAccountApproveWithdrawal } from "./wagmi.generated";
import { Hex } from "viem";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

type ApproveWithdrawalComponentProps = {
  requester: Hex;
};

function ApproveWithdrawalComponent({
  requester,
}: ApproveWithdrawalComponentProps) {
  const { address } = useAccount();
  const { write } = useSharedAccountApproveWithdrawal();

  const handleApproveWithdrawal = async () => {
    try {
      await write({ args: [requester] });
      // Afficher une notification en cas de réussite
      toast.success("Retrait approuvé avec succès.");
    } catch (err) {
      toast.error("Erreur lors de l'approbation du retrait.");
    }
  };

  if (!address) {
    return null;
  }

  return (
    <button
      className="btn rounded-full bg-green-500 text-white w-60 p-2 mt-4"
      onClick={handleApproveWithdrawal}
    >
      Approuver la transaction
    </button>
  );
}

export default ApproveWithdrawalComponent;
