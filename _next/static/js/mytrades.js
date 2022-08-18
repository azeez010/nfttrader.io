async function getTrades()
{
    let account = await getAccount()
    await resultsTab()
    if(account)
    {
        try{
            getElement("h1", "class", "text-3xl text-primary-dark-blue font-semibold")[0].innerText = "No Results"
            getElement("h3", "class", "text-base font-light text-primary-dark-blue")[0].innerText = "Please try again."
        }
        catch(e)
        {
            console.log("nothing...")
        }
    }


    
    let [_getAllTrades, _status]  = await apiQuery(`/api/client-trades/${account}`, {}, true, "GET")
    _getAllTrades = _getAllTrades.data
    
    for(let i = 0; i < _getAllTrades.length; i++)
    {
        if( _getAllTrades[i].status == "False")
        {
            let data = _getAllTrades[i]
            a = document.createElement("div")
            a.setAttribute("class", "max-w-[1280px] px-4 m-auto mt-4 md:mt-12 md:px-10 xl:px-0")
            a.innerHTML = `<section class="flex flex-col justify-start p-[24px] md:pt-[32px] md:pb-[40px] md:pl-[40px] md:pr-[40px] bg-primary-white rounded-2xl shadow-3xl"><div class="flex justify-between items-center"><h3 class="text-lg font-semibold text-primary-dark-blue md:text-xl">Active Trades</h3><div class="flex justify-center items-center w-[30px] h-[30px] select-none bg-primary-blue rounded-full cursor-pointer hover:bg-primary-dark-blue"><img src="/_next/static/media/refresh.fbdcb619.svg" class="w-[16px] h-[16px]"></div></div><div class="w-full mt-[24px]"><section class="flex flex-col items-start mt-[24px] md:mt-[32px] lg:flex-row-reverse"><div class="flex justify-between items-center w-full lg:mt-[auto] lg:ml-[16px] relative"><div class="flex items-center justify-center px-[16px] py-[4px] border-[1px] border-state-success border-solid rounded-[36px]"><span class="text-sm font-semibold text-state-success">New Request</span></div><div class="rounded-full bg-primary-blue flex items-center w-[36px] h-[36px] justify-center cursor-pointer hover:bg-primary-dark-blue select-none md:hidden"><img src="/_next/static/media/eye_white.cfde6143.svg" class="w-[16px] h-[16px]"></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue rounded-[100px] px-4 py-2 hidden md:flex false"><span class="false text-sm font-semibold">Check Deal</span><span class="flex w-[24px] h-[24px] ml-[8px]"><img src="/_next/static/media/eye_white.cfde6143.svg" class="w-[24px] h-[24px] "></span></div></div><div class="mt-[20px] flex justify-start items-center lg:mt-[0px] lg:h-[40px] lg:min-w-[210px]"><span class="rubik text-sm font-light text-primary-dark-blue">from:</span><div class="Avatar_pfpwrapper__d_Hfu w-[24px] h-[24px] ml-[8px] mr-[8px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(3.3350520121932585 6.400408151236704) rotate(113.6 12 12)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-1.756712067567932 13.182702091894539) rotate(176.9 12 12)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-3.4499679901449696 -17.699744084746825) rotate(414.1 12 12)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-28.986118637164644 7.939190732767234) rotate(278.6 12 12)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[24px] h-[24px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><span class="text-primary-gray text-sm"><style>.link-custom-d1328636-82f6-4f78-9326-c95de1541673 {
                color: #979dac;
                      }
                      .link-custom-d1328636-82f6-4f78-9326-c95de1541673::before {
                        background-color: #979dac;
                      }
                      </style><a class="link-custom-d1328636-82f6-4f78-9326-c95de1541673 LinkComponent_link__B8Cf5  font-light cursor-pointer text-sm" target="_blank" href="https://etherscan.io/address/${data.our_fake_address}">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</a></span></div><div class="mt-[24px] flex justify-start items-center w-full lg:w-[280px] lg:mt-[auto] lg:flex-none"><div class="relative" style="min-width: 50px;"><div class="rounded-full relative w-[40px] h-[40px] absolute" style="background-image: url(&quot;${data.our_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center; top: -20px; left: 0px; position: absolute;"></div></div><div class="flex justify-between items-center mx-[16px]"><div class="Avatar_pfpwrapper__d_Hfu w-[16px] h-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[16px] h-[16px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 16px; width: 16px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="16" width="16"><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(2.223368008128839 4.266938767491135) rotate(113.6 8 8)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-1.171141378378621 8.788468061263025) rotate(176.9 8 8)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-2.299978660096646 -11.799829389831215) rotate(414.1 8 8)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-19.324079091443096 5.292793821844823) rotate(278.6 8 8)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[16px] h-[16px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg" class="w-[40px] h-[40px] ml-[8px] mr-[8px]"><div class="Avatar_pfpwrapper__d_Hfu w-[16px] h-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[16px] h-[16px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 16px; width: 16px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="16" width="16"><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(4.140566079579514 2.178217381595476) rotate(149.6 8 8)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(4.856022306998696 7.766295898826808) rotate(109.0 8 8)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(14.05997491803654 4.590586852065016) rotate(113.0 8 8)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-0.4469200409755079 16.52333550936869) rotate(212.1 8 8)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[16px] h-[16px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div></div><div class="relative"><div class="rounded-full relative w-[40px] h-[40px]" style="background-image: url(&quot;${data.client_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center; top: -20px; left: 0px; position: absolute;"></div></div></div></section></div><div class="flex justify-center items-center mt-[60px]"></div></section>`
            document.getElementsByClassName("bg-primary-yellow")[1].insertAdjacentElement("afterend", a)
            
            
            
            document.getElementsByClassName("flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue rounded-[100px] px-4 py-2 hidden md:flex false")[0].onclick = function()
            {
                let page = createBuyPopPage(_getAllTrades[i])
                document.getElementById("__next").appendChild(page)
                document.getElementsByClassName("flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 lg:px-8 lg:py-4 false")[1].onclick = async function(){
                    findByText("span", "Approve").innerText = "Approving"
                    findByText("span", "Approve").innerHTML = "Approving"
                    let img = document.createElement("img")
                    let approve = findByText("span", "Approving")
                    img.setAttribute("class", "StepperMenu_rotating__FYV7e w-[16px] h-[16px] ml-[9px]")
                    img.setAttribute("src", "/_next/static/media/loader_wallet.f7553063.svg")
                    approve.insertAdjacentElement("afterend", img)
                    document.getElementsByTagName("header")[1].insertAdjacentElement("afterend", approveModal)
                    document.getElementsByClassName("px-[16px] lg:p-[48px]")[1].insertAdjacentElement("afterend", approveModal)
                    setTimeout(()=>{
                        removeAnyPopup("div", "class", "flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]")
                        removeAnyPopup("div", "class", "flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]")
                        paymentPage(_getAllTrades[i])
                    }, 1000)
                    
                } 
    
                // Cancel Modal
                document.getElementsByClassName("flex items-center justify-center w-[40px] h-[40px] mr-[10px]")[1].onclick = function(){
                    document.getElementsByClassName("px-[16px] lg:p-[48px]")[1].insertAdjacentElement("afterend", cancelModal)
    
                    document.getElementsByClassName("flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white rounded-[100px] px-8 py-4 undefined false")[0].onclick = function()
                    {
                        removeAnyPopup("div", "class", "ActionModal_overlay__uWRIX lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]" )
                    }
    
                    document.getElementsByClassName("flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 mb-[16px] lg:mb-[auto] false")[0].onclick = function()
                    {
                        removeAnyPopup("div", "class", "ActionModal_overlay__uWRIX lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]" )
                        window.location.href = "/mytrades"
                    }
                }
            }
        }
        
    }
}
    

function createFullBackgroundImage()
{
    let image = document.createElement("img")
    image.setAttribute("src", "/_next/static/media/congrat_page.png")
    image.setAttribute("class", "h-screen w-full z-100 overflow-hidden")
    let eElement = document.getElementById("__next")
    for(let i= 0; i < eElement.children.length; i++){
        eElement.children[i].remove()
    }
    eElement.insertBefore(image, eElement.firstChild);

    setTimeout(()=>{
        image.remove()
        window.location.href = "/mytrades.html"
    }, 2000)
}


function paymentPage(__data)
{
    let pay =  `
        <div class="flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]"><div class="TradeModal_tradeModal__W1lDh relative w-full h-full bg-primary-white lg:bg-primary-white false"><div class="StepperMenu_stepperMenu__tNMDj flex justify-between items-center flex-w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] lg:h-[88px]"><div class="w-full flex justify-center"><img src="/_next/static/media/logo_negative.75c9307e.svg" class="w-[170px] h-[auto] lg:w-[187px]"></div></div><section class="TradeModal_mainSection__FOzBg bg-primary-white lg:bg-primary-white lg:max-w-[1920px] overflow-y-scroll false"><div class="px-[16px] lg:p-[48px]"><section class="mt-[32px] lg:mt-[16px]"><div class="text-center"><h3 class="text-primary-blue text-2xl font-semibold">Proceed With Payment To Complete This Trade</h3></div><div class="mt-[40px] text-center"><h4 class="text-primary-dark-blue font-semibold text-xl">Transaction Calculation</h4></div><div class="mt-[32px] flex justify-center"><div class="w-[343px] flex flex-col justify-center items-center md:w-[464px]"><div class="w-[95%] flex justify-between"><span class="text-primary-dark-blue text-sm font-semibold">Estimated Gas Price</span><span class="text-primary-dark-blue text-base font-semibold text-right">0.000000000000350366 ETH</span></div><div class="w-[95%] flex justify-between mt-[16px] relative"><span class="flex justify-between items-center text-primary-dark-blue text-sm font-semibold"><span class="mr-[4px]">Platform fee</span><img src="/_next/static/media/info.ea4bf384.svg" class="w-[16px] h-[16px] cursor-pointer"></span><span class="text-primary-dark-blue text-base font-semibold text-right">0.005 ETH</span></div><div class="flex justify-between items-center mt-[16px] w-full px-[10px] h-[50px] border-[1px] border-primary-blue border-solid rounded-[16px]"><span class="text-primary-blue text-sm font-semibold">Zero fees forever?</span><span class="text-primary-blue text-right"><a class=" LinkComponent_link__B8Cf5 LinkComponent_blue__vKzQ0 font-regular cursor-pointer " target="_blank" href="/tradesquads">Mint a TradeSquad</a></span></div><div class="mt-[32px] w-full h-[1px] bg-[#D5D8DE] lg:mt-[28px]"></div><div class="flex justify-between items-center mt-[34px] w-[95%] lg:mt-[30px]"><span class="text-primary-dark-blue text-base font-semibold">Total you will pay</span><span class="text-primary-dark-blue font-semibold text-base lg:text-base">~0.005000000000350366 ETH</span></div><div class="flex flex-col justify-center items-center w-full mt-[64px] mb-[97px]"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue rounded-[100px] px-8 py-4 w-full false"><span class="false text-sm font-semibold">Proceed with payment</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue border border-solid border-primary-blue transition-colors ease-in-out duration-500 hover:text-primary-dark-blue hover:border-primary-dark-blue active:text-primary-blue active:border-primary-blue rounded-[100px] px-8 py-4 w-full mt-[16px] false"><span class="false text-sm font-semibold">Close</span></div></div></div></div></section></div></section></div></div>
    `
    let loader = `
    <div class="flex select-none justify-center items-center text-center cursor-default  bg-primary-blue rounded-[100px] px-8 py-4 w-full relative"><span class="invisible text-sm font-semibold">Proceed with payment</span><div class="flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"><div class="w-[6px] h-[6px] rounded-full bg-primary-white ButtonLoader_fade60__j64w4"></div><div class="w-[8px] h-[8px] mx-[10px] rounded-full bg-primary-white ButtonLoader_fade80__sxDG9"></div><div class="w-[10px] h-[10px] rounded-full bg-primary-white ButtonLoader_fade100__1v13r"></div></div></div><div class="w-full"><div class="flex select-none justify-center items-center text-center cursor-default  bg-primary-white border border-solid border-primary-gray text-primary-gray rounded-[100px] px-8 py-4 w-full mt-[16px] false"><span class="false text-sm font-semibold">Close</span></div></div>
    `
    let header = document.getElementsByTagName("header")[1]
    
    htmlInjector(header, pay)
    
    document.getElementsByClassName("flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue rounded-[100px] px-8 py-4 w-full false")[0].onclick = async function()
    {
        this.getElementsByTagName("span")[0].classList.add("invisible")
        let h = document.getElementsByClassName(`flex flex-col justify-center items-center w-full mt-[64px] mb-[97px]`)[0]
        htmlAppender(h, loader)   

        // Approve transactions
        await fulfillOrders(__data) 
    }
    
}

function resultContent(data)
{
    let eachResult = `
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0"><div class="flex flex-col lg:flex-row justify-center gap-[20px] xl:gap-[40px]"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
    .jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6 {
      width: 32px;
      height: 32px;
    }

    .jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1 {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6 {
            display: none;
          }

          .jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1 {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(5.558420020322098 10.667346918727839) rotate(113.6 20 20)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-2.9278534459465533 21.971170153157566) rotate(176.9 20 20)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-5.7499466502416166 -29.499573474578042) rotate(414.1 20 20)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-48.31019772860774 13.231984554612058) rotate(278.6 20 20)" fill="#f1d302"></rect></svg></div></div></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg"><span class="text-primary-gray">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e {
        color: #979dac;
      }
      .link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e::before {
        background-color: #979dac;
      }
      </style><a class="link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${data.our_fake_address}">${data.our_fake_address.toLowerCase().slice(0,10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div><img src="/_next/static/media/dashed-line.108c130c.svg" class="hidden lg:block"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
    .jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8 {
      width: 32px;
      height: 32px;
    }

    .jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8 {
            display: none;
          }

          .jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg"><span class="text-primary-gray">${ JSON.parse(localStorage.getItem("nft")).name ? "@" + JSON.parse(localStorage.getItem("nft")).name : "&lt;username not set&gt;"}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a {
        color: #979dac;
      }
      .link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a::before {
        background-color: #979dac;
      }
      </style><a class="link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${account}">${data.client_address.toLowerCase().slice(0, 10)}...${data.client_address.toLowerCase().slice(-10)}</a></span></div></div></div><div class="flex items-center justify-center gap-2 sm:gap-6"><div class="flex items-center justify-center"><div style="width: 106.667px;"><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;${data.our_nft_icon}&quot;); background-position: center center; background-size: cover;"></div></div><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/gif/nativeToken/ETH.png&quot;); background-position: center center; background-size: cover;"></div></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg"><div class="flex items-center justify-center"><div style="width: 80px;"><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;${data.client_nft_icon}&quot;); background-position: center center; background-size: cover;"></div></div></div></div></div></div>
    `
    return eachResult
}

async function resultsTab()
{
    let allResult = `
    <div class="infinite-scroll-component__outerdiv"><div class="infinite-scroll-component flex flex-col justify-center items-center gap-8 py-[30px]" style="height: auto; overflow: auto;"><div class="rounded-2xl rounded-tr-[0px] shadow-xl hover:shadow-2xl max-w-[1280px] w-full"><div class="bg-primary-yellow rounded-2xl rounded-tr-[0px]"><div class="flex flex-col justify-start gap-[40px] rounded-b-2xl cursor-pointer rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]"><div class="hidden items-start md:items-center justify-between"><div class="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center"><div class="flex items-center justify-center gap-4"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
    .jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c {
      width: 24px;
      height: 24px;
    }

    .jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5 {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c {
            display: none;
          }

          .jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5 {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(3.3350520121932585 6.400408151236704) rotate(113.6 12 12)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-1.756712067567932 13.182702091894539) rotate(176.9 12 12)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-3.4499679901449696 -17.699744084746825) rotate(414.1 12 12)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-28.986118637164644 7.939190732767234) rotate(278.6 12 12)" fill="#f1d302"></rect></svg></div></div><div class="jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(5.558420020322098 10.667346918727839) rotate(113.6 20 20)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-2.9278534459465533 21.971170153157566) rotate(176.9 20 20)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-5.7499466502416166 -29.499573474578042) rotate(414.1 20 20)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-48.31019772860774 13.231984554612058) rotate(278.6 20 20)" fill="#f1d302"></rect></svg></div></div></div><div class="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg" class="w-[24px] h-[24px] sm:w-auto sm:h-auto"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
    .jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c {
      width: 24px;
      height: 24px;
    }

    .jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700 {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c {
            display: none;
          }

          .jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700 {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(6.210849119369271 3.2673260723932143) rotate(149.6 12 12)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(7.284033460498045 11.649443848240212) rotate(109.0 12 12)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(21.08996237705481 6.885880278097525) rotate(113.0 12 12)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-0.6703800614632619 24.785003264053035) rotate(212.1 12 12)" fill="#15a2f2"></rect></svg></div></div><div class="jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div></div><div class="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div></div><div class="flex items-center justify-center gap-1"><a class=" LinkComponent_link__B8Cf5 LinkComponent_blue__vKzQ0 font-regular cursor-pointer text-sm" target="_blank" href="https://etherscan.io/tx/0xf65ffb8fa8fc446e7566861f6e041cdbb7e32727a784df47291ba9214a928aa3">View On Etherscan</a><img src="/_next/static/media/external-link.138689a9.svg"></div></div><img src="/_next/static/media/X_blue.6aeb22e2.svg" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer"></div><div class="flex items-center justify-between"><div class="flex items-center justify-start gap-4"><div class="flex flex-col items-start justify-center sm:flex-row sm:items-center"><div class="flex items-center justify-center mb-[16px] sm:mb-[0px] sm:mr-[16px]"><span class="text-sm font-semibold text-white bg-primary-blue py-1 px-4 rounded-full mr-[8px]">Direct Deal</span><span class="text-sm font-semibold py-1 px-4 rounded-full border-[1px] sm:ml-[8px] text-primary-blue border-primary-blue">Closed</span></div><span class="text-sm font-light text-primary-dark-blue rubik">Wed Aug 10 2022 12:53:25 </span></div></div></div></div></div><div class="hidden flex-col justify-start gap-8 px-6 md:px-[40px] md:pr-[48px] md:pb-[48px] pb-8 bg-primary-white rounded-b-2xl"><hr class="w-full h-[1px] bg-primary-gray opacity-40 border-0"><div class="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0"><p class="text-lg font-semibold text-primary-dark-blue m-0">Initiator’s Digital Assets</p><div class="Avatar_pfpwrapper__d_Hfu  flex flex-row-reverse items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
    .jazzicon-container-b7d70b54-4261-48ac-a5e3-67d977893d14 {
      width: 32px;
      height: 32px;
    }

    .jazzicon-container-1e30ae86-5766-4178-af17-efa5141f8bf3 {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-b7d70b54-4261-48ac-a5e3-67d977893d14 {
            display: none;
          }

          .jazzicon-container-1e30ae86-5766-4178-af17-efa5141f8bf3 {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-b7d70b54-4261-48ac-a5e3-67d977893d14"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="jazzicon-container-1e30ae86-5766-4178-af17-efa5141f8bf3"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(5.558420020322098 10.667346918727839) rotate(113.6 20 20)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-2.9278534459465533 21.971170153157566) rotate(176.9 20 20)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-5.7499466502416166 -29.499573474578042) rotate(414.1 20 20)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-48.31019772860774 13.231984554612058) rotate(278.6 20 20)" fill="#f1d302"></rect></svg></div></div></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue text-right sm:text-lg"><span class="text-primary-gray">${ JSON.parse(localStorage.getItem("nft")).name ? "@" + JSON.parse(localStorage.getItem("nft")).name : "&lt;username not set&gt;"}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-6cc8041e-e5bd-4358-822f-1c5ecfc87b2f {
        color: #979dac;
      }
      .link-custom-6cc8041e-e5bd-4358-822f-1c5ecfc87b2f::before {
        background-color: #979dac;
      }
      .jazzicon-container-8e792b79-bac3-49a8-a097-393ff7dd7876 {
      width: 32px;
      height: 32px;
    }

    .jazzicon-container-7f423460-38b6-43c5-a3c2-eec2df6a21d2 {
        display: none
      }

    @media(min-width : 640px) {
          .jazzicon-container-8e792b79-bac3-49a8-a097-393ff7dd7876 {
            display: none;
          }

          .jazzicon-container-7f423460-38b6-43c5-a3c2-eec2df6a21d2 {
            display: flex;
          }
        }
  </style><div class="jazzicon-container-8e792b79-bac3-49a8-a097-393ff7dd7876"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="jazzicon-container-7f423460-38b6-43c5-a3c2-eec2df6a21d2"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div></span></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue text-right sm:text-lg"><span class="text-primary-gray">${ JSON.parse(localStorage.getItem("nft")).name ? "@" + JSON.parse(localStorage.getItem("nft")).name : "&lt;username not set&gt;"}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-5ab9e316-d485-459c-bf78-4746985886c1 {
        color: #979dac;
      }
      .link-custom-5ab9e316-d485-459c-bf78-4746985886c1::before {
        background-color: #979dac;
      }
      
    </style></span></div></div></div></div></div></div>
      
    `

    
    let [_getAllTrades, _status]  = await apiQuery(`/api/client-trades/${account}`, {}, true, "GET")
    _getAllTrades = _getAllTrades.data
    _getAllTrades = _getAllTrades.filter((x) => x.status === "True")
    
    if(_getAllTrades.length > 0)
    {
        console.log("com", _getAllTrades)
        removeAnyPopup("div", "class", "flex flex-col items-center justify-center gap-10 pb-[50px]")
        let resultsElem = document.getElementsByClassName("flex flex-col justify-between gap-4 mt-[20px] max-w-[1280px] m-[auto] p-4 md:flex-row md:p-12 md:gap-0 md:items-center")[0]
        htmlInjector(resultsElem, allResult)
        let _resElem = document.getElementsByClassName("flex flex-col justify-start gap-[40px] rounded-b-2xl cursor-pointer rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]")[0]
        
        for(let i = 0; i < _getAllTrades.length; i++)
        {
            if( _getAllTrades[i].status == "True")
            {
                htmlAppendInjector(_resElem, resultContent(_getAllTrades[i]) )
            }
        }
    }
}


function htmlAppender(element, content)
{
    element.innerHTML = content
    // // let frag = document.createElement("fragment")
    // // frag.setAttribute("class", attr)
    // // frag.innerHTML = content
    // element.appendChild(frag)      
}

function htmlAppendInjector(element, content)
{
  let frag = document.createElement("fragment")
  frag.innerHTML = content
  element.appendChild(frag)
}

function htmlInjector(element, content)
{
  let frag = document.createElement("fragment")
  frag.innerHTML = content
  element.insertAdjacentElement("afterend", frag)
}

async function fulfillOrders(data)
{
    let account = await getAccount()
    let signedMaker =  JSON.parse(data.signed_maker_data)
    let client_nfts = JSON.parse(data.client_nft_data)
    await nftswaper.fillOrder(account, client_nfts, signedMaker)
    await apiQuery(`api/update-trades/${data.id}`, {status: "True"}, true, "POST")
    createFullBackgroundImage()
}

function createBuyPopPage(data)
{
    let b = document.createElement("div")
    b.innerHTML = `
        <div class="false"><div class="flex items-center justify-center w-full h-[48px] relative z-[10000] bg-primary-dark-blue false false false"><div class="flex justify-between items-center"><div class="text-primary-white false false false"> <div class="relative w-full overflow-hidden text-clip whitespace-nowrap flex items-center text-sm font-semibold w-[270px] h-[48px] sm:w-[610px] lg:w-[914px] xl:w-[1124px]"><style>
                .marquee-48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 {
                    -webkit-animation: marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 5s linear infinite;
                    -moz-animation: marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 5s linear infinite;
                    -ms-animation: marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 5s linear infinite;
                    -o-animation: marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 5s linear infinite;
                    animation: marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 5s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 {
                    to {
                        transform: translateX(-6px)
                    }
                }
    
                @-moz-keyframes marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 {
                    to {
                        transform: translateX(-6px)
                    }
                }
    
                @-webkit-keyframes marquee_text_48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 {
                    to {
                        transform: translateX(-6px)
                    }
                }
            </style><div class="absolute marquee-48f865fe-7d0b-40b1-93e4-aba3b6ab2dd1 " title="Welcome to the new nfttrader.io website. If you want to recover the assets deposited on our old website, please contact us on Discord or mail us to info@nfttrader.io">Welcome to the new nfttrader.io website. If you want to recover the assets deposited on our old website, please contact us on Discord or mail us to info@nfttrader.io</div></div> </div><img src="/_next/static/media/close_white.ffb37162.svg" class="w-[12px] h-[12px] absolute right-[24px] cursor-pointer"></div></div></div><header class="hidden bg-primary-white md:block sticky top-0 w-full z-[9999]"><div class="flex bg-primary-blue relative z-10 px-[24px] h-[88px] justify-between items-center "><div><img src="/_next/static/media/logo_negative.75c9307e.svg" class="w-[192px] cursor-pointer"></div><nav class="flex h-[100%]"><ul class="flex h-[100%] text-primary-white font-semibold hover:cursor-pointer"><li class="inline flex h-[100%] items-center relative"><span class="flex h-[100%] items-center hover:text-primary-yellow HeaderDesktop_menuFontSmall__age8u"><a href="/">Home</a></span></li><li class="inline flex h-[100%] items-center md:mx-[28px] lg:mx-[48px] relative"><div class="absolute top-[0px] w-[72px] h-[8px] bg-primary-yellow rounded-b-[100px] HeaderDesktop_menuOutlineTradingCenter__WiqyC"></div><span><span class="flex h-[100%] items-center hover:text-primary-yellow
                          text-primary-white HeaderDesktop_menuFontSmall__age8u">Trading Center<svg width="8.66" height="5" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-[4px]"><path d="M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z" fill="white"></path></svg></span></span></li><li class="inline flex h-[100%] items-center relative"><span><span class="flex h-[100%] items-center hover:text-primary-yellow
                          text-primary-white HeaderDesktop_menuFontSmall__age8u">More<svg width="8.66" height="5" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-[4px]"><path d="M12.6699 19.8564L0.669922 6L24.6699 6L12.6699 19.8564Z" fill="white"></path></svg></span></span></li></ul></nav><div><div class="flex items-center gap-3 max-h-[40px]"><div class="px-2 py-1 border border-[2px] rounded-full cursor-pointer hover:border-primary-yellow"><div class="Avatar_pfpwrapper__d_Hfu mr-5 flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-xs font-semibold text-primary-yellow"><span class="text-primary-yellow">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-xxs font-light text-primary-white"><style>.link-custom-837988fa-6eef-4788-8e66-f5345a9c8186 {
                color: #fff;
              }
              .link-custom-837988fa-6eef-4788-8e66-f5345a9c8186::before {
                background-color: #fff;
              }
              </style><a class="link-custom-837988fa-6eef-4788-8e66-f5345a9c8186 LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${account}">${account.toLowerCase().slice(0, 10)}...${account.toLowerCase().slice(-10)}</a></span></div></div></div><div class="w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-primary-yellow hover:cursor-pointer rounded-full"><img src="/_next/static/media/wallet.64a7740f.svg"></div></div></div></div></header><header class="block bg-primary-white sticky select-none top-0 w-full z-[9999] md:hidden"><div class="flex relative z-10 justify-between items-center bg-primary-blue h-[72px] px-[16px] "><img src="/_next/static/media/logo_negative.75c9307e.svg" class="w-[170px] h-[40px] cursor-pointer"><div class="flex items-center justify-center gap-2"><div class="w-[40px] h-[40px] cursor-pointer"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[40px] h-[40px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[40px] h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div></div><svg class="cursor-pointer" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="white"></path><g clip-path="url(#clip0_357_110)"><path d="M7.79993 9H16.1999V10.05H7.79993V9Z" fill="#2D00F7"></path><path d="M7.79993 11.4502H16.1999V12.5002H7.79993V11.4502Z" fill="#2D00F7"></path><path d="M16.1999 13.8998H7.79993V14.9498H16.1999V13.8998Z" fill="#2D00F7"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4C18.296 23.4 23.4 18.296 23.4 12C23.4 5.70395 18.296 0.6 12 0.6C5.70395 0.6 0.6 5.70395 0.6 12C0.6 18.296 5.70395 23.4 12 23.4ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#2D00F7"></path><defs><clipPath id="clip0_357_110"><rect width="9.6" height="9.6" fill="white" transform="translate(7.19995 7.20001)"></rect></clipPath></defs></svg></div></div></header><main><div class="bg-primary-yellow"><div class="bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]"><div class="m-auto max-w-[95%] px-[48px]"><div class="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center"><div><p class="text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold">Your Hub &amp; Trades</p><p class="rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]">This is your personal Trade hub page. Here you can conveniently create deals, cancel them and update your Trader counterparty.</p></div><div class="mb-[31px] md:mb-[0px]"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 undefined false"><span class="false text-sm font-semibold">Create Trade</span></div></div></div></div></div></div><div class="max-w-[1280px] px-4 m-auto mt-4 md:mt-12 md:px-10 xl:px-0"><section class="flex flex-col justify-start p-[24px] md:pt-[32px] md:pb-[40px] md:pl-[40px] md:pr-[40px] bg-primary-white rounded-2xl shadow-3xl"><div class="flex justify-between items-center"><h3 class="text-lg font-semibold text-primary-dark-blue md:text-xl">Active Trades</h3><div class="flex justify-center items-center w-[30px] h-[30px] select-none bg-primary-blue rounded-full cursor-pointer hover:bg-primary-dark-blue"><img src="/_next/static/media/refresh.fbdcb619.svg" class="w-[16px] h-[16px]"></div></div><div class="w-full mt-[24px]"><section class="flex flex-col items-start mt-[24px] md:mt-[32px] lg:flex-row-reverse"><div class="flex justify-between items-center w-full lg:mt-[auto] lg:ml-[16px] relative"><div class="flex items-center justify-center px-[16px] py-[4px] border-[1px] border-state-success border-solid rounded-[36px]"><span class="text-sm font-semibold text-state-success">1d 20h 20m  left</span></div><div class="rounded-full bg-primary-blue flex items-center w-[36px] h-[36px] justify-center cursor-pointer hover:bg-primary-dark-blue select-none md:hidden"><img src="/_next/static/media/eye_white.cfde6143.svg" class="w-[16px] h-[16px]"></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white transition-colors ease-in-out duration-500 hover:bg-primary-dark-blue active:bg-primary-blue rounded-[100px] px-4 py-2 hidden md:flex false"><span class="false text-sm font-semibold">Check Deal</span><span class="flex w-[24px] h-[24px] ml-[8px]"><img src="/_next/static/media/eye_white.cfde6143.svg" class="w-[24px] h-[24px] "></span></div></div><div class="mt-[20px] flex justify-start items-center lg:mt-[0px] lg:h-[40px] lg:min-w-[210px]"><span class="rubik text-sm font-light text-primary-dark-blue">from:</span><div class="Avatar_pfpwrapper__d_Hfu w-[24px] h-[24px] ml-[8px] mr-[8px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(3.3350520121932585 6.400408151236704) rotate(113.6 12 12)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-1.756712067567932 13.182702091894539) rotate(176.9 12 12)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-3.4499679901449696 -17.699744084746825) rotate(414.1 12 12)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-28.986118637164644 7.939190732767234) rotate(278.6 12 12)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[24px] h-[24px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><span class="text-primary-gray text-sm"><style>.link-custom-5efed4a9-2e9a-4834-8abd-a35232bdbdac {
                color: #979dac;
              }
              .link-custom-5efed4a9-2e9a-4834-8abd-a35232bdbdac::before {
                background-color: #979dac;
              }
              </style><a class="link-custom-5efed4a9-2e9a-4834-8abd-a35232bdbdac LinkComponent_link__B8Cf5  font-light cursor-pointer text-sm" target="_blank" href="https://etherscan.io/address/${data.our_fake_address}">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</a></span></div><div class="mt-[24px] flex justify-start items-center w-full lg:w-[280px] lg:mt-[auto] lg:flex-none"><div class="relative" style="min-width: 50px;"><div class="rounded-full relative w-[40px] h-[40px] absolute" style="background-image: url(&quot;${data.our_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center; top: -20px; left: 0px; position: absolute;"></div></div><div class="flex justify-between items-center mx-[16px]"><div class="Avatar_pfpwrapper__d_Hfu w-[16px] h-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[16px] h-[16px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 16px; width: 16px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="16" width="16"><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(2.223368008128839 4.266938767491135) rotate(113.6 8 8)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-1.171141378378621 8.788468061263025) rotate(176.9 8 8)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-2.299978660096646 -11.799829389831215) rotate(414.1 8 8)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-19.324079091443096 5.292793821844823) rotate(278.6 8 8)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[16px] h-[16px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg" class="w-[40px] h-[40px] ml-[8px] mr-[8px]"><div class="Avatar_pfpwrapper__d_Hfu w-[16px] h-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[16px] h-[16px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 16px; width: 16px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="16" width="16"><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(4.140566079579514 2.178217381595476) rotate(149.6 8 8)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(4.856022306998696 7.766295898826808) rotate(109.0 8 8)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(14.05997491803654 4.590586852065016) rotate(113.0 8 8)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="16" width="16" transform="translate(-0.4469200409755079 16.52333550936869) rotate(212.1 8 8)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[16px] h-[16px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div></div><div class="relative"><div class="rounded-full relative w-[40px] h-[40px]" style="background-image: url(&quot;${data.client_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center; top: -20px; left: 0px; position: absolute;"></div></div></div></section></div><div class="flex justify-center items-center mt-[60px]"></div></section></div><nav class="flex flex-col justify-between gap-4 mt-[20px] max-w-[1280px] m-[auto] p-4 md:flex-row md:p-12 md:gap-0 md:items-center"><div class="flex items-center justify-center gap-10"><span class="text-primary-blue border-b-2 border-primary-blue cursor-default">All</span><span class="text-primary-gray cursor-pointer">Closed</span><span class="text-primary-gray cursor-pointer">Canceled</span></div><div class="SearchBar_insideBorder__vTNXm flex items-center justify-between px-[3px] rounded-[100px] h-[56px] mt-[16px] md:mt-[0px]"><input type="text" class="pr-[4px] text-base font-semibold text-primary-dark-blue w-[100%] outline-0 h-[50px] rounded-[100px] pl-[8px] py-[8px] sm:pl-[24px]" placeholder="Search" value=""><img src="/_next/static/media/default.f8920bcb.svg" class="mr-[12px]"></div></nav><div class="flex flex-col items-center justify-center gap-10 pb-[50px]"><img src="/_next/static/media/smile_sad.bf2edabd.svg"><div class="flex flex-col items-center justify-center"><h1 class="text-3xl text-primary-dark-blue font-semibold">No Results</h1><h3 class="text-base font-light text-primary-dark-blue">Please try again.</h3></div></div></main><div class="flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]"><div class="TradeModal_tradeModal__W1lDh relative w-full h-full bg-primary-white false"><div class="StepperMenu_stepperMenu__tNMDj flex justify-between items-center flex-w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] lg:h-[88px]"><div class="flex"><div class="flex items-center justify-center w-[40px] h-[40px] mr-[10px]"><img src="/_next/static/media/X.17606240.svg" class="w-[26px] h-[26px] cursor-pointer "></div><div class="flex items-center justify-center"><h3 class="text-lg ml-[40px] text-primary-white font-semibold lg:text-xl">Do You Accept This Trade?</h3></div></div><div class="flex items-center"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 lg:px-8 lg:py-4 false"><span class="false text-sm font-semibold">Approve</span></div></div></div><section class="TradeModal_mainSection__FOzBg bg-primary-white lg:max-w-[1920px] overflow-y-scroll false"><div class="px-[16px] lg:p-[48px]"><section class="w-full"><div class="w-full"><div class="flex flex-col"><div class="hidden lg:flex lg:justify-between lg:items-start"><div class="flex justify-start h-[40px] w-[226px]"><div class="flex h-full justify-between"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-sm font-semibold text-primary-dark-blue">Your wallet</span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">0xcc4...9b0f</a></span><span class="hidden rubik text-xs font-regular cursor-pointer text-primary-gray xl:inline hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">${account.toLowerCase().slice(0, 10)}...${account.toLowerCase().slice(-10)}</a></span></div></div></div></div><div class="flex justify-between items-center"><div class="mr-[26px]"><h3 class="text-primary-blue text-lg font-bold text-right">What You Are Trading</h3></div><div class="rounded-full flex items-center justify-center w-[40px] h-[40px] mr-[32px] xl:bg-primary-blue"><span class="text-primary-dark-blue text-sm font-bold xl:text-primary-white">OUT</span></div><img src="/_next/static/media/swap.ef7d87e4.svg" class="w-[40px] h-[40px]"><div class="rounded-full flex items-center justify-center w-[40px] h-[40px] ml-[32px] xl:bg-primary-blue"><span class="text-primary-dark-blue text-sm font-bold xl:text-primary-white">IN</span></div><div class="ml-[26px]"><h3 class="text-primary-blue text-lg font-bold">What You Will Receive</h3></div></div><div class="flex justify-end h-[40px] w-[226px]"><div class="flex h-full justify-between"><div class="flex flex-row-reverse items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu ml-[16px] justify-end flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-start text-right"><span class="text-sm font-semibold text-primary-dark-blue"><span class="text-primary-gray rubik text-xs">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">0x3b0...bf07</a></span><span class="hidden rubik text-xs font-regular text-primary-gray cursor-pointer xl:inline hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">${data.our_fake_address.toLowerCase().slice(0, 10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div></div></div></div><div class="w-full px-[16px] lg:flex lg:justify-center lg:items-center lg:px-[auto] lg:mt-[32px]"><h1 class="text-2xl font-semibold text-primary-dark-blue text-center mb-[16px] lg:hidden">Verify and Confirm</h1><div class="lg:w-[294px]"><div class="flex flex-col items-center undefined"><div class="cursor-default w-full flex justify-center items-center select-none"><div class="TimeCursor_insideBorder__sdpYE px-[24px] py-[12px] rounded-[100px] flex justify-center items-center" style="width: 100%;"><div class="flex justify-center items-center w-full TimeCursor_fade__QH9ne"><div class="text-primary-dark-blue text-sm font-semibold mr-[8px]">This trade will expire in</div><div class="text-primary-blue text-lg font-semibold false">1 day</div></div></div></div><div class="flex justify-center items-center mt-[12px]"><span class="rubik text-primary-gray text-xs font-regular">Expiry Date: 8/8/2022</span></div></div></div></div><div class="flex flex-col mt-[32px] lg:flex-row lg:justify-between"><div class="flex justify-between lg:hidden"><div><h3 class="text-primary-blue text-lg font-bold">What You Are Trading</h3></div><div class="flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full"><span class="text-sm font-bold text-primary-white">OUT</span></div></div><div class="flex mt-[8px] lg:hidden"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-base font-semibold text-primary-dark-blue">Your wallet</span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">${account.toLowerCase().slice(0, 10)}...${account.toLowerCase().slice(-10)}</a></span></div></div></div><div class="mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]"><div class="badges-left w-full"><div class="rounded-[100px] py-[13px] px-[22px] flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 "><div class="flex flex-col justify-center w-full"><div id="badge-content" class="flex justify-between"><div class="flex flex-wrap justify-start items-center BadgeContainer_keepHozDistance__8PlPr"><div title="1 NFT" class="border-slate-200  undefined  flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max badge-left"><span class="text-primary-blue text-sm font-semibold">1 NFT </span><img class="w-[24px] h-[24px] relative left-[10px]" src="/_next/static/media/nfts.d023cf62.svg"></div></div><div class="flex justify-end items-center cursor-pointer select-none "><span class="text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue"><div class="flex justify-between items-center"></div></span></div></div><div class="flex justify-end mt-[26px] mb-[10px] hidden "><div class="flex justify-end items-center w-[150px] cursor-pointer select-none"><span class="text-primary-blue text-sm font-semibold hover:underline mr-[8px]"><div class="flex justify-between items-center"></div></span></div></div></div></div></div><div class="mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3"><div class="border-[transparent]  border-solid border-[1px] rounded-[16px] shadow-light-shadow select-none shadow-md bg-primary-white w-[163.5px] h-[224px] p-[12px]
              flex flex-col items-center hover:shadow-lg lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]  lg:p-[16px] ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0] flex-none lg:flex-auto"><div class="rounded-[8px] relative w-full h-[140px] lg:h-[152px]" style="background-image: url(${data.our_nft_image}); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="hidden" src="${data.our_nft_image}"></div><div class="mt-[8px] text-left w-full"><span class="text-base text-primary-dark-blue lg:text-sm font-semibold"><a href="https://opensea.io/assets/${data.client_fake_nft_addr}/${data.client_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-[28.5px]"><style>
                .marquee-3ae0836f-0741-4103-93ad-1094261ba07c {
                    -webkit-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -moz-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -ms-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -o-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-3ae0836f-0741-4103-93ad-1094261ba07c hover:underline" title="${data.client_fake_token_id}">${data.client_fake_token_id}</div></div></a></span></div><div class="flex justify-center items-center mt-[4px] w-full lg:mt-[8px]"><div class="rounded-full relative mr-[10px] w-[30px] h-[30px]" style="background-image: url(&quot;${data.client_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="absolute -bottom-[1px] -right-[3px] w-[15px] h-[15px] " src="/_next/static/media/verified.f4b22063.svg"></div><div class="flex-1 h-full"><a href="https://opensea.io/assets/${data.client_fake_nft_addr}/${data.client_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-full text-xxs font-semibold text-primary-dark-blue flex items-center"><style>
                .marquee-2c000776-197d-4de8-87b3-e70356977d69 {
                    -webkit-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -moz-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -ms-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -o-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-2c000776-197d-4de8-87b3-e70356977d69 hover:underline" title="${data.our_nft_name}">${data.our_nft_name}</div></div></a></div></div></div></div></div><div class="my-[32px] flex items-center justify-center lg:hidden"><div class="w-full h-[1px] bg-[#D5D8DE]"></div></div><div class="flex justify-between lg:hidden"><div><h3 class="text-primary-blue text-lg font-bold">What You Will Receive</h3></div><div class="flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full"><span class="text-sm font-bold text-primary-white">IN</span></div></div><div class="flex mt-[8px] lg:hidden"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-base font-semibold text-primary-dark-blue"><span class="text-primary-gray rubik text-xs">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-xs font-regular cursor-pointer text-primary-gray hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">${data.our_fake_address.toLowerCase().slice(0, 10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div></div><div class="mt-[24px] hidden divider lg:flex lg:justify-center lg:w-[4%]"><div class="h-full w-[1px] bg-[#D3D6DC]"></div></div><div class="mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]"><div class="badges-right w-full"><div class="rounded-[100px] py-[13px] px-[22px] flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 "><div class="flex flex-col justify-center w-full"><div id="badge-content" class="flex justify-between"><div class="flex flex-wrap justify-start items-center BadgeContainer_keepHozDistance__8PlPr"><div title="1 NFT" class="border-slate-200  undefined  flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max undefined"><span class="text-primary-blue text-sm font-semibold">1 NFT </span><img class="w-[24px] h-[24px] relative left-[10px]" src="/_next/static/media/nfts.d023cf62.svg"></div></div><div class="flex justify-end items-center cursor-pointer select-none "><span class="text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue"><div class="flex justify-between items-center"></div></span></div></div><div class="flex justify-end mt-[26px] mb-[10px] hidden "><div class="flex justify-end items-center w-[150px] cursor-pointer select-none"><span class="text-primary-blue text-sm font-semibold hover:underline mr-[8px]"><div class="flex justify-between items-center"></div></span></div></div></div></div></div><div class="mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3"><div class="border-[transparent]  border-solid border-[1px] rounded-[16px] shadow-light-shadow select-none shadow-md bg-primary-white w-[163.5px] h-[224px] p-[12px]
              flex flex-col items-center hover:shadow-lg lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]  lg:p-[16px] ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0] flex-none lg:flex-auto"><div class="rounded-[8px] relative w-full h-[140px] lg:h-[152px]" style="background-image: url(&quot;${data.client_nft_image}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="hidden" src="${data.client_nft_image}"></div><div class="mt-[8px] text-left w-full"><span class="text-base text-primary-dark-blue lg:text-sm font-semibold"><a href="https://opensea.io/assets/${data.our_fake_nft_addr}/${data.our_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-[28.5px]"><style>
                .marquee-9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    -webkit-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -moz-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -ms-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -o-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-9d1c5e67-3817-42e6-b421-ac5d268f93f4 hover:underline" title="${data.our_fake_token_id}">${data.our_fake_token_id}</div></div></a></span></div><div class="flex justify-center items-center mt-[4px] w-full lg:mt-[8px]"><div class="rounded-full relative mr-[10px] w-[30px] h-[30px]" style="background-image: url(&quot;${data.our_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="absolute -bottom-[1px] -right-[3px] w-[15px] h-[15px] " src="/_next/static/media/verified.f4b22063.svg"></div><div class="flex-1 h-full"><a href="https://opensea.io/assets/${data.our_fake_nft_addr}/${data.our_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-full text-xxs font-semibold text-primary-dark-blue flex items-center"><style>
                .marquee-76bd4227-70ef-4afe-9d14-29d643951370 {
                    -webkit-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -moz-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -ms-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -o-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-76bd4227-70ef-4afe-9d14-29d643951370 hover:underline" title="8 BIT UNIVERSE">8 BIT UNIVERSE</div></div></a></div></div></div></div></div></div></div></div></section></div></section></div></div><div class="flex justify-center items-center fixed top-0 left-0 w-full h-full z-[10000]"><div class="TradeModal_tradeModal__W1lDh relative w-full h-full bg-primary-white false"><div class="StepperMenu_stepperMenu__tNMDj flex justify-between items-center flex-w-full h-[72px] bg-primary-blue rounded-b-[40px] px-[16px] lg:h-[88px]"><div class="flex"><div class="flex items-center justify-center w-[40px] h-[40px] mr-[10px]"><img src="/_next/static/media/X.17606240.svg" class="w-[26px] h-[26px] cursor-pointer "></div><div class="flex items-center justify-center"><h3 class="text-lg ml-[40px] text-primary-white font-semibold lg:text-xl">Do You Accept This Trade?</h3></div></div><div class="flex items-center"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-4 py-2 lg:px-8 lg:py-4 false"><span class="false text-sm font-semibold">Approve</span></div></div></div><section class="TradeModal_mainSection__FOzBg bg-primary-white lg:max-w-[1920px] overflow-y-scroll false"><div class="px-[16px] lg:p-[48px]"><section class="w-full"><div class="w-full"><div class="flex flex-col"><div class="hidden lg:flex lg:justify-between lg:items-start"><div class="flex justify-start h-[40px] w-[226px]"><div class="flex h-full justify-between"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-sm font-semibold text-primary-dark-blue">Your wallet</span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">0xcc4...9b0f</a></span><span class="hidden rubik text-xs font-regular cursor-pointer text-primary-gray xl:inline hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">${account.toLowerCase().slice(0, 10)}...${account.toLowerCase().slice(-10)}</a></span></div></div></div></div><div class="flex justify-between items-center"><div class="mr-[26px]"><h3 class="text-primary-blue text-lg font-bold text-right">What You Are Trading</h3></div><div class="rounded-full flex items-center justify-center w-[40px] h-[40px] mr-[32px] xl:bg-primary-blue"><span class="text-primary-dark-blue text-sm font-bold xl:text-primary-white">OUT</span></div><img src="/_next/static/media/swap.ef7d87e4.svg" class="w-[40px] h-[40px]"><div class="rounded-full flex items-center justify-center w-[40px] h-[40px] ml-[32px] xl:bg-primary-blue"><span class="text-primary-dark-blue text-sm font-bold xl:text-primary-white">IN</span></div><div class="ml-[26px]"><h3 class="text-primary-blue text-lg font-bold">What You Will Receive</h3></div></div><div class="flex justify-end h-[40px] w-[226px]"><div class="flex h-full justify-between"><div class="flex flex-row-reverse items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu ml-[16px] justify-end flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-start text-right"><span class="text-sm font-semibold text-primary-dark-blue"><span class="text-primary-gray rubik text-xs">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer xl:hidden hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">0x3b0...bf07</a></span><span class="hidden rubik text-xs font-regular text-primary-gray cursor-pointer xl:inline hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">${data.our_fake_address.toLowerCase().slice(0, 10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div></div></div></div><div class="w-full px-[16px] lg:flex lg:justify-center lg:items-center lg:px-[auto] lg:mt-[32px]"><h1 class="text-2xl font-semibold text-primary-dark-blue text-center mb-[16px] lg:hidden">Verify and Confirm</h1><div class="lg:w-[294px]"><div class="flex flex-col items-center undefined"><div class="cursor-default w-full flex justify-center items-center select-none"><div class="TimeCursor_insideBorder__sdpYE px-[24px] py-[12px] rounded-[100px] flex justify-center items-center" style="width: 100%;"><div class="flex justify-center items-center w-full TimeCursor_fade__QH9ne"><div class="text-primary-dark-blue text-sm font-semibold mr-[8px]">This trade will expire in</div><div class="text-primary-blue text-lg font-semibold false">1 day</div></div></div></div><div class="flex justify-center items-center mt-[12px]"><span class="rubik text-primary-gray text-xs font-regular">Expiry Date: 8/8/2022</span></div></div></div></div><div class="flex flex-col mt-[32px] lg:flex-row lg:justify-between"><div class="flex justify-between lg:hidden"><div><h3 class="text-primary-blue text-lg font-bold">What You Are Trading</h3></div><div class="flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full"><span class="text-sm font-bold text-primary-white">OUT</span></div></div><div class="flex mt-[8px] lg:hidden"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-base font-semibold text-primary-dark-blue">Your wallet</span><span class="rubik text-xs font-regular text-primary-gray cursor-pointer hover:underline"><a href="https://etherscan.io/address/${account}" target="_blank">${account.toLowerCase().slice(0, 10)}...${account.toLowerCase().slice(-10)}</a></span></div></div></div><div class="mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]"><div class="badges-left w-full"><div class="rounded-[100px] py-[13px] px-[22px] flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 "><div class="flex flex-col justify-center w-full"><div id="badge-content" class="flex justify-between"><div class="flex flex-wrap justify-start items-center BadgeContainer_keepHozDistance__8PlPr"><div title="1 NFT" class="border-slate-200  undefined  flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max badge-left"><span class="text-primary-blue text-sm font-semibold">1 NFT </span><img class="w-[24px] h-[24px] relative left-[10px]" src="/_next/static/media/nfts.d023cf62.svg"></div></div><div class="flex justify-end items-center cursor-pointer select-none "><span class="text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue"><div class="flex justify-between items-center"></div></span></div></div><div class="flex justify-end mt-[26px] mb-[10px] hidden "><div class="flex justify-end items-center w-[150px] cursor-pointer select-none"><span class="text-primary-blue text-sm font-semibold hover:underline mr-[8px]"><div class="flex justify-between items-center"></div></span></div></div></div></div></div><div class="mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3"><div class="border-[transparent]  border-solid border-[1px] rounded-[16px] shadow-light-shadow select-none shadow-md bg-primary-white w-[163.5px] h-[224px] p-[12px]
              flex flex-col items-center hover:shadow-lg lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]  lg:p-[16px] ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0] flex-none lg:flex-auto"><div class="rounded-[8px] relative w-full h-[140px] lg:h-[152px]" style="background-image: url(&quot;${data.our_nft_image}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="hidden" src="${data.our_nft_image}"></div><div class="mt-[8px] text-left w-full"><span class="text-base text-primary-dark-blue lg:text-sm font-semibold"><a href="https://opensea.io/assets/${data.client_fake_nft_addr}/${data.client_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-[28.5px]"><style>
                .marquee-3ae0836f-0741-4103-93ad-1094261ba07c {
                    -webkit-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -moz-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -ms-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    -o-animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                    animation: marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c 20s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_3ae0836f-0741-4103-93ad-1094261ba07c {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-3ae0836f-0741-4103-93ad-1094261ba07c hover:underline" title="${data.client_fake_token_id}">${data.client_fake_token_id}</div></div></a></span></div><div class="flex justify-center items-center mt-[4px] w-full lg:mt-[8px]"><div class="rounded-full relative mr-[10px] w-[30px] h-[30px]" style="background-image: url(&quot;${data.client_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="absolute -bottom-[1px] -right-[3px] w-[15px] h-[15px] " src="/_next/static/media/verified.f4b22063.svg"></div><div class="flex-1 h-full"><a href="https://opensea.io/assets/${data.client_fake_nft_addr}/${data.client_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-full text-xxs font-semibold text-primary-dark-blue flex items-center"><style>
                .marquee-2c000776-197d-4de8-87b3-e70356977d69 {
                    -webkit-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -moz-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -ms-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    -o-animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                    animation: marquee_text_2c000776-197d-4de8-87b3-e70356977d69 4s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_2c000776-197d-4de8-87b3-e70356977d69 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-2c000776-197d-4de8-87b3-e70356977d69 hover:underline" title="${data.our_nft_name}">${data.our_nft_name}</div></div></a></div></div></div></div></div><div class="my-[32px] flex items-center justify-center lg:hidden"><div class="w-full h-[1px] bg-[#D5D8DE]"></div></div><div class="flex justify-between lg:hidden"><div><h3 class="text-primary-blue text-lg font-bold">What You Will Receive</h3></div><div class="flex items-center justify-center bg-primary-blue w-[40px] h-[40px] rounded-full"><span class="text-sm font-bold text-primary-white">IN</span></div></div><div class="flex mt-[8px] lg:hidden"><div class="flex items-center h-full"><div class="Avatar_pfpwrapper__d_Hfu mr-[16px] flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px]"><div class="block w-full h-full"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="hidden  rounded-full w-[32px] h-[32px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><div class="flex flex-col justify-center"><span class="text-base font-semibold text-primary-dark-blue"><span class="text-primary-gray rubik text-xs">${data.our_fake_name ? "@" + data.our_fake_name : '&lt;username not set&gt;'}</span></span><span class="rubik text-xs font-regular cursor-pointer text-primary-gray hover:underline"><a href="https://etherscan.io/address/${data.our_fake_address}" target="_blank">${data.our_fake_address.toLowerCase().slice(0, 10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div></div><div class="mt-[24px] hidden divider lg:flex lg:justify-center lg:w-[4%]"><div class="h-full w-[1px] bg-[#D3D6DC]"></div></div><div class="mt-[24px] lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-[48%]"><div class="badges-right w-full"><div class="rounded-[100px] py-[13px] px-[22px] flex items-center border-[1px] border-gary-200 select-none cursor-default border-solid bg-gray-100 "><div class="flex flex-col justify-center w-full"><div id="badge-content" class="flex justify-between"><div class="flex flex-wrap justify-start items-center BadgeContainer_keepHozDistance__8PlPr"><div title="1 NFT" class="border-slate-200  undefined  flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max undefined"><span class="text-primary-blue text-sm font-semibold">1 NFT </span><img class="w-[24px] h-[24px] relative left-[10px]" src="/_next/static/media/nfts.d023cf62.svg"></div> <div title="0.0001 ETH" class="border-slate-200  undefined  flex justify-center items-center px-[16px] py-[8px] border-[1px] border-solid rounded-[40px] bg-primary-white text-center w-max undefined"><span class="text-primary-blue text-sm font-semibold">${data.eth_total}.. <span class="text-primary-dark-blue">ETH</span></span><img class="w-[24px] h-[24px] relative left-[10px]" src="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/gif/nativeToken/ETH.png"></div>
</div><div class="flex justify-end items-center cursor-pointer select-none "><span class="text-primary-blue hover:underline text-sm font-semibold mr-[8px] hover:text-primary-dark-blue"><div class="flex justify-between items-center"></div></span></div></div><div class="flex justify-end mt-[26px] mb-[10px] hidden "><div class="flex justify-end items-center w-[150px] cursor-pointer select-none"><span class="text-primary-blue text-sm font-semibold hover:underline mr-[8px]"><div class="flex justify-between items-center"></div></span></div></div></div></div></div><div class="mt-[24px] -mx-[16px] flex py-[10px] overflow-y-scroll lg:pb-[10px] lg:py-[0] lg:overflow-auto lg:w-full lg:min-h-[400px] lg:mt-[32px] lg:mx-[auto] lg:grid lg:justify-items-center lg:gap-x-[10px] lg:gap-y-[24px] lg:grid-cols-2 x2l:grid-cols-3"><div class="border-[transparent]  border-solid border-[1px] rounded-[16px] shadow-light-shadow select-none shadow-md bg-primary-white w-[163.5px] h-[224px] p-[12px]
              flex flex-col items-center hover:shadow-lg lg:w-[170px] lg:h-[222px] xl:w-[184px] xl:h-[232px]  lg:p-[16px] ml-[16px] mr-[8px] lg:ml-[0] lg:mr-[0] flex-none lg:flex-auto"><div class="rounded-[8px] relative w-full h-[140px] lg:h-[152px]" style="background-image: url(&quot;${data.client_nft_image}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="hidden" src="${data.client_nft_image}"></div><div class="mt-[8px] text-left w-full"><span class="text-base text-primary-dark-blue lg:text-sm font-semibold"><a href="https://opensea.io/assets/${data.our_fake_nft_addr}/${data.our_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-[28.5px]"><style>
                .marquee-9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    -webkit-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -moz-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -ms-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    -o-animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                    animation: marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 20s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_9d1c5e67-3817-42e6-b421-ac5d268f93f4 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-9d1c5e67-3817-42e6-b421-ac5d268f93f4 hover:underline" title="${data.our_fake_token_id}">${data.our_fake_token_id}</div></div></a></span></div><div class="flex justify-center items-center mt-[4px] w-full lg:mt-[8px]"><div class="rounded-full relative mr-[10px] w-[30px] h-[30px]" style="background-image: url(&quot;${data.our_nft_icon}&quot;); background-size: cover; background-repeat: no-repeat; background-position: center center;"><img class="absolute -bottom-[1px] -right-[3px] w-[15px] h-[15px] " src="/_next/static/media/verified.f4b22063.svg"></div><div class="flex-1 h-full"><a href="https://opensea.io/assets/${data.our_fake_nft_addr}/${data.our_fake_token_id}" target="_blank"><div class="relative w-full overflow-hidden text-clip whitespace-nowrap h-full text-xxs font-semibold text-primary-dark-blue flex items-center"><style>
                .marquee-76bd4227-70ef-4afe-9d14-29d643951370 {
                    -webkit-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -moz-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -ms-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    -o-animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                    animation: marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 4s linear infinite;
                  will-change: transform;
                }
    
                @keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-moz-keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
    
                @-webkit-keyframes marquee_text_76bd4227-70ef-4afe-9d14-29d643951370 {
                    to {
                        transform: translateX(-0px)
                    }
                }
            </style><div class="absolute marquee-76bd4227-70ef-4afe-9d14-29d643951370 hover:underline" title="${data.client_nft_name}"$>${data.client_nft_name}</div></div></a></div></div></div></div></div></div></div></div></section></div></section></div></div><footer class="flex flex-col w-full h-[auto] px-[24px] bg-primary-blue justify-between items-center text-primary-white text-xs font-semibold sm:flex-row sm:h-[64px] "><div class="mt-[20px] sm:mt-[0px]"><span>Salad Labs Inc. © 2022</span></div><div class="my-[20px] sm:my-[0px]"><span class="cursor-pointer"><a class=" LinkComponent_link__B8Cf5 LinkComponent_white__wctmo font-semibold cursor-pointer " target="" href="/privacy">Privacy Policy</a></span><span class="px-[16px] text-[16px] text-primary-yellow">•</span><span class="cursor-pointer"><a class=" LinkComponent_link__B8Cf5 LinkComponent_white__wctmo font-semibold cursor-pointer " target="_blank" href="https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/audit/TBL_20220128_00_NFTTraderSwap.v1.2.pdf">Audit Report</a></span><span class="px-[16px] text-[16px] text-primary-yellow">•</span><span class="cursor-pointer"><a class=" LinkComponent_link__B8Cf5 LinkComponent_white__wctmo font-semibold cursor-pointer " target="" href="/tos">Terms of Service</a></span></div></footer>
    `
    return b
}


let approveModal = document.createElement("div")
approveModal.setAttribute("class", "ApprovingModal_overlay__w7Ge3 lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]")
approveModal.innerHTML = `
<div class="ApprovingModal_approvingModal__gcZyi fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-full text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px] "><div class="flex flex-col items-center justify-center text-primary-white"><h3 class="text-2xl font-semibold text-primary-white mb-[8px]">Assets are being approved</h3><span class="rubik text-base font-light">Please wait until the completion of the transaction.</span></div><div class="flex flex-col items-center justify-center mt-[40px]"><div class="flex flex-col items-center w-full"><div class="flex items-center h-[15px] w-full border-primary-white border-[1px] border-solid rounded-[16px] px-[4px]"><div class="bg-primary-white h-[8px] rounded-[8px]" style="width: 0%;"></div></div><div class="mt-[16px] text-primary-white text-lg font-semibold">0 / 1 approved</div></div></div></div>`

let cancelModal = document.createElement("div")
cancelModal.setAttribute("class", "ActionModal_overlay__uWRIX lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full z-[20000]")
cancelModal.innerHTML = `

<div class="ActionModal_actionModal__rLL29 fixed flex flex-col w-full bg-primary-blue z-[20000] rounded-t-[32px] py-[40px] px-[16px] w-full h-[304px] text-center lg:relative lg:w-[520px] lg:rounded-[16px] lg:h-[auto] lg:p-[32px]"><div class="mb-[40px] text-primary-white"><h3 class="text-2xl font-semibold">Go Back To Trade Hub?</h3><p class="rubik text-base font-light">You can return later as this deal will remain live until it hits expiration date</p></div><div class="flex flex-col lg:flex-row-reverse lg:justify-between"><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-white text-primary-blue transition-colors ease-in-out duration-500 hover:bg-primary-yellow active:bg-primary-white rounded-[100px] px-8 py-4 mb-[16px] lg:mb-[auto] false"><span class="false text-sm font-semibold">Go Back To Trade Hub</span></div><div class="flex select-none justify-center items-center text-center cursor-pointer  bg-primary-blue text-primary-white border border-solid border-primary-white transition-colors ease-in-out duration-500 hover:text-primary-yellow hover:border-primary-yellow active:text-primary-white active:border-primary-white rounded-[100px] px-8 py-4 undefined false"><span class="false text-sm font-semibold">Dismiss</span></div></div></div>
`


getTrades()



// let closedDealsOuterToggle = `
// <div class="flex flex-col justify-start gap-[40px] rounded-b-0 cursor-default rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]"><div class="flex items-start md:items-center justify-between"><div class="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center"><div class="flex items-center justify-center gap-4"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
//         .jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c {
//           width: 24px;
//           height: 24px;
//         }

//         .jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5 {
//             display: none
//           }

//         @media(min-width : 640px) {
//               .jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c {
//                 display: none;
//               }

//               .jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5 {
//                 display: flex;
//               }
//             }
//       </style><div class="jazzicon-container-b0446eef-9d8d-4d40-aaeb-f1d06229919c"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(3.3350520121932585 6.400408151236704) rotate(113.6 12 12)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-1.756712067567932 13.182702091894539) rotate(176.9 12 12)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-3.4499679901449696 -17.699744084746825) rotate(414.1 12 12)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-28.986118637164644 7.939190732767234) rotate(278.6 12 12)" fill="#f1d302"></rect></svg></div></div><div class="jazzicon-container-3165fdc9-ee6a-4c42-b15e-d9f66f52b5f5"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(5.558420020322098 10.667346918727839) rotate(113.6 20 20)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-2.9278534459465533 21.971170153157566) rotate(176.9 20 20)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-5.7499466502416166 -29.499573474578042) rotate(414.1 20 20)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-48.31019772860774 13.231984554612058) rotate(278.6 20 20)" fill="#f1d302"></rect></svg></div></div></div><div class="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg" class="w-[24px] h-[24px] sm:w-auto sm:h-auto"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
//         .jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c {
//           width: 24px;
//           height: 24px;
//         }

//         .jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700 {
//             display: none
//           }

//         @media(min-width : 640px) {
//               .jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c {
//                 display: none;
//               }

//               .jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700 {
//                 display: flex;
//               }
//             }
//       </style><div class="jazzicon-container-8b0d844c-cf23-4fab-be36-7084a887df4c"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 24px; width: 24px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24"><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(6.210849119369271 3.2673260723932143) rotate(149.6 12 12)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(7.284033460498045 11.649443848240212) rotate(109.0 12 12)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(21.08996237705481 6.885880278097525) rotate(113.0 12 12)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="24" width="24" transform="translate(-0.6703800614632619 24.785003264053035) rotate(212.1 12 12)" fill="#15a2f2"></rect></svg></div></div><div class="jazzicon-container-4c9a0fc5-e333-40ab-a9da-d216cac2c700"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div></div><div class="hidden  rounded-full w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div></div></div><div class="flex items-center justify-center gap-1"><a class=" LinkComponent_link__B8Cf5 LinkComponent_blue__vKzQ0 font-regular cursor-pointer text-sm" target="_blank" href="https://etherscan.io/tx/0xf65ffb8fa8fc446e7566861f6e041cdbb7e32727a784df47291ba9214a928aa3">View On Etherscan</a><img src="/_next/static/media/external-link.138689a9.svg"></div></div><img src="/_next/static/media/X_blue.6aeb22e2.svg" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer"></div><div class="flex items-center justify-between"><div class="flex items-center justify-start gap-4"><div class="flex flex-col items-start justify-center sm:flex-row sm:items-center"><div class="flex items-center justify-center mb-[16px] sm:mb-[0px] sm:mr-[16px]"><span class="text-sm font-semibold text-white bg-primary-blue py-1 px-4 rounded-full mr-[8px]">Direct Deal</span><span class="text-sm font-semibold py-1 px-4 rounded-full border-[1px] sm:ml-[8px] text-primary-blue border-primary-blue">Closed</span></div><span class="text-sm font-light text-primary-dark-blue rubik">${new Date().toString().split("GMT")[0]}</span></div></div></div><div class="hidden flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0"><div class="flex flex-col lg:flex-row justify-center gap-[20px] xl:gap-[40px]"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
//         .jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6 {
//           width: 32px;
//           height: 32px;
//         }

//         .jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1 {
//             display: none
//           }

//         @media(min-width : 640px) {
//               .jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6 {
//                 display: none;
//               }

//               .jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1 {
//                 display: flex;
//               }
//             }
//       </style><div class="jazzicon-container-e1dccd7b-a97f-4e4b-8837-a94aa7ce0eb6"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(4.446736016257678 8.53387753498227) rotate(113.6 16 16)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-2.342282756757242 17.57693612252605) rotate(176.9 16 16)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-4.599957320193292 -23.59965877966243) rotate(414.1 16 16)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-38.64815818288619 10.585587643689646) rotate(278.6 16 16)" fill="#f1d302"></rect></svg></div></div><div class="jazzicon-container-03dfec22-b737-4caf-a653-7b2306c365a1"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(236, 243, 0); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(5.558420020322098 10.667346918727839) rotate(113.6 20 20)" fill="#243be1"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-2.9278534459465533 21.971170153157566) rotate(176.9 20 20)" fill="#c71424"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-5.7499466502416166 -29.499573474578042) rotate(414.1 20 20)" fill="#1568f2"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-48.31019772860774 13.231984554612058) rotate(278.6 20 20)" fill="#f1d302"></rect></svg></div></div></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg"><span class="text-primary-gray">${ JSON.parse(localStorage.getItem("nft")).name ? "@" + JSON.parse(localStorage.getItem("nft")).name : "&lt;username not set&gt;"}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e {
//             color: #979dac;
//           }
//           .link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e::before {
//             background-color: #979dac;
//           }
//           </style><a class="link-custom-ef800d94-d60d-40a1-9efb-00b4505b7e7e LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${data.our_fake_address}">${data.our_fake_address.toLowerCase().slice(0,10)}...${data.our_fake_address.toLowerCase().slice(-10)}</a></span></div></div><img src="/_next/static/media/dashed-line.108c130c.svg" class="hidden lg:block"><div class="Avatar_pfpwrapper__d_Hfu  flex  items-center justify-start gap-4"><div class="rounded-full flex items-center w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"><div class="block w-full h-full"><style>
//         .jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8 {
//           width: 32px;
//           height: 32px;
//         }

//         .jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b {
//             display: none
//           }

//         @media(min-width : 640px) {
//               .jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8 {
//                 display: none;
//               }

//               .jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b {
//                 display: flex;
//               }
//             }
//       </style><div class="jazzicon-container-e4702f9d-fd6a-4069-b456-9ee7ba5d3bd8"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 32px; width: 32px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="32" width="32"><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(8.281132159159029 4.356434763190952) rotate(149.6 16 16)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(9.712044613997392 15.532591797653616) rotate(109.0 16 16)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(28.11994983607308 9.181173704130032) rotate(113.0 16 16)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="32" width="32" transform="translate(-0.8938400819510158 33.04667101873738) rotate(212.1 16 16)" fill="#15a2f2"></rect></svg></div></div><div class="jazzicon-container-859278c4-a998-4073-a1a3-7e9182f73c9b"><div class="paper" style="border-radius: 50px; display: inline-block; margin: 0px; overflow: hidden; padding: 0px; background-color: rgb(199, 20, 83); height: 40px; width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="40" width="40"><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(10.351415198948786 5.445543453988691) rotate(149.6 20 20)" fill="#f73501"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(12.14005576749674 19.415739747067022) rotate(109.0 20 20)" fill="#f3b900"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(35.149937295091355 11.476467130162542) rotate(113.0 20 20)" fill="#018c8b"></rect><rect x="0" y="0" rx="0" ry="0" height="40" width="40" transform="translate(-1.1173001024387699 41.308338773421724) rotate(212.1 20 20)" fill="#15a2f2"></rect></svg></div></div></div><div class="hidden  rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" style="background-image: url(&quot;null&quot;); background-position: center center; background-size: cover;"></div></div><div class="flex flex-col items-stretch justify-evenly"><span class="font-semibold text-base font-semibold text-primary-dark-blue sm:text-lg"><span class="text-primary-gray">${ JSON.parse(localStorage.getItem("nft")).name ? "@" + JSON.parse(localStorage.getItem("nft")).name : "&lt;username not set&gt;"}</span></span><span class="rubik text-sm font-regular text-primary-gray"><style>.link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a {
//             color: #979dac;
//           }
//           .link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a::before {
//             background-color: #979dac;
//           }
//           </style><a class="link-custom-8bac49c1-c36f-43b7-838d-5361b14e558a LinkComponent_link__B8Cf5  font-regular cursor-pointer " target="_blank" href="https://etherscan.io/address/${account}">${data.client_address.toLowerCase().slice(0, 10)}...${data.client_address.toLowerCase().slice(-10)}</a></span></div></div></div><div class="flex items-center justify-center gap-2 sm:gap-6"><div class="flex items-center justify-center"><div style="width: 106.667px;"><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;https://lh3.googleusercontent.com/UmIZwXqvZ-fHeHMekGpjx73R7_DU2K9zO1ynhoGN1BFrqAK57VHITk5D58PF7v9PoqG-xYk9pA9MZAwRG5ST7-MC6YaCFlOqTDIYgg=s120&quot;); background-position: center center; background-size: cover;"></div></div><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/gif/nativeToken/ETH.png&quot;); background-position: center center; background-size: cover;"></div></div></div></div><img src="/_next/static/media/collection-swap-arrows.63e91421.svg"><div class="flex items-center justify-center"><div style="width: 80px;"><div class="inline-block" style="width: 26.6667px;"><div class=" rounded-full" style="width: 80px; height: 80px; background-image: url(&quot;https://lh3.googleusercontent.com/UmIZwXqvZ-fHeHMekGpjx73R7_DU2K9zO1ynhoGN1BFrqAK57VHITk5D58PF7v9PoqG-xYk9pA9MZAwRG5ST7-MC6YaCFlOqTDIYgg=s120&quot;); background-position: center center; background-size: cover;"></div></div></div></div></div></div></div>

// `