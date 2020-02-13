

const Web3 = require('web3');
const Portis = require('@portis/web3');

const portis = new Portis('d2a8b76f-3111-49f4-90ff-1141e209d383', 'mainnet');
const web3 = new Web3(portis.provider)

web3.eth.getAccounts((error, accounts) => {
  console.log(accounts);
});