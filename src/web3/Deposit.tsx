/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { useBalance } from "wagmi";
import { useSharedAccountDeposit } from "./wagmi.generated";

function Deposit() {
  const { data: balance } = useBalance();
  const { write } = useSharedAccountDeposit();
  const [depositAmount, setDepositAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeposit = async () => {
    const amountInEther = parseFloat(depositAmount);
    if (isNaN(amountInEther) || amountInEther <= 0) {
      setErrorMessage("Montant invalide");
      return;
    }

    try {
      await write({ value: BigInt(amountInEther * 1e18) });
      setDepositAmount("");
      setErrorMessage("");
    } catch (error: any) {
      console.error("Erreur de dépôt : ", error);
      if (error.message.includes("insufficient funds")) {
        setErrorMessage("Fonds insuffisants pour effectuer la transaction");
      } else {
        setErrorMessage("Erreur de dépôt");
      }
    }
  };

  return (
    <div className="mt-4 justify-content justify-center mb-8">
      <h2 className="text-lg font-semibold">Déposer des fonds</h2>
      <div className="mt-2  space-x-2">
        <input
          type="number"
          placeholder="Montant en Ether"
          className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button
          onClick={handleDeposit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
        >
          Déposer
        </button>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default Deposit;
