async function getAllTrade()
{   
    let tradeId = localStorage.getItem("tradeId")
    let [_getAllTrade, trade_status]  = await apiQuery(`/api/trades/${tradeId}`, {}, true, "GET")
    
    // console.log(_getAllTrade)
    // let [_getAllNFT, _status]  = await apiQuery(`/api/trades/${tradeId}/nfts`, {}, true, "GET")
}

async function connectWallet()
{
   let account = await __connectWallet()
   return account
}

setTimeout(()=>{
    document.getElementById("connectWallet").onclick = async function()
    {
        await __connectWallet()
    }

    document.getElementById("submit").onclick = async function(e)
    {
        e.preventDefault()
        let client_address = document.getElementById("client_address").value
        let client_nft_address = document.getElementById("client_nft_address").value
        let client_nft_token_id = document.getElementById("client_nft_token_id").value
        let our_nft_address = document.getElementById("our_nft_address").value
        let our_nft_token_id = document.getElementById("our_nft_token_id").value
        let eth_total = document.getElementById("eth_total").value
        try{
            let account = await connectWallet()
            if(account)
            {
                console.log(client_address, client_nft_address, client_nft_token_id, our_nft_address, our_nft_token_id)
                if(account == client_address)
                {
                    alert("Client Address and yours are not the same!")
                    return
                } 
                
                if(client_address && client_nft_address && client_nft_token_id && our_nft_address && our_nft_token_id && eth_total){
                    let signedOrder = await nftswaper.swapOrder(account, our_nft_address, our_nft_token_id, client_nft_address, client_nft_token_id)
                    document.getElementById("signed_maker_data").value = JSON.stringify(signedOrder)
                    let obj = grabFormData("form_submit")
                    let _url = makeUrl("api/trades")
                    await sendData(_url, obj)
                    alert("Order Successfully Created!")
                }
                else{
                    alert("all of these fields are required! client_address, client_nft_address, client_nft_token_id, our_nft_address, our_nft_token_id, eth_total)")
                }
            }
            else 
            {
                alert("No wallet account found!")
            }
        }
        catch(e)
        {
            alert(e)
        }
    }

}, 200)

function grabFormData(form_id)
{
    let inputs = document.getElementById(form_id).getElementsByTagName("input")
    let obj = {}
    for(let elem of inputs)
    {
        if(elem.getAttribute("type") == "file")
        {
            obj[elem.getAttribute("name")] = elem.files[0];
        }
        else
        {
            obj[elem.getAttribute("name")] = elem.value
        }
    }
    return obj
}
async function sendData(url, data) {
    let formData  = new FormData();
    for(const name in data) {
        console.log(name, data[name]);
        formData.append(name, data[name]);
    }

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    let _data = await response.json()
}

function makeUrl(url)
{
    let _url = null
    if(url.includes("https://")){
        _url = url
    }
    else{
        _url = `http://localhost:5000/${url}`;
        if(window.location.host.endsWith("5500"))
        {
            _url = `http://127.0.0.1:5000/${url}`
        }
        else if(window.location.host != "")
        {
            _url = `https://nfttraderio.pythonanywhere.com/${url}`
        }
    }
    return _url
}

async function __connectWallet()
{
    let account = await getAccount()
    if(account)
    {
        document.getElementById("walletAddr").innerText = account
        document.getElementById("our_address").value = account
        document.getElementById("connectWallet").innerText = "Connected"
    }
    return account
}
// FillOrder()

// 0xC9A44E31e5698B8e374FA765EB26a2F9A5b98908

// 0x645BA282c0566AA79BD7D17781c39ca98154bA1E

// 69

// 0x7Fcb7b9981c70dA5e7395c91a5cd3E72B9b82D9b

// 420