const elProduct = document.querySelector(".allProduct");

function fetchDate(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showDate(data);
    });
}

fetchDate(`https://fakestoreapi.com/products`);

function showDate(data) {
  if (data.length > 0) {
    elProduct.innerHTML = data
      .map((item) => {
        return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100 shadow-sm border-0 rounded-4 position-relative p-3">
        <img 
          src="${item.image}" 
          alt=" " 
          class="card-img-top object-fit-contain mx-auto mt-2" 
          style="width: 150px; height: 150px;"
        />
  
        <button class="btn btn-danger position-absolute top-0 start-0 m-2 px-3 py-1 rounded-pill">
          -35%
        </button>
  
        <div class="position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
          <span class="bg-light text-dark rounded-circle p-2 shadow-sm fs-5">
            <i class="ri-eye-line"></i>
          </span>
          <span class="bg-light text-dark rounded-circle p-2 shadow-sm fs-5">
            <i class="ri-heart-line"></i>
          </span>
        </div>
  
        <div class="card-body text-center d-flex flex-column justify-content-between">
     <h5 class="card-title fw-semibold text-truncate">${item.title.slice(
       0,
       20
     )}...</h5>
  
          <div class="mt-3">
            <p class="fs-5 fw-bold text-dark mb-1">${item.price}$</p>
            <p class="text-muted text-decoration-line-through mb-2">$160</p>
            <button onclick ="getSinglePro(${
              item.id
            }) class="btn btn-primary w-100 rounded-pill"> <a href="../pages/productitems.html"> Buyurtma berish</a> </button>
          </div>
        </div>
      </div>
    </div>
        `;
      })
      .join("");
  }
}

function getSinglePro(id) {
  console.log(id);
  localStorage.setItem("productId", id);
  window.location.href = "../pages/productitems.html";
}