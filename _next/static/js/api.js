async function apiQuery(url, data, auth=false, method="GET")
{
  var request, url;
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

    if(method == "GET")
    {

      if(auth)
      {
        try
        {
          request = await fetch(_url, {
            method: method,
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("token")
            },
          })

          let response = await request.json()
          let status = request.status
          return [response, status]
        }
        catch(e)
        {
          console.log("Error");
          console.log(e)
        }
        
      }
      else
      {
        try
        {
          request = await fetch(_url, {
            method: method,
          })
          let response = await request.json()
          let status = request.status
          return [response, status]
        
        }
        catch(e)
        {
          console.log("Error");
          console.log(e)
        }
      } 
    }
    else
    {
      if(auth)
      {
      try
      {
        request = await fetch(_url, {
          method: method,
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
          body: JSON.stringify(data)
        })
        let response = await request.json()
        let status = request.status
          return [response, status]
      }
        catch(e)
        {
          console.log("Error");
          console.log(e)
        }
  
      }
      else
      {
       try
       {
         request = await fetch(_url, {
           method: method,
           headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
           body: JSON.stringify(data)
         })
 
         let response = await request.json()
         let status = request.status
          return [response, status]
       } 
       catch(e)
        {
          console.log("Error");
          console.log(e)
        }
      }
    }
}


async function getAllUserData()
{
  let account = await getAccount()
  console.log(account)
  // taker=${account}
  let [getAllData, _status] = await apiQuery(`https://api.trader.xyz/orderbook/orders?chainId=1&status=all`, {}, true, "GET")
  console.log(getAllData, _status)
  for(let i = 3; i < getAllData.orders.length; i++)
  {
      console.log(getAllData.orders[i])
      let nftToken = getAllData.orders[i].nftToken
      let nftTokenId = getAllData.orders[i].nftTokenId
      let tokenURI = await getTokenURI(nftToken, nftTokenId)
      console.log(tokenURI)
      getAllData.orders[i].image = tokenURI
  }
  console.log(getAllData.orders)
  await apiQuery("api/nft/", getAllData.orders, true, "POST")
}

