/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import { useSharedAccountRequestWithdrawal } from "./wagmi.generated";
import { Hex } from "viem";
import { ethers } from "ethers";

function RequestWithdrawalComponent() {
  const { write } = useSharedAccountRequestWithdrawal();
  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState<Hex>("0x");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRequestWithdrawal = () => {
    const amountInEther = parseFloat(amount);
    if (isNaN(amountInEther) || amountInEther <= 0) {
      setErrorMessage("Montant invalide");
      return;
    }
    try {
      write({ args: [BigInt(amountInEther * 1e18), destination] });
      setAmount("");
      setDestination("0x");
      setErrorMessage("");
    } catch (error) {
      console.error("Erreur lors de la demande de retrait : ", error);
      setErrorMessage("Erreur lors de la demande de retrait.");
    }
  };

  const validateAndSetDestination = (value: string) => {
    if (ethers.isAddress(value)) {
      setDestination(value as `0x${string}`);
    } else {
      setErrorMessage(
        "Ceci n'est pas une adresse Ethereum valide. Veuillez vérifier votre saisie !"
      );
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Demander un retrait</h2>
      <div className="mb-3">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium">
          Montant en Ether
        </label>
        <input
          type="number"
          id="amount"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="destination" className="block mb-2 text-sm font-medium">
          Adresse de destination
        </label>
        <input
          type="hex"
          id="destination"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={destination}
          onChange={(e) => validateAndSetDestination(e.target.value)}
        />
      </div>
      <button
        onClick={handleRequestWithdrawal}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
      >
        Demander un retrait
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default RequestWithdrawalComponent;
