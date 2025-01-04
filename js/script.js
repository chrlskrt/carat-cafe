// Fetch data from local JSON files
async function fetchJSONData(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Error fetching ${filePath}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error(`Failed to fetch data from ${filePath}: ${err}`);
    return null;
  }
}

// Getting necessary items from the index.html file
const productDisplaySection = document.getElementById("product-display");
const searchInput = document.getElementById("search-input");
const artistFilter = document.getElementById("artist-filter");
const typeFilter = document.getElementById("type-filter");
const versionFilter = document.getElementById("version-filter");
const noProductsAvailable = document.getElementById("no-products-available");
const products = [];

function filterAndDisplayProducts() {
  let filteredProducts = products;

  // Get the current search query and filters
  let searchQuery = searchInput.value.toLowerCase();
  let artistFilterValue = artistFilter.value;
  let typeFilterValue = typeFilter.value;
  let versionFilterValue = versionFilter.value;

  // Filter products based on search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.artist.toLowerCase().includes(searchQuery)
    );
  }

  // Filter products based on artist filter
  if (artistFilterValue !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.artist === artistFilterValue
    );
  }

  // Filter products based on type filter
  if (typeFilterValue !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.type === typeFilterValue
    );
  }

  // Filter products based on version filter
  if (versionFilterValue !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.version === versionFilterValue
    );
  }

  displayProducts(filteredProducts);
}

// Function that will initialize the page
async function initializePage() {
  // Fetch products from local JSON file
  let fetchproducts = await fetchJSONData("./data/product_items.json");

  // Add the fetched products to the global product list
  products.push(...fetchproducts);

  // Getting the set filters to filter the products list
  // Then display the products
  filterAndDisplayProducts();
}

// Displaying products
function displayProducts(filteredProducts) {
  setTimeout(() => {
    // Clear the product display section
    productDisplaySection.innerHTML = "";

    if (filteredProducts.length > 0) {
      noProductsAvailable.classList.add("hidden");

      // Go through all the products
      filteredProducts.forEach((product) => {
        // Create a new product card element
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.classList.add("product-item");
        productCard.innerHTML = `
        <img src="${product.imgURL}" alt="${product.name} image" />
        <div class="product-card-details">
          <h5>${product.name}</h5>
          <span>₱${product.price}</span>
        </div>
      `;

        // Add the new product card element to the Product display section
        productDisplaySection.appendChild(productCard);
      });
    } else {
      // Show the 'no products available' div if the filteredProducts is empty
      noProductsAvailable.classList.remove("hidden");
    }
  }, 100);
}

initializePage(); // Start the page initialization process on page load.

// Add event listeners to the search input, artist filter, type filter, and version filter
searchInput.addEventListener("input", filterAndDisplayProducts);
artistFilter.addEventListener("change", filterAndDisplayProducts);
typeFilter.addEventListener("change", filterAndDisplayProducts);
versionFilter.addEventListener("change", filterAndDisplayProducts);
