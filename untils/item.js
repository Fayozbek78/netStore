const elItemContainer = document.querySelector(".item-container");

function getSingleProduct() {
  const id = localStorage.getItem("productId");
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getSingleProduct();

function renderSingleProduct(data) {
  elItemContainer.innerHTML = `

       <div
          class="item d-flex justify-content-between align-items-center border gap-5"
        >
          <div>
            width = "500"
            <img src="${item.image}" alt="" />
          </div>

          <div>
            <h2 class="text-capitalize fw-bold fs-2 w-100">${item.title}</h2>

            <h1 class="fs-1 fw-bold text-uppercase">${data.price}</h1>
            <p class="fs-4 fw-bold">${data.descripton}</p>
          </div>
        </div>
    `;
}
