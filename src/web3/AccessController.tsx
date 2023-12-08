import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  useSharedAccountUser1,
  useSharedAccountUser2,
} from "./wagmi.generated";
import UsersAddresses from "./UserAdresse";

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
      <div className="rounded-md bg-red-900 text-white p-6 text-xl">
        Vous n'avez pas le droit d'accéder à cette application.
        <br />
        Veuillez vous connecter avec l'un des comptes autorisés listés
        ci-dessous.
        <br />
        <UsersAddresses />
      </div>
    );
  }

  return <>{children}</>;
}

export default AccessControlWrapper;
