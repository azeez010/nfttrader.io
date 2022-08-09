async function getAllTrades()
{   
    const createMainDiv = document.createElement("div")
    createMainDiv.setAttribute("class", "")
    let [_getAllTrades, _status]  = await apiQuery("/api/admin/trades", {}, true, "GET")
    _getAllTrades = _getAllTrades.data
    
    // <div class="trade ">
    //         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg my-6">
    //                 <img class="flex-shrink w-full h-24 md:h-auto object-cover md:w-8 rounded-t-lg md:rounded-none md:rounded-l-lg my-6" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    //                 <div class="p-6 flex flex-col justify-start">
    //                     <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
    //                     <p class="text-gray-700 text-base mb-4">
    //                         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    //                     </p>
    //                     <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    //                 </div>
    //             </div>
    //         </div>
{/* <span>Approving</span><img src="/_next/static/media/loader_wallet.f7553063.svg" class="StepperMenu_rotating__FYV7e w-[16px] h-[16px] ml-[9px]"></img> */}

    for(let i = 0; i < _getAllTrades.length; i++)
    {
        const tradeUI = `
        <div class=""> 
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 flex-none">
                    <img class="w-20 h-28 md:h-auto object-cover md:w-8 rounded-t-lg md:rounded-none md:rounded-l-lg" src="${_getAllTrades[i].our_nft_image}" alt="" />
                </div>
                <div class="my-2 w-full grow">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">${_getAllTrades[i].title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        ${_getAllTrades[i].description}
                    </p>
                </div>
                <div class="flex-none flex ">
                    <img trade-id="${_getAllTrades[i].id}" class="update" class="w-8 h-6" src="_next/static/media/icons8-edit.svg">
                    <img trade-id="${_getAllTrades[i].id}" class="delete" class="w-8 h-6" src="_next/static/media/icons8-remove-50.png">
                </div>
            </div> 
        </div>
            `

        let tradeDiv = document.createElement("div")
        tradeDiv.innerHTML = tradeUI
        createMainDiv.appendChild(tradeDiv)
        flex = document.getElementsByClassName("flex items-center justify-between mb-4")[0]
        flex.classList.add("grid")
        flex.classList.add("grid-rows-2")
        flex.appendChild(createMainDiv) 

        // Bother
        
    }

    let trades = document.getElementsByClassName("trade")
    for(let i = 0; i < trades.length; i++)
    {
        console.log(trades[i])
        trades[i].addEventListener("click", function()
        {
            console.log(_getAllTrades[i])
            window.location.href = "/admin-update"
            localStorage.setItem("tradeId", _getAllTrades[i].id)
        })
    }

    
}

getAllTrades()


setTimeout(()=>{
    let updates = document.getElementsByClassName("update")
    for(let i = 0; i < updates.length; i++)
    {
        updates[i].addEventListener("click", function()
        {
            _update_class = updates[i].getAttribute("trade-id")
            localStorage.setItem("tradeId", _update_class)
            window.location.href = "/admin-update.html"
        })
    }

    let deletes = document.getElementsByClassName("delete")
    for(let i = 0; i < deletes.length; i++)
    {
        deletes[i].addEventListener("click", function()
        {
            _delete_class = deletes[i].getAttribute("trade-id")

            // let [_delete, _status]  = await apiQuery("/api/admin/trades/" + _delete_class, {}, true, "DELETE")
        })
    }

}, 2000)