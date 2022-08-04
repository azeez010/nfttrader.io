let [getAllData, _status] = await apiQuery("https://api.trader.xyz/orderbook/orders?chainId=1&status=all", {}, true, "GET")
console.log(getAllData, getAllData.orders)
await apiQuery("api/nft/", getAllData.orders, true, "POST")






// import { Web3Provider } from 'https://cdn.jsdelivr.net/npm/web3-vanilla@latest/dist/web3-vanilla.min.js'
// const { InjectedConnector, NetworkOnlyConnector } = Connectors
 
// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })
 
// const Infura = new NetworkOnlyConnector({
//   providerURL: 'https://mainnet.infura.io/v3/6fecb2ae64334cd4a71a40190d120f31s'
// })
 
// const connectors = { MetaMask, Infura }
// alert(connectors)
// console.log(Web3Provider)