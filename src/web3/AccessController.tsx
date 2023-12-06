import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  useSharedAccountUser1,
  useSharedAccountUser2,
} from "./wagmi.generated";

type AccessControlWrapperProps = {
  children: React.ReactNode;
};

function AccessControlWrapper({ children }: AccessControlWrapperProps) {
  const { data: user1 } = useSharedAccountUser1();
  const { data: user2 } = useSharedAccountUser2();
  const { address: accountData } = useAccount();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (accountData && (accountData === user1 || accountData === user2)) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [accountData, user1, user2]);

  if (!isAuthorized) {
    return (
      <p>
        Vous n'avez pas le droit d'accéder à cette application.
        <br />
        Veuillez vous connecter avec l'un des comptes autorisés.
      </p>
    );
  }

  return <>{children}</>;
}

export default AccessControlWrapper;
