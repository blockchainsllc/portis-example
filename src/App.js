import React from 'react';
import cow from './cow.jpg';
import './App.css';
import Portis from '@portis/web3';
import Web3 from 'web3';

let message = "Is the COW DEAD for BEEF or is the BEEF a DEAD COW ???"

async function sendMoney(web3) {
  const userAccount = (await web3.eth.getAccounts())[0]
  console.log("Account Address:", userAccount);
  const accountNonce = '0x' + (await web3.eth.getTransactionCount(userAccount)).toString(16);
  console.log("Account Nonce:", accountNonce);
  var rawTx = {
    nonce: accountNonce,
    gasPrice: "0x306DC4200",
    gasLimit: "0x186A0",
    to: "0xdeadbeef00000000000000000000000000000000",
    value: "0x0"
  };

  //define a inline function to send a transaction
  const handleTx = async (txParams, ethAccount) => {
      let transactionParams = {}

      transactionParams.nonce = txParams.nonce ? txParams.nonce : await web3.eth.getTransactionCount(ethAccount)
      transactionParams.from = ethAccount
      transactionParams.value = txParams.value ? txParams.value : 0
      transactionParams.data = txParams.data ? txParams.data : ''
      transactionParams.gasPrice = txParams.gasPrice ? txParams.gasPrice : await web3.eth.getGasPrice()
      transactionParams.gas = txParams.gas ? txParams.gas : 7000000
      transactionParams.to = txParams.to ? txParams.to : 0x0

      const signedTx = await web3.eth.signTransaction(transactionParams, ethAccount);
      return (web3.eth.sendSignedTransaction(signedTx.rawTransaction));
  }

  return handleTx(rawTx, userAccount)
}

function handleSend(web3) {
  sendMoney(web3).then((receipt) => {
    if(receipt.status) {
      message = "The BEEF is a DEAD COW and the COW is also DEAD to produce the BEEF. #brainf**k"
    }
  })
}


function App() {

  const portis = new Portis('8309e51d-b76e-48aa-855a-1d4801c0e9d4', 'mainnet', {useIn3: true});
  const web3 = new Web3(portis.provider);
  return (
    <div className="App">
      <header className="App-header">
        <img src={cow} className="App-logo" alt="cow" />
        <p>
          {message}
        </p>
        <button className="da-button" onClick={() => handleSend(web3)}>Deposit 0 ETH to 0xDEADBEEF to know</button>
      </header>
    </div>
  );
}

export default App;
