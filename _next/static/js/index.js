web3 = new Web3(window.ethereum);
var balance = "0.0";

function findByText(elem, searchText){
  var aTags = document.getElementsByTagName(elem);
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      return aTags[i];
    }
  }
}

function findByInnerText(topElem, elem, searchText){
  var topElement = document.getElementsByTagName(topElem);
  for (var i = 0; i < topElement.length; i++) {
    var aTags = topElement[i].getElementsByTagName(elem);
    for (var i = 0; i < aTags.length; i++) { 
      if (aTags[i].textContent == searchText) {
        return topElement[i];
      }
    }
  }
}
async function login(account, signature)
{
  let [_response, _status] = await apiQuery("api/login", {
          "email": account,
          "password": signature
        }, false, "POST");

        console.log(_response, _status)
        if(_status == "200") {
          localStorage.setItem("token", _response.data.token);
          verify()
        }
}

async function verify()
{
  let token =  localStorage.getItem("token");
  if(token)
  {
    let [_response, _status] = await apiQuery("api/verify", true, "GET");
    setTimeout(()=>{
      walletIcon = getFirstElement("img", "src", "wallet.64a7740f.svg")
      walletIcon.addEventListener("click", async (e)=>{
        await showWallet()
        modal = getFirstElement("div", "class", "fixed top-0 left-0 w-screen h-screen z-[100] md:z-[40000] md:bg-black/30")
        modal.addEventListener("click", (e)=>{
          if(e.target == modal){
            removePopups()
          }
        })
      }, 500)
    })
    if(_status == "200") {
      localStorage.setItem("nft", JSON.stringify(_response.data))
      accountBarReplace()
      if(_response.data.name){
        findByText("span", "<username not set>").innerText = `@${_response.data.name}`
      }
        balance = await getWalletBalance(_response.data.account)
        await getAllUserData()
        }
        
  }
}

findByText("span", "Connect Wallet").onclick = function(){
  setTimeout(() => {
    var article = document.getElementsByTagName("article");
  console.log(article)
  for (var i = 0; i < article.length; i++) {
    console.log(article[i])
    article[i].addEventListener("click", async (e) => {
      e.preventDefault()
      e.stopImmediatePropagation()
      span = document.getElementsByTagName("span")
      for (var i = 0; i < span.length; i++) { 
        if (span[i].textContent == "MetaMask") {
          let account = await getAccount()
          let [response, _status] = await apiQuery(`api/userNonce?address=${account}`, {}, false, "GET");
          if (_status == 200) {
            let signature = await connectMetamask(response.data)
            login(account, signature)
          }
          else{
            let [response, _status] = await apiQuery("api/create-user", {
              "account": account,
              "name": "user",
            }, false, "POST");
            console.log(response, _status)
            if(_status == "201"){
              let signature = await connectMetamask(response.data.nonce)
              console.log(signature)
              let [update_response, _status] = await apiQuery(`api/user/${response.data.id}`, {
                  "password": `${signature}`,
                  "name": "user"
              }, true, "POST");
              login(account, signature)
            }
          }
        }
      }
    })
  }
  },  
    200);
}



async function connectMetamask(nonce)
{
    let _signature;
    account = await getAccount();
    await web3.eth.sign(web3.utils.sha3(nonce), account , (err, signature)=>{
        _signature = signature
    });
    removeAnyPopup("div", "class", "bg-primary-blue md:bg-black/30 fixed w-full md:flex md:justify-center md:items-center md:top-0 md:left-0 md:h-full")
    return _signature
}

async function getAccount()
{
  let _account;
  let accounts = await web3.eth.getAccounts();
  
  if(accounts.length == 0)
  {
    window.ethereum.enable().then(function(accounts) {
      _account = accounts[0];
    })
    return _account  
  }
  
  _account = await web3.utils.toChecksumAddress(accounts[0]);
  return _account;
}

// async function connectWallet(){

//   let web3; 
//   let ethereum = window.ethereum;

//   if (typeof window.web3 !== 'undefined') {
//        web3 = new Web3(window.web3.currentProvider);
//     } else {
//        web3 = new Web3.providers.HttpProvider(localprovide);
//     }
//     let method = "personal_sign";
//     let accounts = await web3.eth.accounts;
//    s let account = accounts[0];

//     let params = 'KJJD'
//     await web3.eth.sign( params, account , (err, signature)=>{
//         console.log('signature: ' + signature);
//     });
//    // ethereum = new Web3(window.ethereum);

//    ethereum.enable().then(async (accounts) => {
//      // console.log('transfer called.........', accounts[0]);
//       localStorage.setItem('account', accounts[0]);
//     });

//     if (window.web3) {
//       // Subscription register
//       ethereum.on('accountsChanged', async (accounts) => {
//           // Reload to avoid MetaMask bug: "MetaMask - RPC Error: Internal JSON-RPC"
//           window.location.reload();
//       });

//       window.ethereum.on('networkChanged', async (network) => {
//           window.location.reload();
//       });
//   }
// }


// function connectWallet()
// {
//   let rpcURL = "https://mainnet.infura.io/v3/6fecb2ae64334cd4a71a40190d120f31"
//   const provider = new Web3.providers.HttpProvider(rpcURL)
//   let web3 = new Web3(provider)
//   console.log(web3.eth.getBalance())
// }
// var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:4444/'));

// function connect()
// {
//   web3.personal.sign(nonce, web3.eth.coinbase, callback);
// }
//connection with node

// contractAddress and abi are setted after contract deploy
var contractAddress = '0x73ec81da0c72dd112e06c09a6ec03b5544d26f05';
var abi = JSON.parse( '[{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_info","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]' );

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    // alert("No account found! Make sure the Ethereum client is configured properly.");
    
    return;
  }
  else
  {
    verify()
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});

//Smart contract functions
function registerSetInfo() {
  info = $("#newInfo").val();
  contract.methods.setInfo (info).send( {from: account}).then( function(tx) { 
    console.log("Transaction: ", tx); 
  });
  $("#newInfo").val('');
}

function registerGetInfo() {
  contract.methods.getInfo().call().then( function( info ) { 
    console.log("info: ", info);
    document.getElementById('lastInfo').innerHTML = info;
  });    
}



function accountBarReplace()
{
  document.getElementsByTagName("header")[0].firstChild.childNodes[2].remove()
  let frag = document.createElement("fragment")
  let accountBar = `
  <div><div class="flex items-center gap-3 max-h-[40px]"><div class="px-2 py-1 border border-[2px] rounded-full cursor-pointer hover:border-primary-yellow"><div class="Avatar_pfpwrapper__d_Hfu mr-5 flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(1, 114, 140); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(0.609763363223269 -1.4694527106866253) rotate(427.5 16 16)" fill="#1578f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.475789699048331 15.505593688975146) rotate(177.6 16 16)" fill="#f3e700"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(23.27130210280496 10.57253556853056) rotate(98.7 16 16)" fill="#fc193e"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(25.803120619459566 -23.072422999037478) rotate(420.2 16 16)" fill="#f76401"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-xs font-semibold text-primary-yellow"><span class="text-primary-yellow">&lt;username not set&gt;</span></span><span class="rubik text-xxs font-light text-primary-white"><style>.link-custom-4987f26d-f4d5-458c-b1da-49f90d7074ee {
    color: #fff;
  }
  .link-custom-4987f26d-f4d5-458c-b1da-49f90d7074ee::before {
    background-color: #fff;
  }
  </style><a class="link-custom-4987f26d-f4d5-458c-b1da-49f90d7074ee LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${account}">${account.slice(0, 10).toLowerCase()}...${account.slice(-10).toLowerCase()}</a></span></div></div></div><div class="w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-primary-yellow hover:cursor-pointer rounded-full"><img src="/_next/static/media/wallet.64a7740f.svg"></div></div></div>`
  frag.innerHTML = accountBar 
  document.getElementsByTagName("header")[0].firstChild.appendChild(frag)

  
  
  document.getElementsByClassName("px-2 py-1 border border-[2px] rounded-full cursor-pointer hover:border-primary-yellow")[0].onclick = function()
  {
    popupCustomization()
    document.getElementsByClassName("AccountModal_nft__U_A0R w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-white p-2 cursor-pointer")[0].onclick = function()
    {
      nftPopup()
      // alert("gree")
    }
  }
  


  let connectBar = `
  <div><div class="flex justify-between"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 py-3 mr-[10px] false"><span class="false text-sm font-semibold">Buy Crypto</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 py-3 false"><span class="false text-sm font-semibold">Connect Wallet</span></div></div></div>`

  
}

function nftPopup()
{
  let addNFTPopup = `
    <div class="fixed top-0 left-0 w-screen h-screen z-[100] md:z-[40000] md:bg-black/30"><div class="NFTModal_height__djUew fixed top-[72px] md:top-[112px] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-start gap-10 w-full md:w-[520px] bg-white py-10 px-4 md:p-8 md:rounded-2xl md:shadow-2xl md:shadow-primary-dark-blue z-50 overflow-y-auto"><div class="flex flex-col items-center justify-center gap-4"><img src="/_next/static/media/X_blue.6aeb22e2.svg" class="hidden md:block cursor-pointer"><p class="text-xl font-semibold text-primary-blue">Select NFT as Your PFP</p></div><div class="flex flex-col items-center justify-center gap-4 w-full"><div class="SearchBar_insideBorder__vTNXm flex items-center justify-between px-[3px] rounded-[100px] h-[56px] w-full bg-white"><input type="text" class=" text-base font-semibold text-primary-dark-blue w-[100%] outline-0 h-[50px] rounded-[100px] pl-[8px] py-[8px] sm:pl-[24px]" placeholder="Search NFT" value=""><img src="/_next/static/media/default.f8920bcb.svg" class="mr-[12px]"></div></div><div class="flex flex-col items-center justify-center gap-4 w-full"><p class="text-base font-semibold text-primary-dark-blue">Your NFT Collection</p><div>No NFTs Available</div></div><div class="flex select-none justify-center items-center text-center cursor-default  bg-gray-300 text-primary-gray rounded-[100px] px-8 py-4 self-stretch md:self-end mt-auto false"><span class="false text-sm font-semibold">Confirm</span></div></div></div>
  `
  removePopups()
  let header = document.getElementsByTagName("header")[1]
  htmlInjector(header, addNFTPopup)
  setTimeout(()=>{
    getElement("img", "src", "/_next/static/media/X_blue.6aeb22e2.svg")[0].onclick = function()
    {
      removePopups()  
    }
  }, 500)

}

function htmlInjector(element, content)
{
  let frag = document.createElement("fragment")
  frag.innerHTML = content
  element.insertAdjacentElement("afterend", frag)
}

function popupCustomization()
{
  let previousClick = undefined
  let imgSource = undefined
  let popUp = `
  <div class="fixed top-0 left-0 w-screen h-screen z-[100] md:z-[40000] md:bg-black/30"><div class="flex justify-center items-center fixed top-0 left-0 w-full h-full"><div class="
        AccountModal_height__5YeLj
        AccountModal_accountModal__qYlIk 
        relative
        flex
        flex-col
        w-full
        items-center
        justify-start
        gap-10
        bg-primary-blue
        py-10
        px-4
        overflow-y-scroll
        md:p-8
        md:rounded-2xl
        md:shadow-2xl
        md:shadow-primary-dark-blue
        md:w-[520px]"><div class="flex flex-col items-center justify-center gap-4"><img src="/_next/static/media/X.17606240.svg" class="hidden md:block cursor-pointer"><p class="text-xl font-semibold text-white">Personalize Your Profile</p></div><div class="flex flex-col items-center justify-center gap-4 w-full"><p class="text-base font-semibold text-white">Choose A Username</p><div class="SearchBar_insideBorder__vTNXm flex items-center justify-between px-[3px] rounded-[100px] h-[56px] w-full bg-white"><input type="text" class=" text-base font-semibold text-primary-dark-blue w-[100%] outline-0 h-[50px] rounded-[100px] pl-[8px] py-[8px] sm:pl-[24px]" placeholder="username" value=""></div></div><div class="flex flex-col items-center justify-center gap-4 w-full"><p class="text-base font-semibold text-white">Customize Your Avatar</p><div class="grid grid-cols-5 place-items-center gap-y-4 w-full flex-wrap"><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/1.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/2.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/3.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/4.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/5.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/6.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/7.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/8.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/9.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/10.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/11.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/12.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/13.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/14.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/15.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/16.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/17.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-0 cursor-pointer"><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/18.svg" class="w-full h-full"><span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] hidden items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span></div><div class="AccountModal_nft__U_A0R w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-white p-2 cursor-pointer"><img src="/_next/static/media/nft-upload.2e41b91f.svg" class="w-full h-full"></div></div></div><div class="self-stretch flex flex-col gap-3 mt-auto"><div class="flex select-none justify-center items-center text-center cursor-default  bg-gray-300 text-primary-gray rounded-[100px] px-8 py-4 w-full md:w-auto md:self-end false"><span class="false text-sm font-semibold">Save Customizations</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white rounded-[100px] px-8 py-4 block w-full md:hidden false"><span class="false text-sm font-semibold">Customize Later</span></div></div></div></div></div>
  `
  let frag = document.createElement("fragment")
  frag.innerHTML = popUp
  document.getElementsByTagName("header")[1].insertAdjacentElement("afterend", frag)
  let userNameInput = document.getElementsByClassName(" text-base font-semibold text-primary-dark-blue w-[100%] outline-0 h-[50px] rounded-[100px] pl-[8px] py-[8px] sm:pl-[24px]")[0]
  let saveButton = getElement("div", "class", "flex select-none justify-center items-center text-center cursor-default")[0]
  userNameInput.addEventListener("keyup", ()=> {
    
    if(userNameInput.value.length > 0 || previousClick)
    {
      saveButton.setAttribute("class", "flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 w-full md:w-auto md:self-end false")
    }
    else
    {
      saveButton.setAttribute("class", "flex select-none justify-center items-center text-center cursor-default  bg-gray-300 text-primary-gray rounded-[100px] px-8 py-4 w-full md:w-auto md:self-end false")

    }
  })
  let images = getElement("img", "class", "w-full").slice(0, 18)
  
  let checkMark = `<span class="absolute -bottom-[4px] -right-[4px] md:-bottom-[8px] md:-right-[8px] flex items-center justify-center w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-white rounded-full"><img src="/_next/static/media/completed.e4c035a9.svg" class="w-[8px] h-[8px] md:w-[14px] md:h-[14px]"></span>`
  
  

  for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", 
    ()=> {
      if(previousClick == 0 || previousClick || previousClick == i){
        images[previousClick].setAttribute("class", "w-full h-full cursor-pointer")
        images[previousClick].nextSibling.remove()
      }
      if(previousClick == i)
        {
          previousClick = undefined
          imgSource = undefined
          if(userNameInput.value.length < 1)
          {
            saveButton.setAttribute("class", "flex select-none justify-center items-center text-center cursor-default  bg-gray-300 text-primary-gray rounded-[100px] px-8 py-4 w-full md:w-auto md:self-end false")
          }
        }
        else{
          images[i].setAttribute("class", "relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-primary-yellow rounded-full border-[3px] border-white cursor-pointer")
          let checkMarkFrag = document.createElement("fragment")
          checkMarkFrag.innerHTML = checkMark
          images[i].insertAdjacentElement("afterend", checkMarkFrag)
          previousClick = i
          imgSource = images[i].src

          saveButton.setAttribute("class", "flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 w-full md:w-auto md:self-end false")

        }
      
    })
    
  }

  saveButton.addEventListener("click", async ()=>{
    let loader = document.createElement("div");
    loader.setAttribute("class", "flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]")
    loader.innerHTML = `
    <div class="w-[6px] h-[6px] rounded-full bg-primary-blue ButtonLoader_fade60__j64w4"></div><div class="w-[8px] h-[8px] mx-[10px] rounded-full bg-primary-blue ButtonLoader_fade80__sxDG9"></div><div class="w-[10px] h-[10px] rounded-full bg-primary-blue ButtonLoader_fade100__1v13r"></div>
    `
    findByText("span", "Save Customizations").classList.add("invisible")
    saveButton.appendChild(loader)
    let data  = getLocalStorageJson("nft")
    let [update_response, _status] = await apiQuery(`api/user/${data.id}`, {
      "name": userNameInput.value,
      "avatar": imgSource
  }, true, "POST");
    
    removePopups()
    getFirstElement("span", "class", "font-semibold text-xs font-semibold text-primary-yellow").innerText = `@${userNameInput.value}`
  })

  cancelBtn = getFirstElement("img", "src", "X.17606240.svg")
  cancelBtn.onclick = function()
{
  removePopups()
}

modal = getFirstElement("div", "class", "flex justify-center items-center fixed top-0 left-0 w-full h-full")
modal.addEventListener("click", (e)=>{
  if(e.target == modal){
    removePopups()
  }
})
}


function wrongNetwork()
{
  let popup =  `
  <div class="top-0 left-0 w-full h-full fixed z-[30000] bg-black/30 lg:flex lg:justify-center lg:items-center"><div class="ChainModal_chainModal__6aNnB fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"><div class="mb-[40px] text-primary-white"><h3 class="text-2xl font-semibold">Wrong network</h3><p class="rubik text-base font-light">Please select a network supported by the platform.</p></div><div class="flex justify-center items-center"><img class="ChainModal_rotating__7iFtg w-[50px] h-[50px]" src="/_next/static/media/smile.36134bf6.svg"></div></div></div>`
} 

function getElement(elem, attr, name)
{
  let elements = Array.from(document.querySelectorAll(elem)).filter(function(x) {
    if(x.getAttribute(attr)?.includes(name)) return x
  })
  return elements

}

function getFirstElement(elem, attr, name)
{
  let elements = Array.from(document.querySelectorAll(elem)).filter(function(x) {
    if(x.getAttribute(attr)?.includes(name)) return x
  })
  return elements[0]

}


function removePopups()
{
  getElement("div", "class", "fixed top-0 left-0 w-screen h-screen")[0].remove()
}

function removeAnyPopup(elem, attr, name)
{
  getElement(elem, attr, name)[0].remove()
}


function getTrades()
{

}

function sendTradesToadmin()
{

}


function getLocalStorageJson(name){
  return JSON.parse(localStorage.getItem(name))
}


async function showWallet()
{
  let _createDiv = document.createElement("div");
  let walletHTML = `<div class="fixed top-0 left-0 w-screen h-screen z-[100] md:z-[40000] md:bg-black/30"><div class="BalanceModal_balanceModal__GS5Ol w-full fixed top-[72px] md:top-[112px] md:right-[24px] flex flex-col justify-start overflow-y-scroll gap-12 bg-primary-blue py-10 px-4 z-50 md:gap-6 md:w-[300px] md:p-6 md:rounded md:shadow-2xl md:shadow-primary-dark-blue md:overflow-y-initial"><div class="flex md:hidden items-center justify-start gap-4 w-full p-2 border border-white rounded-full"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[60px] h-[60px]"><div class="hidden w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(1, 114, 140); height: 60px; width: 60px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="60" width="60"><rect x="0" y="0" rx="0" ry="0" height="60" width="60" transform="translate(1.1433063060436293 -2.7552238325374225) rotate(427.5 30 30)" fill="#1578f2"></rect><rect x="0" y="0" rx="0" ry="0" height="60" width="60" transform="translate(8.39210568571562 29.072988166828402) rotate(177.6 30 30)" fill="#f3e700"></rect><rect x="0" y="0" rx="0" ry="0" height="60" width="60" transform="translate(43.63369144275931 19.8235041909948) rotate(98.7 30 30)" fill="#fc193e"></rect><rect x="0" y="0" rx="0" ry="0" height="60" width="60" transform="translate(48.38085116148669 -43.26079312319528) rotate(420.2 30 30)" fill="#f76401"></rect></svg></div></div><div class="block  rounded-full w-[60px] h-[60px]" style="background-image: url(&quot;https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/avatar/5.svg&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col items-start justify-center"><span class="font-semibold text-lg text-primary-gray">&lt;username not set&gt;</span><span class="text-sm text-white cursor-pointer"><a class=" LinkComponent_link__B8Cf5 LinkComponent_white__wctmo font-regular cursor-pointer " target="" href="/mytrades">edit profile</a></span></div></div><div class="flex flex-col justify-center items-center md:items-end"><p class="text-base font-semibold text-white md:text-xs">Connected wallet address</p><p class="rubik text-base font-light text-white mt-[8px] md:mt-[8px]"><a class=" LinkComponent_link__B8Cf5 LinkComponent_white__wctmo font-light cursor-pointer " target="_blank" href="https://etherscan.io/address/${account}">${account.slice(0, 10).toLowerCase()}...${account.slice(-10).toLowerCase()}</a></p></div><hr><div class="flex flex-col justify-center items-start md:items-end gap-4"><p class="self-center md:self-end text-base font-semibold text-white md:text-xs">Balance</p><div class="flex flex-row-reverse md:flex-row items-center justify-center gap-4"><div class="flex flex-col items-start md:items-end justify-center"><p class="flex items-center justify-end gap-2"><span class="text-lg font-semibold text-white" title="0.0">${balance}</span><span class="text-base font-semibold text-white">ETH</span></p><p class="text-base font-semibold text-primary-gray">$0.00 USD</p></div><img src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/gif/nativeToken/ETH.png" class="w-8 h-8"></div></div><div class="flex flex-col justify-center gap-3 mt-auto"><div class="md:hidden"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 w-full false"><span class="false text-sm font-semibold">Buy Crypto</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white rounded-[100px] px-8 py-4 w-full mt-[48px] false"><span class="false text-sm font-semibold">Disconnect</span></div></div><div class="hidden md:block"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 w-full false"><span class="false text-sm font-semibold">Buy Crypto</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white rounded-[100px] px-4 py-2 w-full mt-[48px] false"><span class="false text-sm font-semibold">Disconnect</span></div></div></div></div></div>`
  _createDiv.innerHTML = walletHTML
  document.getElementsByTagName("header")[1].insertAdjacentElement("afterend", _createDiv)
}

async function getWalletBalance(wallet)
{
  let walletBalance = await web3.eth.getBalance(wallet)
  if (walletBalance != "0")
  {
    walletBalance = parseFloat(walletBalance)
    walletBalance = walletBalance.toFixed(2)
    return walletBalance
  }
  return "0.0";

}