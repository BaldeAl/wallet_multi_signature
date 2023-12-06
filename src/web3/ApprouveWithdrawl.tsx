import { useSharedAccountApproveWithdrawal } from "./wagmi.generated";
import { Hex } from "viem";

import { useAccount } from "wagmi";

type ApproveWithdrawalComponentProps = {
  requester: Hex;
};

function ApproveWithdrawalComponent({
  requester,
}: ApproveWithdrawalComponentProps) {
  const { address } = useAccount();
  const { write } = useSharedAccountApproveWithdrawal();

  const handleApproveWithdrawal = () => {
    write({ args: [requester] });
  };

  if (address === requester) {
    return null;
  }

  return (
    <button onClick={handleApproveWithdrawal}>
      Approuver le retrait pour {requester}
    </button>
  );
}

export default ApproveWithdrawalComponent;
