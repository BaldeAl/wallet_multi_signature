/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Wagmi from "./web3/wagmi";
import WalletBalance from "./web3/WalletBalance";

import Header from "./web3/Header";
import Deposit from "./web3/Deposit";
import RequestWithdrawalComponent from "./web3/RequestWithdrawl";

import UserWithdrawals from "./web3/UserWithdrawls";

import AccessControlWrapper from "./web3/AccessController";

function App() {
  return (
    <Wagmi>
      <Header />

      <h1 className="p-4 bg-blue-50">Wallet multi-signature</h1>
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
        <ToastContainer />
      </AccessControlWrapper>
    </Wagmi>
  );
}

export default App;
