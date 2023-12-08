/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import PendingWithdrawalComponent from "./GetPendingWithdrawl";
import { Hex } from "viem";
import { useAccount } from "wagmi";
import {
  useSharedAccountUser1,
  useSharedAccountUser2,
} from "./wagmi.generated";

function UserWithdrawals() {
  const { address: connectedAddress, isConnected } = useAccount();
  const { data: user1 } = useSharedAccountUser1();
  const { data: user2 } = useSharedAccountUser2();
  const [otherUserAddress, setOtherUserAddress] = useState<Hex>();

  useEffect(() => {
    if (isConnected && user1 && user2) {
      if (connectedAddress === user1) {
        setOtherUserAddress(user2);
      } else if (connectedAddress === user2) {
        setOtherUserAddress(user1);
      }
    }
  }, [connectedAddress, user1, user2, isConnected]);

  const isApprovable =
    connectedAddress && connectedAddress === otherUserAddress;
  return (
    <div className="p-4">
      <h2 className={`text-lg font-semibold mb-4  `}>
        Voir les Retraits en attentes 👇↓
      </h2>

      {otherUserAddress && (
        <PendingWithdrawalComponent
          userAddress={otherUserAddress}
          isApprovable={isApprovable ?? false}
        />
      )}
      {!otherUserAddress && isConnected && (
        <p>Aucun autre utilisateur à afficher.</p>
      )}
      {!isConnected && (
        <p>Veuillez vous connecter pour voir les retraits en attente.</p>
      )}
    </div>
  );
}

export default UserWithdrawals;
