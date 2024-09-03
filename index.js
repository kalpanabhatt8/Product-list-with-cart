// let dessertDiv=document.querySelector('#dessertData')
let dessert = document.querySelector('.dessertDiv')
let image = document.querySelector('.desertImg')
let cartDiv = document.querySelector('#cartDivDescription')
let CproductType = document.querySelector('.CproductType')
let CproductNumber = document.querySelector('.CproductNumber')
let CproductCateogry = document.querySelector('.CproductPrice')
let CproductPriceMultiply = document.querySelector('.CproductPriceMultiply')
let divProduct = document.querySelector('.divProduct')

// Cdiv.innerHTML = `
// <div class="productSelected">
//       <div>
//       <h2 class="CproductType">1</h2>
//       <div class="CcartProductDiv">
//       <p class="CproductNumber">1</p>
//       <p class="CproductPrice">1</p>
//        <p class="CproductPriceMultiply">1</p>
//       </div>

//       <button class="removeButton">Remove</button>
//       </div>

//       <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg>
//        </div>
//   </div>`


const dessertData = async () => {

  const url = await fetch('./data.json')
  const response = await url.json()
  // console.log(response, "b")

  response.map((item) => {

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
            <button class="dessertButton"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
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

    // console.log(divElt.innerHTML, "this is data")
    dessert.appendChild(divElt)
    // console.log(divElt,"this is div")

    let imageDiv = divElt.querySelector('.desertImg')
    divElt.querySelector('.dessertButton').addEventListener('click',

      (event) => {
        // cartDiv.appendChild(Cdiv)
        console.log("added to cart")
        event.target.style.backgroundColor = "#C83B0E"
        event.target.style.justifyContent = "space-between"
        event.target.style.color = "#ffffff"

        event.target.innerHTML =
          ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          ${productNumber}
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`

        let addItems = divElt.querySelector('.iconPlus')
        let minusItems = divElt.querySelector('.iconMinus')
        // event.target.disabled=true
        console.log(addItems, "this is addItems")
        addItems.enabled = true;
        if (productNumber < 1) {
          imageDiv.style.border = "0px solid #C83B0E"
        } else {
          imageDiv.style.border = "2px solid #C83B0E"
        }


        addItems.addEventListener("click", (evt) => {
          evt.target.enabled = true;
          productNumber = productNumber + 1
          divElt.querySelector(".dessertButton").innerHTML = ""
          console.log(divElt.querySelector(".dessertButton").innerHTML, "this is")
          divElt.querySelector(".dessertButton").innerHTML = ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          ${productNumber}
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`
          console.log(productNumber, "ONE ITEM ADDED")

        })


        minusItems.addEventListener("click", (evt) => {
          evt.target.enabled = true;
          if (productNumber < 1) {
            productNumber = 0
          } else {
            productNumber = productNumber - 1
          }
          divElt.querySelector(".dessertButton").innerHTML = ""
          divElt.querySelector(".dessertButton").innerHTML =
            ` <button class="iconDiv iconPlus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
          ${productNumber}
          <button class="iconDiv iconMinus">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>`
          console.log(productNumber, "ONE ITEM ADDED")
        })

        //       let newCdiv = document.createElement("div")
        //       newCdiv.innerHTML = `
        // <div class="productSelected">
        //   <div>
        //     <h2 class="CproductType                                                                                 ">${productNumber}</h2>
        //     <div class="CcartProductDiv">
        //       <p class="CproductNumber">${productNumber}</p>
        //       <p class="CproductPrice">1</p>
        //       <p class="CproductPriceMultiply">1</p>
        //     </div>
        //     <button class="removeButton">Remove</button>
        //   </div>
        //   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg>
        // </div>`

        // Append the new Cdiv to the divProduct container
        // divProduct.appendChild(newCdiv)
        // let Cdiv = document.createElement("div")

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
          <h2 class="CproductType">${item.name}</h2>
          <div class="CcartProductDiv">
          <p class="CproductNumber">${productNumber}x</p>
          <p class="CproductPrice">@$${item.price}</p>
         <p class="CproductPriceMultiply">$${item.price * productNumber}</p>
         </div>
   
         </div>
         </div>
         <button class="removeButton"> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg></button>
     `
      console.log(`${item.price*productNumber}`, "this is multiplied product")
          divProduct.appendChild(Cdiv)

        } else {
          let productQty=existingProduct.querySelector('.CproductNumber')
          let productPriceMultiply=existingProduct.querySelector('.CproductPriceMultiply')
          productQty.innerHTML=`${productNumber}x`
          productPriceMultiply.innerHTML=`$${item.price * productNumber}`
          
        }

       let removeButton=document.querySelector('.removeButton')
       removeButton.addEventListener('click',()=>{
        Cdiv.remove(divProduct)
       })








        // Create the div and set its class and id
        // const Cdiv = document.createElement('div');
        // Cdiv.classList.add('productSelected');
        // Cdiv.setAttribute('id', item.name);

        // // Check if an element with the same id already exists
        // let existingProduct = divProduct.querySelector(`.productSelected[id="${item.name}"]`);

        // console.log(existingProduct, "this is existing product");

        // if (!existingProduct) {
        //     // If no such element exists, add the new one
        //     Cdiv.innerHTML = `
        //       <div>
        //         <h2 class="CproductType">${productNumber}</h2>
        //         <div class="CcartProductDiv">
        //           <p class="CproductNumber">${productNumber}</p>
        //           <p class="CproductPrice">1</p>
        //           <p class="CproductPriceMultiply">1</p>
        //         </div>
        //         <button class="removeButton">Remove</button>
        //       </div>
        //       <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
        //         <g fill="#8B7D7B">
        //           <path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/>
        //           <path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/>
        //         </g>
        //       </svg>`;
        //     divProduct.appendChild(Cdiv); // Append the new div to the container
        // } else {
        //     // Handle the case where the product already exists
        //     existingProduct.innerHTML = 'this is else part';
        // }
















        //   Cdiv.classList = "productSelected"
        //   // Append the new Cdiv to the divProduct container
        //   divProduct.appendChild(Cdiv)
        //   let existingProduct = divProduct.querySelector(`.productSeleted[data-id=${item.name}]`)
        //   if (!existingProduct) {
        //     // let Cdiv = divProduct.querySelector(".div")
        //     Cdiv.setAttribute("data-id", item.name)
        //     Cdiv.innerHTML =
        //       `
        //       <div class="productSelected">
        //       <div>
        //       <h2 class="CproductType">1</h2>
        //       <div class="CcartProductDiv">
        //       <p class="CproductNumber">1</p>
        //       <p class="CproductPrice">1</p>
        //       <p class="CproductPriceMultiply">1</p>
        //       </div>
        //       <button class="removeButton">Remove</button></div>
        // <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="#8B7D7B"><path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"/></g></svg>
        // </div>
        // </div>`
        //     console.log(existingProduct, "this is existing product")
        //     divProduct.appendChild(Cdiv)
        //   }




      })
  }




  )
}

console.log("add to cart")

dessertData()





