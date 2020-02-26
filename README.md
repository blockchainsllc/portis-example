### Portis Wallet with IN3 - example

One would normally use the portis wallet's sdk with their web3 library like this

```
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('YOUR_DAPP_ID', 'mainnet');
const web3 = new Web3(portis.provider);
```
**For private networks**
```
const myPrivateEthereumNode = {
  nodeUrl: 'https://private.network',
  chainId: 1,
};
const portis = new Portis('dappId', myPrivateEthereumNode);
```
**For using IN3**
```
const in3Config = {
  chainId: 'kovan',
  requestCount: 5,
  minDeposit: 0.01
}

const portis = new Portis('8309e51d-b76e-48aa-855a-1d4801c0e9d4', in3Config, {useIn3: true});
const web3 = new Web3(portis.provider);
```

> Supported networks include only **ETHEREUM-MAINNET**, **KOVAN**, **GOERLI**. This means that exisiting dapps using portis for different chains like **RINKEBY** or **ROPSTEN** or NON ETHEREUM CHAINS cannot use IN3 functionality.

#### Instructions

> WARNING: There is a lot of script wizardry used to bundle three different modified packages into one example. So if it doesn't work -> it doesn't work. make sure you have `v10.17.0` of Node and `v6.11.3` of npm and `v1.21.1` of yarn.

**TL;DR:**
```
mkdir portis && cd portis
git clone git@git.slock.it:hardware/portis-example.git
git clone git@git.slock.it:hardware/portis-web-sdk.git web-sdk
git clone git@git.slock.it:hardware/portis-provider-engine.git provider-engine
cd web-sdk && git checkout in3-integration && cd ..
cd provider-engine && git checkout in3-integration && cd ..
cd portis-example
yarn port-a-fort
yarn start
```

**Cloning:**
* Create a directory name portis and move into it. `mkdir portis && cd portis`.
* Clone the example repo using `git clone git@git.slock.it:hardware/portis-example.git`.
* Clone the SDK repo using `git clone git@git.slock.it:hardware/portis-web-sdk.git web-sdk`.
* Clone the Provider-Engine repo using `git clone git@git.slock.it:hardware/portis-provider-engine.git provider-engine`

**Branch Switching:**
* Navigate inside the web-sdk folder and checkout branch to `in3-integration`. `cd web-sdk && git checkout in3-integration && cd ..`.
* Navigate inside the provider-engine folder and checkout branch to `in3-integration`. `cd provider-engine && git checkout in3-integration && cd ..`

**Script-Casting:**
* Make sure you move into the example repo. `cd portis-example`.
* **SPELL: PORT-A-FORT** install deps and link deps in all three repos using this command. `yarn port-a-fort`
* Start the react server. `yarn start`.

The React App should open up in a browser window. Inspect the app and switch to the networks tab to see requests fly to the IN3 servers.

**OPPORTUNITIES OF IMPROVEMENTS:**

Portis requires a `nodeUrl` property in the network field for working smoothly. This is because even though they add subproviders on the provider engine their iframe interface internally uses the nodeUrl to communicate to the blockchain. So all the requests that fly outside of the widget use In3 but requests that are relayed through the widget use the `nodeUrl`. The problem lies in the fact that they load this iframe from `widget.portis.io` making it difficult for us to integrate in3 into it. Also it is closed source.

