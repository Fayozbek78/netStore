const elDate = document.querySelector(".date");

function getDate() {
  const date = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  elDate.innerHTML = date.toLocaleString("en-US", options);
}

setInterval(getDate, 1000);

const elDiscount = document.getElementById("discount");

async function fetchDate(url) {
  const res = await fetch(url);
  const data = await res.json();
  showDate(data);
}

fetchDate(`https://fakestoreapi.com/products`);

function showDate(data) {
  if (data.length > 0) {
    let items = "";

    // Har 3 ta elementni bitta carousel-item ichida guruhlab chiqamiz
    for (let i = 0; i < data.length; i += 3) {
      items += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="row justify-content-center gap-3">
            ${data
              .slice(i, i + 3)
              .map(
                (item) => `
              <div class="card border-0 shadow-sm rounded-4 text-center p-3" style="width: 18rem;">
                <div class="position-relative">
                  <img 
                    src="${item.image}" 
                    alt="${item.title}" 
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
                </div>

                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title fw-semibold text-truncate">${item.title.slice(
                    0,
                    20
                  )}...</h5>
                  <div class="mt-3">
                    <p class="fs-5 fw-bold text-dark mb-1">${item.price}$</p>
                    <p class="text-muted text-decoration-line-through mb-2">
                      $${Math.round(item.price / 0.65)}
                    </p>
                    <button class="btn btn-primary w-100 rounded-pill">Buyurtma berish</button>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    elDiscount.innerHTML = items;
  }
}
