let dessertDiv = document.querySelector('.dessertDiv')
let cartDiv = document.querySelector('.Cdiv')
let confirmOrder = document.querySelector('#confirmOrder')
let cartNumberAdded = document.querySelector('#cartNumberAdded')
let svgDiv = document.querySelector('.svgDiv')
let absoluteDiv = document.querySelector('.absoluteDiv')
let orderConfirmed = document.querySelector(".orderConfirmed")
let newOrder = document.querySelector('#newOrder')
let section = document.querySelector('section')
let count = 0
const data = async () => {
  const url = await fetch('./data.json')
  const response = await url.json()
  createProduct(response)
  console.log(response)
}

data()

//dynamically creating products
const createProduct = (items) => {

  section.classList.remove('sectionHeight')
  dessertDiv.innerHTML = ''
  items.forEach((item, index) => {
    let divElt = document.createElement('div')
    divElt.classList.add("dessert");
    divElt.innerHTML =
      `
 <div> 
 <div class="img_button">
      <div class="desertImageDiv"> <img src="${item.image.desktop}" alt="" class="desertImg">
      </div>
      <div class="buttonDiv" >
        <button class="dessertButton" 
                    data-index="${index}" 
                    data-image="${item.image.desktop}" 
                    data-category="${item.category}" 
                    data-name="${item.name}" 
                    data-price="${item.price}" > 
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
          </svg> Add to Cart
          </button>

         <div class="btn hide">
          <button class="iconDiv iconPlus" >
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
           </button>
           <p class="productNumbers"></p>
           <button class="iconDiv iconMinus">
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>
          
          </div>
         
      </div>
       
    </div>
    <div class="productDescription">
      <p class="productCateogry">${item.category}</p>
      <h2 class="productType">${item.name}</h2>
      <p class="productPrice">$ ${item.price}</p>
    </div>
 </div>
`
    dessertDiv.appendChild(divElt)
  })


  //adding eventListener to Dessert button
  document.querySelectorAll('.dessertButton').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = button.dataset.index
      addItems(index)
    })
  })
}


//adding items to cart & increasing number of items
function addItems(index) {
  let productNumber = 1
  section.classList.remove('sectionHeight')
  let dessertBtn = document.querySelectorAll('.dessertButton')
  let btnAll = document.querySelectorAll('.btn')
  let dessertBtn1 = dessertBtn[index]
  let btn1 = btnAll[index]

  let productData = dessertBtn1.dataset;

  dessertBtn1.classList.add('hide')
  btn1.classList.remove('hide')

  svgDiv.classList.add('hide')

  let addButton = btn1.querySelector('.iconPlus')

  btn1.querySelector('.productNumbers').textContent = productNumber;

  //adding items
  addButton.addEventListener('click', () => {
    productNumber++
    btn1.querySelector('.productNumbers').textContent = productNumber
    updateCart(index)
    updateCartPrice()
  })

  let minusButton = btn1.querySelector('.iconMinus')

  //removing items
  minusButton.addEventListener('click', () => {
    productNumber--
    if (productNumber < 1) {
      productNumber = 0

    }
    btn1.querySelector('.productNumbers').textContent = productNumber
    updateCart(index)
    updateCartPrice()
  })
  updateCart(index)

  updateCartPrice()

  //updating cart
  function updateCart(index) {
    let existingProduct = document.querySelector(`.productSelected[id="${productData.name}"]`)
    if (!existingProduct && productNumber > 0) {
      count++
      const Cdiv = document.createElement('div')
      Cdiv.classList.add("productSelected")
      Cdiv.id = (productData.name)
      Cdiv.dataset.index = index;
      Cdiv.innerHTML =
        `
          <div class="">
           <div>
           <p class="CproductType">${productData.name}</p>
           <div class="CcartProductDiv">
           <p class="CproductNumber">${productNumber}x</p>
           <p class="CproductPrice">@$${productData.price}</p>
          <p class="CproductPriceMultiply">$${productData.price * productNumber}</p>
          </div>
          </div>
          </div>
          <button class="removeButton"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg></button>
      `

      cartNumberAdded.innerHTML = `(${count})`
      cartDiv.appendChild(Cdiv)

      Cdiv.querySelector('.removeButton').addEventListener('click', () => {

        cartDiv.removeChild(Cdiv);
        dessertBtn1.classList.remove('hide');
        let btnAll = document.querySelectorAll('.btn');
        btnAll[index].classList.add('hide');
        updateCartPrice(productNumber);
      });

    } else {
      let productQty = existingProduct.querySelector('.CproductNumber')
      let productPriceMultiply = existingProduct.querySelector('.CproductPriceMultiply')
      productQty.innerHTML = `${productNumber}x`
      productPriceMultiply.innerHTML = `$${productData.price * productNumber}`
    }

  }


  let productSelected = document.querySelectorAll('.productSelected')
  function updateCartPrice(productNumber) {
    let productSelected = document.querySelectorAll('.productSelected')
    let existingProduct = document.querySelector(`.productSelected[id="${productData.name}"]`)
    let showTotalPrice = document.querySelector('.totalPrice')

    let newTotalCartPrice = 0
    productSelected.forEach((div) => {

      //to show the cart details on adding
      let order = document.querySelector('.orderSum')
      order.classList.remove('hide')

      let carbon = document.querySelector('.carbon')
      carbon.classList.remove('hide')

      let confirmOrder = document.querySelector('#confirmOrder')
      confirmOrder.classList.remove('hide')



      let price = div.querySelector('.CproductPrice').innerHTML
      let totalPriceReplace = price.replace(/[\$x@]/g, '')
      let totalPrice = Number(totalPriceReplace)


      let productNumber = div.querySelector('.CproductNumber').innerHTML
      let productNumberReplace = productNumber.replace(/[\$x@]/g, '')
      let totalProductNumber = Number(productNumberReplace)

      let totalCartPrice = totalProductNumber * totalPrice
      newTotalCartPrice = newTotalCartPrice + totalCartPrice




      // to remove from cart 
      let removeButton = div.querySelector('.removeButton');


      // Detach any existing event listener
      removeButton.removeEventListener('click', handleRemove);



      // Define the event handler function separately
      function handleRemove() {
        div.remove();
        productNumber = 0
        newTotalCartPrice = newTotalCartPrice - totalPrice * totalProductNumber;
        showTotalPrice.textContent = `$${newTotalCartPrice}`;

        let existingProduct = document.querySelector(".productSelected")
        let reduceProductId = existingProduct.id

      }

      if (totalProductNumber === 0) {
        div.remove();
        dessertBtn1.classList.remove('hide');
        let btnAll = document.querySelectorAll('.btn');
        btnAll[index].classList.add('hide');

      }

      removeButton.addEventListener('click', handleRemove);
      productNumber = 0;
    })
    showTotalPrice.textContent = `$${newTotalCartPrice}`

  }


  //confirming order button event
  confirmOrder.addEventListener("click", () => {
    absoluteDiv.classList.remove('hide')
    section.classList.add('sectionHeight')
    const orderDiv = document.createElement("div")
    orderDiv.classList.add("orderDiv")
    orderDiv.setAttribute('id', productData.name)
    let extistingCart = orderConfirmed.querySelector(`.orderDiv[id="${productData.name}"]`)
    if (!extistingCart) {
      orderDiv.innerHTML = `
        <div class="selectedProduct">
        
          <div class="imageDiv">
            <img src=${productData.image} alt="" class="productImage">
          </div>

           <div class="flex">
          <div class="productInfo">
            <div>
              <p class="productCateogry2">
              ${productData.name}
              </p>
            </div>
            <div class="productQty">
              <p class="productNumber">${productNumber}x</p>
              <p class="totalPriceCart1">@$${productData.price}</p>
            </div>
          
          </div>
         
          <div>
            <p class="totalPriceCart2">$${productData.price * productNumber}</p>
          </div>
          </div>
        </div>
        <div class="selectedProduct">

        </div>
       `
      orderConfirmed.appendChild(orderDiv)

    } else {
      let productQty = extistingCart.querySelector('.productNumber')
      let totalPrice = extistingCart.querySelector('.totalPriceCart1')
      let totalPriceBold = extistingCart.querySelector('.totalPriceCart2')
      productQty.innerHTML = `${productNumber}x`
      totalPrice.innerHTML = `$${productData.price * productNumber}`
      totalPriceBold.innerHTML = `$${productData.price * productNumber}`
    }

    let totalSumofProducts = document.querySelector('.totalPrice').textContent
    let confirmedSum = document.querySelector('.totalPriceCart')
    confirmedSum.innerText = totalSumofProducts
  })


  //start new order
  const resetOrder = () => {
    count = 0
    absoluteDiv.classList.add('hide')
    section.classList.remove('sectionHeight')
    cartNumberAdded.innerText = `(0)`
    document.querySelector('.Cdiv').innerHTML = ""
    document.querySelector('.orderSum').classList.add('hide');
    document.querySelector('.carbon').classList.add('hide');
    document.querySelector('.svgDiv').classList.remove('hide');
    document.querySelector('#confirmOrder').classList.add('hide')

    document.querySelectorAll('.dessertButton').forEach(btn => {
      btn.classList.remove('hide');
    })

    document.querySelectorAll('.btn').forEach(btn => {
      btn.classList.add('hide');
    })
  }

  newOrder.addEventListener('click', resetOrder);
}









































