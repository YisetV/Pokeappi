const products = [
  {
    name: "Cama para perro",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1601780411273-6d6c14c1e37a",
  },
  {
    name: "Comida para gato",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1598137264106-1bd5e4d53ed5",
  },
  {
    name: "Juguete mordedor",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1616469829581-cc3b235cda6e",
  },
  {
    name: "Pecera pequeña",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1616941586776-efdc2f540c5e",
  }
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

let cart = [];

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${index})">Agregar al carrito</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  cartCount.textContent = cart.length;
  alert(`${products[index].name} fue agregado al carrito`);
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// Inicializar
displayProducts(products);
