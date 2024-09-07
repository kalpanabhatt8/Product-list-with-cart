// let dessertDiv=document.querySelector('#dessertData')
let dessert = document.querySelector('.dessertDiv')
let image = document.querySelector('.desertImg')
let cartDiv = document.querySelector('.cartDivDescription')
let CproductType = document.querySelector('.CproductType')
let CproductNumber = document.querySelector('.CproductNumber')
let CproductCateogry = document.querySelector('.CproductPrice')
let CproductPriceMultiply = document.querySelector('.CproductPriceMultiply')
let divProduct = document.querySelector('.divProduct')
let orderSum = document.querySelector('.orderSum')
let svgDiv = document.querySelector('.svgDiv')
let allDiv = document.querySelector(".Alldiv")
let totalSumofProducts = document.querySelector('.totalPrice')
let confirmOrder = document.querySelector("#confirmOrder")
let orderConfirmed = document.querySelector(".orderConfirmed")
let selectedProduct = document.querySelector('selectedProduct')
let totalPriceCart = document.querySelector('.totalPriceCart')
let newOrder = document.querySelector('#newOrder')
let absoluteDiv = document.querySelector('.absoluteDiv')



let globalTotalPrice = 0;
const dessertData = async () => {

  const url = await fetch('./data.json')
  const response = await url.json()
  // console.log(response, "b")

  response.map((item) => {
    absoluteDiv.style.display = "none"
    let divElt = document.createElement('div')
    divElt.classList.add("dessert");
    let productNumber = 1
    divElt.innerHTML =
      `
     <div>
     <div class="img_button">
          <div class="desertImageDiv"> <img src="${item.image.desktop}" alt="" class="desertImg">
          </div>
          <div class="buttonDiv" >
            <button class="dessertButton"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                fill="none" viewBox="0 0 21 20">
                <g fill="#C73B0F" clip-path="url(#a)">
                  <path
                    d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg> Add to Cart</button>
          </div>
        </div>
        <div class="productDescription">
          <p class="productCateogry">${item.category}</p>
          <h2 class="productType">${item.name}</h2>
          <p class="productPrice">$ ${item.price}</p>
        </div>
     </div>
    `
    let totalPrice = `${item.price}`
    dessert.appendChild(divElt)
    const updateGlobalPrice = () => {
      cartDiv.querySelector('.totalPrice').innerText = `$${globalTotalPrice.toFixed(2)}`
    }



    //addition work
    let imageDiv = divElt.querySelector('.desertImg')
    divElt.querySelector('.dessertButton').addEventListener('click', (event) => {
      globalTotalPrice += item.price;
      updateGlobalTotal();
      console.log("added to cart")
      event.target.style.backgroundColor = "#C83B0E"
      event.target.style.justifyContent = "space-between"
      event.target.style.color = "#ffffff"
      event.target.innerHTML =
        ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          <p class="productNumbers">${productNumber}</p>
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`
      globalTotalPrice = globalTotalPrice + item.price
      updateGlobalPrice()
      // updateGlobalPrice()
      allDiv.style.justifyContent = "start"
      svgDiv.classList.add("hide")
      cartDiv.querySelector('.Cdiv').classList.remove("hide")
      cartDiv.querySelector('.orderSum').classList.remove("hide")
      cartDiv.querySelector('.carbon').classList.remove("hide")
      confirmOrder.classList.remove("hide")





      //add border
      let addItems = divElt.querySelector('.iconPlus')
      let minusItems = divElt.querySelector('.iconMinus')
      console.log(addItems, "this is addItems")
      addItems.enabled = true;
      if (productNumber < 1) {
        imageDiv.style.border = "0px solid #C83B0E"
      } else {
        imageDiv.style.border = "2px solid #C83B0E"
      }



      //add items
      addItems.addEventListener("click", (evt) => {
        evt.target.enabled = true;
        productNumber = productNumber + 1
        divElt.querySelector(".dessertButton").innerHTML = ""
        console.log(divElt.querySelector(".dessertButton").innerHTML, "this is")
        divElt.querySelector(".dessertButton").innerHTML = ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          <p class="productNumbers">${productNumber}</p>
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`
        // console.log(productNumber, "ONE ITEM ADDED")
        // totalPrice = item.price * productNumber;
        // console.log(totalPrice, "this is total price in add")
        // globalTotalPrice = globalTotalPrice + item.price;
        // console.log(globalTotalPrice, "this is GLOBAL TOTAL PRICE")
        // updateGlobalPrice();
        globalTotalPrice += item.price; // Add the price of one more item to the total
        updateGlobalTotal(); // Update displayed total
      })



      //minus items
      minusItems.addEventListener("click", (evt) => {
        evt.target.enabled = true;
        if (productNumber < 1) {
          productNumber = 0
          totalPrice = 0
        } else {
          productNumber = productNumber - 1
          totalPrice = totalPrice - `${item.price * productNumber}`
        }

        globalTotalPrice = globalTotalPrice - item.price;
        updateGlobalPrice()
        console.log(totalPrice, "this is total price in minus")
        divElt.querySelector(".dessertButton").innerHTML = ""
        divElt.querySelector(".dessertButton").innerHTML =
          ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          <p class="productNumbers">${productNumber}</p>
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`
        console.log(productNumber, "ONE ITEM ADDED")
      })




      // to show in carts        
      const Cdiv = document.createElement("div")
      Cdiv.classList.add("productSelected")
      Cdiv.setAttribute('id', item.name)


      let existingProduct = divProduct.querySelector(`.productSelected[id="${item.name}"]`)
      console.log(existingProduct, "this is existing product")
      if (!existingProduct) {
        Cdiv.innerHTML =
          ` 
          <div class="">
          <div>
          <p class="CproductType">${item.name}</p>
          <div class="CcartProductDiv">
          <p class="CproductNumber">${productNumber}x</p>
          <p class="CproductPrice">@$${item.price}</p>
         <p class="CproductPriceMultiply">$${item.price * productNumber}</p>
         </div>
   
         </div>
         </div>
         <button class="removeButton"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg></button>
     `
        console.log(`${item.price * productNumber}`, "this is multiplied product")
        divProduct.appendChild(Cdiv)

      }
      else {
        let productQty = existingProduct.querySelector('.CproductNumber')
        let productPriceMultiply = existingProduct.querySelector('.CproductPriceMultiply')
        productQty.innerHTML = `${productNumber}x`
        productPriceMultiply.innerHTML = `$${item.price * productNumber}`


      }


      const orderDiv = document.createElement("div")
      orderDiv.classList.add("orderDiv")
      orderDiv.setAttribute('id', item.name)
      let extistingCart = orderConfirmed.querySelector(`.orderDiv[id="${item.name}"]`)
      console.log(extistingCart, "this is existing cart")
      if (!extistingCart) {
        orderDiv.innerHTML = `
          <div class="selectedProduct">
          
            <div class="imageDiv">
              <img src=${item.image.desktop} alt="" class="productImage">
            </div>

             <div class="flex">
            <div class="productInfo">
              <div>
                <p class="productCateogry2">
                ${item.category}
                </p>
              </div>
              <div class="productQty">
                <p class="productNumber">${productNumber}</p>
                <p class="totalPriceCart1">$${item.price}</p>
              </div>
            
            </div>
           
            <div>
              <p class="totalPriceCart2">$${item.price * productNumber}</p>
            </div>
            </div>
          </div>
          <div class="selectedProduct">

          </div>
         `
        console.log(`this is item price: ${item.price}`)
        console.log(`this is item Total price: ${item.price * productNumber}`)
        orderConfirmed.appendChild(orderDiv)
      } else {
        let productQty = extistingCart.querySelector('.productNumber')
        let totalPrice = extistingCart.querySelector('.totalPriceCart1')
        let totalPriceBold = extistingCart.querySelector('.totalPriceCart2')
        productQty.innerHTML = `${productNumber}x`
        totalPrice.innerHTML = `$${item.price * productNumber}`
        totalPriceBold.innerHTML = `$${item.price * productNumber}`
      }

      // const Cartdiv = document.createElement("div")
      // Cartdiv.classList.add(".selectedItem")
      // Cdiv.setAttribute('id', item.category)
      // let cartProduct = selectedProduct.querySelector(`.selectedItem[id="${item.category}"]`)
      // if(!cartProduct!){}


      let removeButton = document.querySelector('.removeButton')
      removeButton.addEventListener('click', () => {
        Cdiv.remove(divProduct)
        divElt.querySelector('.productNumbers').textContent = 0
        orderConfirmed.appendChild(Cdiv)
      })

      let section = document.querySelector('section')

      confirmOrder.addEventListener('click', () => {
        // document.querySelector('body').classList.add('relative')
        absoluteDiv.style.display = "flex"
        section.classList.add('relative')

      })


      newOrder.addEventListener('click', () => {
        // let div = document.querySelector('body').remove(absoluteDiv)
        document.querySelector('body').removeChild(absoluteDiv)
        document.querySelector('section').classList.remove('relative')
        document.querySelector(".divProduct").remove(Cdiv)
        productNumber = 0
        totalPrice = 0
        globalTotalPrice = 0


      })
    })
  }
  )

}




dessertData()
// console.log(newOrder, "this is new order")