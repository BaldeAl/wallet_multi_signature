/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wagmi from "./web3/wagmi";
import WalletBalance from "./web3/WalletBalance";
import UsersAddresses from "./web3/UserAdresse";
import Header from "./web3/Header";
import Deposit from "./web3/Deposit";
import RequestWithdrawalComponent from "./web3/RequestWithdrawl";
import PendingWithdrawalComponent from "./web3/GetPendingWithdrawl";
import UserWithdrawals from "./web3/UserWithdrawls";
import ApproveWithdrawalComponent from "./web3/ApprouveWithdrawl";
import AccessControlWrapper from "./web3/AccessController";

function App() {
  return (
    <Wagmi>
      <Header />

      <h1>Shared Wallet</h1>
      <div className="card">
        <WalletBalance />
      </div>
      <AccessControlWrapper>
        <Deposit />
        <div>
          <RequestWithdrawalComponent />
        </div>

        <div>
          <UserWithdrawals />
        </div>
      </AccessControlWrapper>
    </Wagmi>
  );
}

export default App;
